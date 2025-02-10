import { useState } from "react";
import PlayerCard from "../components/PlayerCard";

const defaultHoles = Array(9).fill({ par: 3, score: 0, penalty: 0 });

export default function GamePage() {
    const [players, setPlayers] = useState([
        { id: 1, name: "Player 1", photo: "", holes: [...defaultHoles] },
        { id: 2, name: "Player 2", photo: "", holes: [...defaultHoles] },
    ]);

    const handleScoreChange = (playerId, holeIndex, value) => {
        setPlayers(players.map(player =>
            player.id === playerId
                ? {
                    ...player,
                    holes: player.holes.map((hole, index) =>
                        index === holeIndex ? { ...hole, score: Number(value) } : hole
                    )
                }
                : player
        ));
    };

    const handlePenalty = (playerId, holeIndex, value) => {
        setPlayers(players.map(player =>
            player.id === playerId
                ? {
                    ...player,
                    holes: player.holes.map((hole, index) =>
                        index === holeIndex ? { ...hole, penalty: Number(value) } : hole
                    )
                }
                : player
        ));
    };

    const getTotalScore = (player) => {
        return player.holes.reduce((total, hole) => total + hole.score + hole.penalty, 0);
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-xl font-bold mb-4">Pub Golf Scorecard</h1>
            {players.map(player => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    handleScoreChange={handleScoreChange}
                    handlePenalty={handlePenalty}
                    getTotalScore={getTotalScore}
                />
            ))}
        </div>
    );
}