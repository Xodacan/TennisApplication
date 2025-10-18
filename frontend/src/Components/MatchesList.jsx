import { useState} from "react";

function MatchesList(matches) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const [currentItems, setCurrentItems] = useState(matches.matches.slice(0, itemsPerPage));
    const totalPages = Math.ceil(matches.matches.length / itemsPerPage);

    const nextClick = () => {
        if(currentPage >= totalPages) {
            return;
        }
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        const startIndex = (nextPage * itemsPerPage) - itemsPerPage;
        if(currentPage == totalPages) {
            setCurrentItems(matches.matches.slice(startIndex, startIndex + (matches.length % itemsPerPage)));
        } else { 
            setCurrentItems(matches.matches.slice(startIndex, startIndex + itemsPerPage)); 
        }
    }
    
    const prevClick = () => {
        if(currentPage == 1) {
            return;
        }
        const prevPage = currentPage - 1; 
        setCurrentPage(prevPage);
        const startIndex = (prevPage * itemsPerPage) - itemsPerPage;
        setCurrentItems(matches.matches.slice(startIndex, startIndex + itemsPerPage));
    }
    
    return(
        <>
            <div classname="text-black">
            { matches &&  
                <ul className="text-black">
                    {
                        currentItems.map((item, idx) => (
                            <li className="flex-1 min-w-64 p-4 border rounded" key={idx}> Opponent: {item.opponent}   Result: {item.result}   Date: {item.date}</li>
                        ))
                    }
                </ul>
            }
            </div>

            <div className="flex flex-row justify-between mb-4 py-6">
                <button className="ml-2" onClick={prevClick}>prev</button>
                <div className="text-black"> {currentPage} </div>
                <button className="mr-2" onClick={nextClick}>next</button>
            </div>
        </>
    )
}

export default MatchesList;