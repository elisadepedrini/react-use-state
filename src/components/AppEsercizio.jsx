import { languages } from "../languages"
import { useState } from "react"

export default function AppEsercizio() {

  const [isActive, setIsActive] = useState(null)

  function toggleButton(id) {
    setIsActive(isActive === id ? null : id)
    
  }

    return(
        <>
        <main>
          {languages.map(el => 
            <div className="card mb-3" key={el.id}>
              <div className="card-body">
                <button
                onClick={() => toggleButton(el.id)}
                className={`btn ${isActive === el.id ? 'btn-warning' : 'btn-primary'}`}>
                {el.title}
                </button>

                { isActive === el.id && <p className="card-text">{el.description}</p> }
                
              </div>
            </div>
          )}
        </main>
        </>
    )
}