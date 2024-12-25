import "../styles/Score.css"
import React from "react"
import logo from "../assets/images/logo-bonus.svg"

function Score ({score}: {score: number}) {
    
    return (
        <div className="game-score" id="game-score">
            <div className="game-choices-items-logo">
                <img src={logo} alt="RPS LOGO!" />
            </div>
            <div className="game-set-score-value">
                <span className="score-title">
                    SCORE
                </span>
                <span className="score-value">{score}</span>
            </div>
        </div>
    );
    
}

export default Score;