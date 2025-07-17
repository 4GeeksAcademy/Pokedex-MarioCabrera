import { useState } from "react";

export const Header = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchByNumber(e, searchValue); 
        setSearchValue("");
    };

    return (
        <>
            <header className="header bg-white col-8 mx-auto">
                <h1 className="text-secondary p-3 my-0 col-8 mx-auto">Pokédex</h1>
            </header>
            <div className="d-flex bg-dark col-8 py-4 px-4 mx-auto">
                <div className="row">
                    <div className="col-sm-4 ms-auto px-1">
                        <label htmlFor="searchInput"><h3 className="text-white">Nombre o número</h3></label>
                        <div className="mb-3 pe-4">
                            <form className="row d-flex ps-2" onSubmit={handleSubmit}>
                                <div className="border-rounded col-8 px-1">
                                    <input
                                        type="text"
                                        className="form-control fs-4"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        placeholder="De 1 a 120"
                                    />
                                </div>
                                <div className="col-2">
                                    <button
                                        type="submit"
                                        className="btn py-1"
                                        style={{ backgroundColor: "orange" }}
                                    >
                                        <i className="fa-solid fa-magnifying-glass fs-4 p-2"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="row">
                                <p className="text-white">
                                    ¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, altura o peso!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 me-auto px-0">
                        <p className="fs-5 bg-success text-white rounded p-4">
                            Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};