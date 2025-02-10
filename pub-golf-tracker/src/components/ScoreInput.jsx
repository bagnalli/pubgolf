export default function ScoreInput({ holeIndex, hole, playerId, handleScoreChange, handlePenalty }) {
    return (
        <>
            <span>{holeIndex + 1}</span>
            <span>{hole.par}</span>
            <input
                type="number"
                value={hole.score}
                onChange={(e) => handleScoreChange(playerId, holeIndex, e.target.value)}
                className="border p-1 w-12"
            />
            <input
                type="number"
                value={hole.penalty}
                onChange={(e) => handlePenalty(playerId, holeIndex, e.target.value)}
                className="border p-1 w-12"
            />
        </>
    );
}