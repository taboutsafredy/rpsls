import "../styles/Steps.css";
import React, { useCallback, useEffect, useState } from "react";
import Choice from "./choices/Choises";
import LoseOrWin from "./LoseOrWin";


enum EChoice {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors',
    Spock = 'spock',
    Lizard = 'lizard'
};

type TRules = Record<EChoice, EChoice[]>;

const CHOICES: EChoice[] = [
    EChoice.Rock,
    EChoice.Paper,
    EChoice.Scissors,
    EChoice.Spock,
    EChoice.Lizard
];

const RULES: TRules = {
    [EChoice.Rock]: [EChoice.Scissors, EChoice.Lizard],
    [EChoice.Paper]: [EChoice.Rock, EChoice.Spock],
    [EChoice.Scissors]: [EChoice.Paper, EChoice.Lizard],
    [EChoice.Spock]: [EChoice.Rock, EChoice.Scissors],
    [EChoice.Lizard]: [EChoice.Paper, EChoice.Spock]
};

interface IStep {
    choice: EChoice | null, 
    setStartGame: Function, 
    setScore: Function
};

function Steps ({ score, setScore }: { score: number, setScore: Function }) {
    
    const [startGame, setStartGame] = useState<boolean>(false);
    const [choice, setChoice] = useState<EChoice | null>(null);
    const handlePlayerChoice = (choice: EChoice | null) => {
        setChoice(choice);
        setStartGame(!startGame);
    }

    return (
        <main id="main">
            <div className="game">
                { startGame ?
                    <StepTwo choice={choice}  setStartGame={setStartGame} setScore={setScore}/> 
                    :
                    <StepOne handleChoice={ handlePlayerChoice } /> 
                } 
            </div>
        </main>
    );
}



const StepOne = ({ handleChoice }: { handleChoice: Function }) => {
    return (
        <div className="game-step-one">
            <Choice getChoice="scissors" onClick={() => handleChoice("scissors")}/>
            <div className="spock-and-paper" id="spock-and-paper">
                <Choice getChoice="spock" onClick={() => handleChoice("spock")}/>
                <Choice getChoice="paper" onClick={() => handleChoice("paper")}/>
            </div>
            <div className="rock-and-lizard" id="rock-and-lizard">
                <Choice getChoice="rock" onClick={() => handleChoice("rock")}/>
                <Choice getChoice="lizard" onClick={() => handleChoice("lizard")}/>
            </div>    
        </div>
    );
}

const StepTwo = ({choice, setStartGame, setScore}: IStep) => {

    const [houseChoice, setHouseChoice] = useState<EChoice | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [Hanimate, setHAnimate] = useState<boolean>(false);
    const [Uanimate, setUAnimate] = useState<boolean>(false);

    useEffect(() => {
        const houseChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setHouseChoice(houseChoice);
    }, []);
     
    const getWinner = useCallback((housePicked: EChoice , RULES: TRules, choice: EChoice): string => {
        if (choice && RULES[housePicked as keyof TRules].includes(choice)) {
            setHAnimate(true);
            return "YOU LOSE 😑";
        } else if (choice && RULES[choice as keyof TRules].includes(housePicked)) {
            setUAnimate(true);
            setScore((score: number) => score + 1); 
            return "YOU WIN 🏆";
        } else {
            return "DRAW 😤";
        }
    }, [setScore]); 

    useEffect(() => {
        if (houseChoice === null || choice === null) return;
        const setWinnerTimer = setTimeout(() => {
            const getResult = getWinner(houseChoice, RULES, choice);
            setResult(getResult);
        }, 500);
        return () => clearTimeout(setWinnerTimer);
    }, [houseChoice, choice, getWinner]);

    return (
        <div className="game-step-two">
            <div className="player-picked">
                <h2>YOU PICKED</h2>
                {choice && <Choice getChoice={choice} Uanimate={Uanimate} />}
            </div>
            {result && <LoseOrWin loseOrWin={result} setStartGame={setStartGame}/>}
            <div className="the-house-picked">
                <h2>THE HOUSE PICKED</h2>
                {houseChoice && <Choice getChoice={houseChoice} Hanimate={Hanimate} />}
            </div>
        </div>
    );
}


export default Steps;