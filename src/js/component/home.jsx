import React from "react";
import Semaforo from "./semaforo";
import Palo from "./palo";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
			<Palo/>
			<Semaforo/>
			</div>
		</div>
	);
};

export default Home;
