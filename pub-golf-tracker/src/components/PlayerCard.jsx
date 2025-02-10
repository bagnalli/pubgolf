import ScoreInput from "./ScoreInput";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PlayerCard({ player, handleScoreChange, handlePenalty, getTotalScore }) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img
                    src={player.photo || "https://via.placeholder.com/50"}
                    alt={player.name}
                    className="rounded-circle me-2 player-photo"
                />
                <h5 className="mb-0">{player.name}</h5>
            </div>
            <div className="card-body">
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Hole</th>
                            <th>Par</th>
                            <th>Score</th>
                            <th>Penalty</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
                <p className="fw-bold">Total Score: {getTotalScore(player)}</p>
            </div>
        </div>
    );
}
