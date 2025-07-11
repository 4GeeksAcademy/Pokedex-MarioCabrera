import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "./Header";
import { Dropdown } from "./Dropdown/Dropdown";
//create your first component
const Home = () => {
	const [activeTypes, setActiveType] = useState({})
	const [activeWeaks, setActiveWeak] = useState({})
	const toggleType = (typeName) => {
		setActiveType(prev => ({
			...prev,
			[typeName]: !prev[typeName]
		}));
	};
	const [deployed, setDeployed] = useState(false)

	const toggleWeak = (typeName) => {
		setActiveWeak(prev => ({
			...prev,
			[typeName]: !prev[typeName]
		}));
	};
	return (
		<>
			<div className="container mx-auto p-0" >
				<Header />
				<Dropdown
					activeTypes={activeTypes}
					activeWeaks={activeWeaks}
					toggleType={toggleType}
					toggleWeak={toggleWeak}
					deployed={deployed}
					setDeployed={setDeployed}
				/>
				<div className="container-fluid bg-white col-8 py-4">
					<div className="d-flex justify-content-between col-12">
						<button className="btn btn-lg btn-info">¡Sorpréndeme!</button>
						<div>
							<div></div>
							<div class="dropdown-center">
								<button class="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									Centered dropdown
								</button>
								<ul class="dropdown-menu bg-secondary">
									<li><a class="dropdown-item text-white fs-4" href="#">Número inferior</a></li>
									<li><a class="dropdown-item text-white fs-4" href="#">Número superior</a></li>
									<li><a class="dropdown-item text-white fs-4" href="#">A-Z</a></li>
									<li><a class="dropdown-item text-white fs-4" href="#">Z-A</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>


			</div>
		</>
	);
};

export default Home;