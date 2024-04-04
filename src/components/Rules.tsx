import "../styles/Rules.css"
import React, { useState } from "react";
import RulesModal from "./modals/RulesModal";


function Rules () {

    type S = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

    const [show, setShow]: S = useState<boolean>(false);

    return(
        <div className="all-about-rules">
            <div className="rules-descriptions" onClick={() => setShow(!show)}>
                <span className="rules-title">
                    RULES
                </span>
            </div>
            <RulesModal show={show} setShow={setShow}/>
        </div>

    );
}

export default Rules;