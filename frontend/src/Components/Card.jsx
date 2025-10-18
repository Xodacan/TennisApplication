import React from 'react';
import MatchesList from './MatchesList';

const winMatches = (matches) => {
    var count = 0;
    for(const match of matches) {
        if(match.result == "W") {
            count++;
        }
    }
    return count;
}

function Card({card}) {
    return (<>
            {card && <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-24">
                <div class="px-6">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full flex justify-center">
                            <div class="relative">
                                <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                            </div>
                        </div>
                        <div class="w-full text-center mt-20">
                            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                                <div class="p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{card.height}</span>
                                    <span class="text-sm text-slate-400">Height (cm)</span>
                                </div>
                                <div class="p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{card.matches.length}</span>
                                    <span class="text-sm text-slate-400">Matches Played</span>
                                </div>
                                <div class="p-3 text-center">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{winMatches(card.matches)}</span>
                                    <span class="text-sm text-slate-400">Matches Won</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center py-6 mt-2">
                        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{card.name}</h3>
                        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{card.country}
                        </div>
                    </div>
                    <div className = "">
                        <MatchesList matches = {card.matches}/>
                    </div>
                </div>
            </div>}
        </>
    )}
        
export default Card;