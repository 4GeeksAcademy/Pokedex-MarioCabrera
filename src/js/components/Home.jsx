import React from "react";
import { useState } from "react";

//include images into your bundle
import { Header } from "./Header";
import { Dropdown } from "./Dropdown/Dropdown";
import { Cards } from "./Cards/Cards";
import { pokemons } from "./pokemons";

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
	const cardsArray = Array.from({ length: 12 });
	const range = (start, stop, step) =>
		Array.from(
			{ length: Math.ceil((stop - start) / step) },
			(_, i) => start + i * step,
		);
	const formatId = (number) => {
		return number.toString().padStart(4, '0'); // Convierte 1 → '0001', 2 → '0002', etc.
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
							<div className="dropdown-center">
								<button className="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									Centered dropdown
								</button>
								<ul className="dropdown-menu bg-secondary">
									<li><a className="dropdown-item text-white fs-4" href="#">Número inferior</a></li>
									<li><a className="dropdown-item text-white fs-4" href="#">Número superior</a></li>
									<li><a className="dropdown-item text-white fs-4" href="#">A-Z</a></li>
									<li><a className="dropdown-item text-white fs-4" href="#">Z-A</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						{cardsArray.map((_, index) => (
							<div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
								<Cards image={pokemons[index].image} id={formatId(index + 1)} name={pokemons[index].name} tipo={pokemons[index].type}/>
								
							</div>
						))}
					</div>
				</div>


			</div>
		</>
	);
};

export default Home;