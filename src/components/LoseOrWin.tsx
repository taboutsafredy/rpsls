import React from "react";

function LoseOrWin ({loseOrWin, setStartGame}: {loseOrWin: string | null, setStartGame: Function}) {
    return (
        <div className="lose-or-win">
            <h1>YOU {loseOrWin}</h1>
            <div className="play-again-btn" onClick={() => setStartGame(false)}>
                <span className="set-other-game">
                    PLAY AGAIN
                </span>
            </div>
        </div>
    );
}

export default LoseOrWin;