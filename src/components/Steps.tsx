import confetti from "canvas-confetti"
import React, { useCallback, useEffect, useState } from "react";
import MakeChoice from "./choices/MakeChoices"
import "../styles/Steps.css"
import LoseOrWin from "./LoseOrWin";


enum Choice {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors',
    Spock = 'spock',
    Lizard = 'lizard'
}

type R = Record<Choice, Choice[]>;

const CHOICES: Choice[] = [
    Choice.Rock,
    Choice.Paper,
    Choice.Scissors,
    Choice.Spock,
    Choice.Lizard
];

const RULES: R = {
    [Choice.Rock]: [Choice.Scissors, Choice.Lizard],
    [Choice.Paper]: [Choice.Rock, Choice.Spock],
    [Choice.Scissors]: [Choice.Paper, Choice.Lizard],
    [Choice.Spock]: [Choice.Rock, Choice.Scissors],
    [Choice.Lizard]: [Choice.Paper, Choice.Spock]
};

type Two = {
    choice: Choice | null, 
    setStartGame: Function, 
    score: number, 
    setScore: Function
}

function Steps ({score, setScore}: {score:number, setScore: Function}) {
    
    const [startGame, setStartGame] = useState<boolean>(false);
    const [choice, setChoice] = useState<Choice | null>(null);
    const handleChoice = (choice: Choice | null) => {
        setChoice(choice);
        setStartGame(!startGame);
    }

    return (
        <main id="main">
            <div className="game">
                { !startGame ? <StepOne handleChoice={handleChoice}/> : <StepTwo choice={choice}  setStartGame={setStartGame} score={score} setScore={setScore}/> } 
            </div>
        </main>
    );
}



const StepOne = ({handleChoice}: {handleChoice: Function}) => {
    
    return (
        <div className="game-step-one">
            <MakeChoice getChoice="scissors" onClick={() => handleChoice("scissors")}/>
            <div className="spock-and-paper" id="spock-and-paper">
                <MakeChoice getChoice="spock" onClick={() => handleChoice("spock")}/>
                <MakeChoice getChoice="paper" onClick={() => handleChoice("paper")}/>
            </div>
            <div className="rock-and-lizard" id="rock-and-lizard">
                <MakeChoice getChoice="rock" onClick={() => handleChoice("rock")}/>
                <MakeChoice getChoice="lizard" onClick={() => handleChoice("lizard")}/>
            </div>    
        </div>
    );
}

const StepTwo = ({choice, setStartGame, score, setScore}: Two) => {

    const [houseChoice, setHouseChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [Hanimate, setHAnimate] = useState<boolean>(false);
    const [Uanimate, setUAnimate] = useState<boolean>(false);
     
    const getWinner = useCallback((housePicked: Choice , RULES: R, choice: Choice): string => {
        if (choice && RULES[housePicked as keyof R].includes(choice)) {
            setHAnimate(true);
            return "LOSE";
        } else if (choice && RULES[choice as keyof R].includes(housePicked)) {
            setUAnimate(true);
            setScore((score: number) => score + 1); 
            const setConfetti = confetti.create(document.getElementById('canvas') as HTMLCanvasElement, { useWorker: true });
            setConfetti({ particleCount: 100, spread: 70, origin: { y:2 } });
            setTimeout(() => { setConfetti.reset(); }, 1000);
            return "WIN";
        } else {
            return "🫂";
        }
    }, [setScore]); 
 
    useEffect(() => {
            const houseChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
            setHouseChoice(houseChoice);
    }, []);

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
                {choice && <MakeChoice getChoice={choice} Uanimate={Uanimate} />}
            </div>
            {result && <LoseOrWin loseOrWin={result} setStartGame={setStartGame}/>}
            <div className="the-house-picked">
                <h2>THE HOUSE PICKED</h2>
                {houseChoice && <MakeChoice getChoice={houseChoice} Hanimate={Hanimate} />}
            </div>
        </div>
    );
}


export default Steps;