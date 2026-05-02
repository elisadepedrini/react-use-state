import { languages } from "../languages"
import { useState } from "react"

export default function AppBonus() {

    const [bonusIsActive, setBonusIsActive] = useState(0)


    return(
        <>
        <div className="container">
            <div className="d-flex flex-row my-5 gap-3">
                {languages.map((el, index) =>
                    <button key={el.id} className={`btn ${bonusIsActive === index ? 'btn-warning' : 'btn-primary'}`}
                    onClick={() => setBonusIsActive(index)}
                    >{el.title}</button>
                    
                )}
            </div>
                
                <div className="card mx-0 p-3">
                    <h2>{languages[bonusIsActive].title}</h2>
                    <p>{languages[bonusIsActive].description}</p>
                </div>
        </div>
        </>
    )
}