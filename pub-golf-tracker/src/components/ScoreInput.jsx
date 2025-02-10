import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ScoreInput({ holeIndex, hole, playerId, handleScoreChange, handlePenalty }) {
    return (
        <tr>
            <td>{holeIndex + 1}</td>
            <td>{hole.par}</td>
            <td>
                <input
                    type="number"
                    className="form-control"
                    value={hole.score}
                    onChange={(e) => handleScoreChange(playerId, holeIndex, e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="form-control"
                    value={hole.penalty}
                    onChange={(e) => handlePenalty(playerId, holeIndex, e.target.value)}
                />
            </td>
        </tr>
    );
}
