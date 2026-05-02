import { languages } from "../languages"

export default function AppMain() {

    return(
        <>
        <main>
          {languages.map(el => 
            <div className="card mb-3" key={el.id}>
              <div className="card-body">
                <button className="btn btn-primary">{el.title}</button>
                <p className="card-text">{el.description}</p>
              </div>
            </div>
          )}
        </main>
        </>
    )
}