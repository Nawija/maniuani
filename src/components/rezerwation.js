import React, { useState } from "react";

import { BsFillCalendarHeartFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

import { Link } from "gatsby";

const Rezerwation = () => {
    const [showRezerwation, setRezerwation] = useState(false);
    const handleRezerwation = () => setRezerwation(!showRezerwation);
    const closeRezerwation = () => setRezerwation(false);

    return (
        <>
            <button
                onClick={handleRezerwation}
                className="fixed bottom-4 right-4 z-[99] bg-pink-500 p-4 rounded-full"
            >
                <BsFillCalendarHeartFill className="text-white w-6 h-6" />
                <div className=" absolute p-8 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-400 rounded-full animate-pulse " />
            </button>
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-pink-100/70 backdrop-blur-xl z-[999] flex items-center justify-center transition-opacity duration-300 ${
                    showRezerwation ? "opacity-100" : "opacity-0 h-0 w-0 scale-0"
                }`}
            >
                <div className="relative p-10 flex items-center justify-center flex-col text-white bg-pink-300 shadow-xl w-max mx-auto">
                    <button onClick={closeRezerwation} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full">
                        <GrFormClose className="h-5 w-5" />
                    </button>
                    <p className="text-lg font-bold pb-4">Zarezerwuj Termin</p>
                    <p>Tel: 555 5555 555</p>
                    <p>Mesenger ...</p>
                </div>
            </div>
        </>
    );
};

export default Rezerwation;
