import React from "react"
import "../../styles/RulesModal.css"
import close from "../../assets/modal/icon-close.svg"
import rules from"../../assets/modal/image-rules-bonus.svg"
import { createPortal } from "react-dom"


function RulesModal ({show, setShow}: {show: Boolean, setShow: Function}) {
    
    return createPortal(
        <>
            {show &&
                <div className="rules-modal-background">
                    <div className="rules-modal">
                        <div className="rules-modal-title-and-close">
                            <h1 className="title">RULES</h1>
                            <img src={close} alt="CLOSE MODAL!" onClick={() => setShow(!show)}/>
                        </div>
                        <div className="rules">
                            <img src={rules} alt="RULES" />
                        </div>
                    </div>
                </div>
            }
        </>, document.querySelector("#root") as Element 
    );

}

export default RulesModal;