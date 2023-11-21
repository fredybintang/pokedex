"use client"

import Image from "next/image"
import { useState } from "react"

const PokemonCard = ({ id, name, image, type, weight, height, stats, statsName, bgColor }) => {
    const [isShown, setIsShown] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="container m-auto">
            <div className="pokelist text-capitalize">
                <div className="relative md:grid grid-cols-3 gap-16 block px-3">
                    <div className="container">
                        <div className="pokecards">
                            <div className="pokecard bg-neutral-300 rounded-full my-1 flex justify-between items-center px-4 hover:text-white bg-gradient-card-hover"
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                onClick={() => setModalOpen(true)}
                            >
                                <div className="poke-id">{id}</div>
                                <Image src={image} alt={name} width={50} height={50} className="poke-img object-cover" priority />
                                <h3 className="font-bold text-sm">{name}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="pokeshow fixed">
                            {isShown && (
                                <div className={`pokecard-details p-3 ${bgColor}`}>
                                    <Image src={image} alt={name} width={250} height={250} className="poke-img object-cover" priority />
                                    <h3 className="font-bold text-2xl">{name}</h3>
                                    <h3 className="text-uppercase text-md">{type}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="container relative flex justify-center">
                        <div className="pokestats fixed">
                            {isShown && (
                                <div className="pokestats-details">
                                    <div className="pokecard flex justify-between items-center px-4 text-white bg-gradient-card-nonhover">
                                        <div className="poke-id">{id}</div>
                                        <h3 className="font-bold text-sm">{name}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
                                    </div>
                                    <div className="pokestats-detail flex flex-row">
                                        <div className="px-12 my-3">
                                            <h3>Type</h3>
                                            <h3>Weight</h3>
                                            <h3>Height</h3>
                                        </div>
                                        <div className="text-center px-12 my-3">
                                            <h3>{type}</h3>
                                            <h3 className="text-lowercase">{weight} lbs</h3>
                                            <h3 className="text-lowercase">{height} cm</h3>
                                        </div>
                                    </div>
                                    <div className="base-stats flex flex-row">
                                        <div className="text-center px-12 my-3">
                                            {statsName.map((stats) => (
                                                <h3>{stats}</h3>
                                            ))}
                                        </div>
                                        <div className="text-center px-12 my-3">
                                            {stats.map((stats) => (
                                                <h3>{stats}</h3>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className={`modal flex justify-center items-center modal-${bgColor}`}
                    onClick={() => setModalOpen(false)}
                >
                    <div className={`modal-content`}>
                        <div className="text-capitalize">
                            <div className="pokecard flex justify-between items-center px-4 py-2 text-white bg-gradient-card-nonhover">
                                <div className="poke-id">{id}</div>
                                <h3 className="font-bold text-sm">{name}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
                            </div>
                            <div className="flex justify-center">
                                <Image src={image} alt={name} width={250} height={250} className="poke-img object-cover" priority />
                            </div>
                            <div className="pokestats-detail flex flex-row bg-gray-400">
                                <div className="px-12 my-3">
                                    <h3>Type</h3>
                                    <h3>Weight</h3>
                                    <h3>Height</h3>
                                    {statsName.map((stats) => (
                                        <h3>{stats}</h3>
                                    ))}
                                </div>
                                <div className="text-center px-12 my-3">
                                    <h3>{type}</h3>
                                    <h3 className="text-lowercase">{weight} LBS</h3>
                                    <h3 className="text-lowercase">{height} CM</h3>
                                    {stats.map((stats) => (
                                        <h3>{stats}</h3>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PokemonCard