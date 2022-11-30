import React from "react";
import Luz from "./luz";

const Semaforo = () => {
    return (
        <div className="container">
                <div className= "col-1 bg-dark bgSemaforo">
                    <Luz color="rojo"/>
                    <p></p>
                    <Luz color="naranja"/>
                    <p></p>
                    <Luz color="verde"/>
                </div>

        </div>
    )
}
export default Semaforo