




import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React from "react";

interface Props {
    note: number;
}

export default function noteEtoile ({ note }: Props) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (note >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (note >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-300" />);
        }
    }

    return (
        <div className="flex items-center gap-2">
            <div className="flex">{stars}</div>
            <span className="text-sm text-gray-600 font-medium">{note.toFixed(1)}</span>
        </div>
    );
};


