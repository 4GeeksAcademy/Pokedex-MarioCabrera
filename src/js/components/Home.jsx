import React, { useState } from "react";
import { Header } from "./Header";
import { Dropdown } from "./Dropdown/Dropdown";
import { Cards } from "./Cards/Cards";
import { pokemons } from "./pokemons";


const Home = () => {
	const ITEMS_PER_PAGE = 12;
	const [activeTypes, setActiveType] = useState({});
	const [activeWeaks, setActiveWeak] = useState({});
	const [deployed, setDeployed] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [list, setList] = useState(pokemons.map((_, index) => index)); // índice de todos

	const formatId = (number) => number.toString().padStart(4, '0');

	const toggleType = (typeName) => {
		setActiveType(prev => ({
			...prev, [typeName]: !prev[typeName]
		}));
	};

	const toggleWeak = (typeName) => {
		setActiveWeak(prev => ({
			...prev, [typeName]: !prev[typeName]
		}));
	};

	const searchByNumber = (e, number) => {
		e.preventDefault();
		const index = parseInt(number) - 1;
		if (!isNaN(index) && index >= 0 && index < pokemons.length) {
			setList([index]);
			setCurrentPage(1);
		} else {
			alert("tu número no es válido")
		}
	};

	const handleSurprise = () => {
		const randomIndex = Math.floor(Math.random() * pokemons.length);
		setList([randomIndex]);
		setCurrentPage(1);
	};

	const handlePageChange = (pageNum) => {
		setCurrentPage(pageNum);
	};

	// Paginar
	const start = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentList = list.slice(start, start + ITEMS_PER_PAGE);

	return (
		<div className="col-12 p-0">
			<Header
				searchByNumber={searchByNumber}
			/>
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
					<button className="btn btn-lg btn-info" onClick={handleSurprise}>
						¡Sorpréndeme!
					</button>
					<div className="dropdown-center">
						<button className="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Ordenar
						</button>
						<ul className="dropdown-menu bg-secondary">
							<li><button className="dropdown-item text-white fs-4">Número inferior</button></li>
							<li><button className="dropdown-item text-white fs-4">Número superior</button></li>
							<li><button className="dropdown-item text-white fs-4">A-Z</button></li>
							<li><button className="dropdown-item text-white fs-4">Z-A</button></li>
						</ul>
					</div>
				</div>

				<div className="row mt-4">
					{currentList.map((pokemonIndex) => (
						<div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={pokemonIndex}>
							<Cards
								image={pokemons[pokemonIndex].image}
								id={formatId(pokemonIndex + 1)}
								name={pokemons[pokemonIndex].name}
								tipo={pokemons[pokemonIndex].type}
							/>
						</div>
					))}
				</div>

				<div className="container-fluid d-flex flex-wrap">
					{[...Array(Math.ceil(list.length / ITEMS_PER_PAGE)).keys()].map(i => (
						<div
							key={i}
							className={`fs-6 btn px-2 ${currentPage === i + 1 ? "text-dark fw-bold" : "text-secondary"}`}
							onClick={() => handlePageChange(i + 1)}
						>
							{i + 1}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;