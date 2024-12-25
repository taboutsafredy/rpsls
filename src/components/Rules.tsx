import "../styles/Rules.css"
import React, { useState } from "react";
import RulesModal from "./modals/RulesModal";


function Rules () {
    const [show, setShow] = useState<boolean>(false);

    return(
        <div className="all-about-rules">
            <div className="rules-descriptions">
                <span className="rules-title"  onClick={() => setShow(!show)}>
                    RULES
                </span>
            </div>
            <RulesModal show={show} setShow={setShow}/>
        </div>
    );
}

export default Rules;