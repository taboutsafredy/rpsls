import React from "react";
import WebApp from "@twa-dev/sdk";

function LoseOrWin ({loseOrWin, setStartGame}: {loseOrWin: string, setStartGame: Function}) {
    const handleStartGame = () => {
        WebApp.HapticFeedback.impactOccurred("medium");
        setStartGame(false);
    };

    return (
        <div className="lose-or-win">
            <h1>{loseOrWin}</h1>
            <div className="play-again-btn" onClick={() => handleStartGame()}>
                <span className="set-other-game">
                    PLAY AGAIN
                </span>
            </div>
        </div>
    );
}

export default LoseOrWin;