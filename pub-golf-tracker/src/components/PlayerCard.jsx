import ScoreInput from "./ScoreInput";

export default function PlayerCard({ player, handleScoreChange, handlePenalty, getTotalScore }) {
    return (
        <div className="mb-4 p-4 border rounded-lg shadow">
            <div className="flex items-center mb-2">
                <img
                    src={player.photo || "https://via.placeholder.com/50"}
                    alt={player.name}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-lg font-semibold">{player.name}</h2>
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm">
                <span>Hole</span>
                <span>Par</span>
                <span>Score</span>
                <span>Penalty</span>
                {player.holes.map((hole, index) => (
                    <ScoreInput
                        key={index}
                        holeIndex={index}
                        hole={hole}
                        playerId={player.id}
                        handleScoreChange={handleScoreChange}
                        handlePenalty={handlePenalty}
                    />
                ))}
            </div>
            <p className="mt-2 font-bold">Total Score: {getTotalScore(player)}</p>
        </div>
    );
}