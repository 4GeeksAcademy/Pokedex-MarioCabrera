import { type } from "../variables";
export const Cards = (props) => {
    const types = props.tipo;
    return (
        <>
            <div className="card col-6 col-md-4 border border-0 mx-auto" style={{ width: "100%" }}>
                <img src={props.image} className="card-img-top bg-light img-fluid" alt={props.name} />

                <div className="card-body pt-0 pb-2">
                    <p className="card-text text-secondary fw-bold" style={{ fontSize: "12px" }}>N.º {props.id}</p>
                </div>

                <div className="card-body py-0">
                    <p className="fw-bold fs-4 mb-0">{props.name}</p>
                </div>

                <div className="card-body pt-0 d-flex flex-wrap gap-2 justify-content-center">
                    {types.map((element, index) => {
                        const lower = element.toLowerCase();
                        const currentType = type[lower];
                        return (
                            <div
                                key={index}
                                className={`border border-2 border-secondary rounded text-center px-3 py-1 ${currentType.textColor}`}
                                style={{
                                    fontSize: "10px",
                                    backgroundImage: `linear-gradient(to top, ${currentType.color1}, ${currentType.color2})`,
                                    flex: "1 1 auto",
                                }}
                            >
                                {currentType.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}