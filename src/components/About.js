import React from 'react'

function About(props) {
    return (
        <div className="container" >
            <div className="accordion accordion-flush" id="accordionFlushExample" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                            Easy to Use
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This is UI friendly website </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Different Operations on Text
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Upper Case , Lower Case , Copy and Clear Text</div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Made with ❤️ by
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">yours Rithwik 😉</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
