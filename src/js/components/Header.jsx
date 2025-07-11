export const Header = () => {
    return (
        <>
            <header className="header bg-white col-8 mx-auto">
                <h1 className="text-secondary p-3">Pokédex</h1>
            </header>
            <div className="d-flex bg-dark col-12 py-4 px-4">
                <div className="row">
                    <div className="col-sm-4 ms-auto px-1">
                        <label htmlFor="searchInput"><h3 className="text-white">Nombre o número</h3></label>
                        <div className="mb-3 pe-4">
                            <div className="row d-flex ps-2">
                                <div className="border-rounded col-8 px-1">
                                    <input type="input" className="form-control fs-4" />
                                </div>
                                <div className="col-2">
                                    <button className="btn " style={{ backgroundColor: "orange" }}><i className="fa-solid fa-magnifying-glass fs-4 p-2"></i></button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="text-white">¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, altura o peso</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 me-auto px-0">
                        <p className="fs-4 bg-success text-white rounded p-4">Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional</p>
                    </div>
                </div>

            </div>
        </>
    )
}