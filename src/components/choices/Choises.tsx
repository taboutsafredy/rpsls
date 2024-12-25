import React from "react";
import rock from "../../assets/icon/icon-rock.svg";
import paper from "../../assets/icon/icon-paper.svg";
import scissors from "../../assets/icon/icon-scissors.svg";
import lizard from "../../assets/icon/icon-lizard.svg";
import spock from "../../assets/icon/icon-spock.svg";

interface IChoise {
    getChoice: string, 
    onClick?: React.MouseEventHandler,
    Hanimate?: boolean, // House picked animate
    Uanimate?: boolean // User picked animate to animate winner his choice.
};

const choices: Array<{name: string, url: string }> = [
    { name: "rock", url: rock },
    { name: "paper", url: paper },
    { name: "scissors",  url: scissors },
    { name: "spock", url: spock },
    { name : "lizard", url: lizard}
];

function Choise ({getChoice, onClick, Hanimate, Uanimate}: IChoise ) {
    return (
        <>
            {choices
                .filter((choice) => choice.name === getChoice)
                .map((currentChoice, index) => (
                    <div className={`${currentChoice.name} ${Uanimate || Hanimate ? "item-of-game win" : "item-of-game"}`} key={index} onClick={onClick}>
                        <img src={currentChoice.url} alt={currentChoice.name.toLocaleUpperCase()} />
                    </div>
                ))}
        </>
    );
}


export default Choise;