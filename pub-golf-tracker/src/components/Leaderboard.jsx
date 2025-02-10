import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Leaderboard({ players, getTotalScore }) {
    const getLeaderboard = () => {
        return [...players].sort((a, b) => getTotalScore(a) - getTotalScore(b));
    };

    return (
        <div className="leaderboard card">
            <div className="card-body">
                <h2 className="card-title">Leaderboard</h2>
                <ol className="list-group list-group-numbered">
                    {getLeaderboard().map((player) => (
                        <li key={player.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="leaderboard-player">
                                <img src={player.photo || "https://via.placeholder.com/40"} alt={player.name} className="leaderboard-photo" />
                                <span className="leaderboard-name">{player.name}</span>
                            </div>
                            <span className="badge bg-primary rounded-pill">Score: {getTotalScore(player)}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
