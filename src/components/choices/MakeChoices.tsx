import React from "react";
import rock from "../../assets/icon/icon-rock.svg";
import paper from "../../assets/icon/icon-paper.svg";
import scissors from "../../assets/icon/icon-scissors.svg";
import lizard from "../../assets/icon/icon-lizard.svg";
import spock from "../../assets/icon/icon-spock.svg";

type Item = {
    name: string,
    url: string
};

type ChoiceProps = {
    getChoice: string, 
    onClick?: React.MouseEventHandler,
    Hanimate?: boolean,
    Uanimate?: boolean
};

const choices: Array<Item> = [
    { name: "rock", url: rock },
    { name: "paper", url: paper },
    { name: "scissors",  url: scissors },
    { name: "spock", url: spock },
    { name : "lizard", url: lizard}
]




function MakeChoice ({getChoice, onClick, Hanimate, Uanimate}: ChoiceProps ) {
    return (
        <>
            {choices
                .filter((choice: Item) => choice.name === getChoice)
                .map((currentChoice: Item, index: number) => (
                    <div className={`${currentChoice.name} ${Uanimate || Hanimate ? "item-of-game win" : "item-of-game"}`} key={index} onClick={onClick}>
                        <img src={currentChoice.url} alt={currentChoice.name.toLocaleUpperCase()} />
                    </div>
                ))}
        </>
    );
}


export default MakeChoice;