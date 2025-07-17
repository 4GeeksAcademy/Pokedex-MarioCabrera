import { type } from "../variables"
import "./dropdown.css"
export const Dropdown = (props) => {
    return (
        <>
            <div className={`container-fluid col-8 d-flex pt-5 ${props.deployed ? "" : "d-none"}`} style={{ backgroundColor: "rgb(56, 56, 56)" }}>
                <div className="row col-8 mx-auto">
                    <div className="col-12 ps-0">
                        <h2 className="text-white">Tipo y debilidad</h2>
                        <div className="row">
                            {Object.values(type).map((item, index) => (
                                <div className="col-6 d-flex pe-0" key={index}>
                                    <div 
                                    className={`border border-2 border-secondary rounded fs-4 my-2 px-4 col-8 text-center ${item.textColor}`} 
                                    style={{ backgroundImage: `linear-gradient(to top, ${item.color1},${item.color2})` }}>{item.name}</div>
                                    <div className="col-4 d-flex">
                                        <div
                                            className={` pt-1 fw-bold sphere ${props.activeTypes[item.name] ? "typesActive" : "types"} m-auto text-center`}
                                            onClick={() => props.toggleType(item.name)}
                                        >
                                            T
                                        </div>
                                        <div
                                            className={`pt-1 fw-bold sphere ${props.activeWeaks[item.name] ? "weaksActive" : "weaks"} m-auto text-center`}
                                            onClick={() => props.toggleWeak(item.name)}
                                        >
                                            D
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                <button className="mx-auto btn btn-success col-3 my-4 fs-4">Buscar <i className="fa-solid fa-magnifying-glass px-2"></i></button>
                </div>
            </div>
            <div className=" col-8 py-3 px-4 text-white text-center border border-white mx-auto" style={{ backgroundColor: "rgba(92, 91, 91, 1)" }} onClick={() => props.setDeployed(prev => !prev)}>
                Mostrar búsqueda avanzada {props.deployed ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
            </div>
        </>
    )
}