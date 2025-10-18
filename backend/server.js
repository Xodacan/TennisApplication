const express = require('express');
const app = express();
const path = require('path');
const API_PORT = 8000;
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const Player = require('./Schemas');

const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());

require('dotenv').config();
const mongoURI = process.env.MONGO_CRED;
mongoose.connect(mongoURI);

app.get('/api/working', (req, res) => {
  res.json({ message: "Hello from API server!" });
});

app.get('/api/playerStats', async (req,res) => {
   try {
    const { playerName, matchesYear, courtSurface } = req.query;
    const searchPlayer = await searchPlayerDB(playerName, matchesYear, courtSurface);
    res.send(searchPlayer[0]);
  } catch (error) {
    console.error("Error in /api/playerStats:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
})

app.listen(API_PORT, () => {
  console.log(`API server running on http://localhost:${API_PORT}`);
});


//change this to mongoose code
async function searchPlayerDB(name, date, surface) {
    try{
        const searchPlayer = await Player.aggregate([
            { $match: { name: name } },
            { $project: {
                name: 1,
                country: 1,
                hand: 1,
                height: 1,
                matches: {
                  $filter: {
                    input: "$matches",
                    as: "match",
                    cond: {
                      $and: [
                        // Conditional year comparison
                        { 
                          $or: [
                            { $eq: [date, "all"] }, // if user passed 'all', ignore
                            { $eq: [ { $substr: ["$$match.date", 0, 4] }, date] }
                          ]
                        },
                        { 
                          $or: [
                            { $eq: [surface, "all"] }, // if user passed 'all', ignore
                            { $eq: ["$$match.surface", surface] } 
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            }
          ]);
        return searchPlayer; 
    }catch(e){
        console.log(e.message)
    }
}