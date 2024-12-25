import React from "react";
import close from "../../assets/modal/icon-close.svg";
import rules from"../../assets/modal/image-rules-bonus.svg";
import { createPortal } from "react-dom";
import "../../styles/RulesModal.css";
import WebApp from "@twa-dev/sdk";



function RulesModal ({show, setShow}: {show: Boolean, setShow: Function}) {
    const handleShow = () => {
        WebApp.HapticFeedback.impactOccurred("medium");
        setShow(!show);
    };
    
    return createPortal(
        <>
            {show &&
                <div className="rules-modal-background">
                    <div className="rules-modal">
                        <div className="rules-modal-title-and-close">
                            <h1 className="title">RULES</h1>
                            <img src={close} alt="CLOSE MODAL!" onClick={() => handleShow()}/>
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