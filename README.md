# Tennis Application

A full-stack web application for viewing and analyzing tennis player statistics and match history. Built with React, Node.js, Express, and MongoDB.

## 🎾 Features

- **Player Search**: Search for tennis players by name
- **Match History**: View detailed match history with filtering options
- **Statistics**: Display player statistics including:
  - Height and physical attributes
  - Total matches played
  - Win/loss records
  - Match results by surface (Clay, Grass, Hard)
- **Pagination**: Browse through match history with pagination controls
- **Responsive Design**: Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hooks** - State management (useState)

### Backend
- **Node.js 24** - Runtime environment
- **Express 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
TennisApplication/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── Schemas.js         # MongoDB schemas
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Card.jsx           # Player card component
│   │   │   ├── SearchForm.jsx     # Search form component
│   │   │   ├── MatchesList.jsx    # Match history with pagination
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── App.jsx        # Main application component
│   │   └── index.css
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 24+ installed
- MongoDB installed and running (or use Docker)
- Docker Desktop (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TennisApplication
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGO_CRED=mongodb://localhost:27017/tennis-app
   ```

### Running Locally

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:8000`

3. **Start the frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Running with Docker

1. **Build and start all services**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`
   - MongoDB: `localhost:27017`

3. **Stop all services**
   ```bash
   docker-compose down
   ```

## 📡 API Endpoints

### Get Player Statistics
```
GET /api/playerStats?playerName={name}&matchesYear={year}&courtSurface={surface}
```

**Parameters:**
- `playerName` (required): Full name of the player
- `matchesYear` (optional): Filter by year (e.g., "2023") or "all"
- `courtSurface` (optional): Filter by surface ("Clay", "Grass", "Hard") or "all"

**Example:**
```bash
GET /api/playerStats?playerName=Roger Federer&matchesYear=2023&courtSurface=Grass
```

**Response:**
```json
{
  "name": "Roger Federer",
  "country": "Switzerland",
  "age": "42",
  "hand": "Right",
  "height": 185,
  "matches": [
    {
      "opponent": "Novak Djokovic",
      "result": "W",
      "score": "6-4, 6-3",
      "date": "2023-07-15",
      "surface": "Grass",
      "tournament": "Wimbledon",
      "round": "Final"
    }
  ]
}
```

## 🎨 Components

### SearchForm
- Handles player search input
- Filters by year and court surface
- Form validation

### Card
- Displays player profile
- Shows player statistics
- Integrates match history

### MatchesList
- Paginated match history display
- Navigation controls (prev/next)
- Displays opponent, result, date, and surface

## 🧪 Development

### Backend Scripts
```bash
npm start      # Start production server
npm run dev    # Start with nodemon (auto-reload)
```

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration

### MongoDB Schema

```javascript
{
  name: String,
  country: String,
  age: String,
  hand: String,
  height: Number,
  matches: [{
    opponent: String,
    result: String,
    score: String,
    date: String,
    surface: String,
    tournament: String,
    round: String
  }]
}
```

## 📝 Learning Resources

This project demonstrates:
- React component architecture
- Props and state management
- Form handling and validation
- API integration with fetch
- MongoDB aggregation pipelines
- Docker containerization
- RESTful API design
- Responsive UI design with Tailwind CSS

## 🚧 Future Enhancements

- [ ] User authentication and authorization
- [ ] Advanced filtering and sorting
- [ ] Data visualization with charts
- [ ] Real-time match updates
- [ ] Player comparison feature
- [ ] Export functionality (PDF/CSV)
- [ ] Unit and integration tests
- [ ] CI/CD pipeline

## 📄 License

ISC

## 👤 Author

Built as a learning project for full-stack web development.

---

**Note**: This is a learning project. Make sure to populate your MongoDB database with player data before testing the application.

