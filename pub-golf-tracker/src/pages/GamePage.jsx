import { useState } from "react";
import PlayerCard from "../components/PlayerCard";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultHoles = [
    { par: 3, score: 0, penalty: 0 },
    { par: 4, score: 0, penalty: 0 },
    { par: 5, score: 0, penalty: 0 },
    { par: 3, score: 0, penalty: 0 },
    { par: 4, score: 0, penalty: 0 },
    { par: 5, score: 0, penalty: 0 },
    { par: 3, score: 0, penalty: 0 },
    { par: 4, score: 0, penalty: 0 },
    { par: 5, score: 0, penalty: 0 },
];


export default function GamePage() {
    const [players, setPlayers] = useState([
        { id: 1, name: "Bagman", photo: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/468708106_10161212479147991_8769944180119278188_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=rUM_4JRyCewQ7kNvgEm0S1Y&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=AS5V1J2EzxTKqHT2Qw92Y08&oh=00_AYDcq1XZnDU9hz8gbhan4Dz5L6tkxBhBR5l56a8mgMsnGg&oe=67B04970", holes: [...defaultHoles] },
        { id: 2, name: "Mylo", photo: "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/468507452_10161052502967613_6268220973230318123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5bbf69&_nc_ohc=pk3N0ZJfSmEQ7kNvgGQbp2S&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=AdWYrnt4veR2HO4BFNxdtFg&oh=00_AYAwgX20jgzZYL1vXdJVZgbf9XYGGqcmSR5N2D3Aca_PPQ&oe=67B05F1A", holes: [...defaultHoles] },
        { id: 3, name: "Wellsy", photo: "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/468209535_10161185275637991_7829885542476176408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=40OmHydH7UMQ7kNvgGverQW&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=AX0h58i_cOycfnngAm0XO2V&oh=00_AYBfSYWKef9nIA3ICk7IIUH0LyPUWh8x641T1AtyHpnbzA&oe=67B03177", holes: [...defaultHoles] },
        { id: 4, name: "Dyson", photo: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/463337364_10210664424122285_1763208718360368639_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=5OK8R6OwZ84Q7kNvgHemoL2&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=AKwbsKEu0bXul-t4QtLdqz6&oh=00_AYBlu3HAC186MkFG6-JnKmK-RwG9ipGg1WvH7XrGSYWv1w&oe=67B05BA5", holes: [...defaultHoles] },
        { id: 5, name: "Talbot", photo: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/468390758_10161559625274681_1989586758156898954_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JfRD4AhiaFAQ7kNvgHkTy0M&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=AFK-DuJqI0R0zkDgjMs6O3a&oh=00_AYDBhW2FohmrH_kfuhv4IU864kr5EFRLfPz7Ez8YEoIvoQ&oe=67B05E88", holes: [...defaultHoles] },
        { id: 6, name: "Lenny Mercury", photo: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/384574316_10159668460237224_1620138892808124650_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JDHFCQAbw48Q7kNvgE_LTIK&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=A9xrplvKGp6Qbyuzk9ycdbg&oh=00_AYCJDfM-joacK6ffnZWtVwUsy6D5h7DekhXFVtennI-J_g&oe=67B053F2", holes: [...defaultHoles] },
        { id: 7, name: "Mee Lurphy", photo: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/468310477_10162254924810242_1800391460459317472_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=tYXujVmAOvoQ7kNvgETWHUt&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=AoZidsUVLCGesVPWCH9Ac8W&oh=00_AYDgSdiRTHGhO2t-7czZA3IsTXGCC8i6RlMPvaXpAwPUcg&oe=67B05666", holes: [...defaultHoles] },
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
        <div className="container text-center mt-4">
            <h1 className="game-title">Pub Golf Scorecard</h1>
            <div className="row">
                {players.map(player => (
                    <div className="col-md-6" key={player.id}>
                        <PlayerCard
                            player={player}
                            handleScoreChange={handleScoreChange}
                            handlePenalty={handlePenalty}
                            getTotalScore={getTotalScore}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
