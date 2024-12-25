import "../styles/Rules.css"
import React, { useState } from "react";
import RulesModal from "./modals/RulesModal";
import WebApp from "@twa-dev/sdk";


function Rules () {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        WebApp.HapticFeedback.impactOccurred("medium");
        setShow(!show);
    };

    return(
        <div className="all-about-rules">
            <div className="rules-descriptions">
                <span className="rules-title"  onClick={() => handleShow()}>
                    RULES
                </span>
            </div>
            <RulesModal show={show} setShow={setShow}/>
        </div>
    );
}

export default Rules;