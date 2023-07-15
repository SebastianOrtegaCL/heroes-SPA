import { HeroCard } from "../components/HeroCard"

export const Search = () => {
  return (
    <>
    <div className="container">
      <div className="row">

        <h1>Search</h1>
        <hr />

        <div className="col-5">
            <form action="">
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control" 
                name="searchText"
                autoComplete="off"
                />
              <button className="btn btn-primary mt-3">Search</button>
            </form>
        </div>

        <div className="col-7 mt-3">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-success">
            Searching...
          </div>
          <div className="alert alert-danger"> 
            No se ha encontrado el <b>heroe...</b>
          </div>
          {/* <HeroCard /> */}

        </div>

      </div>

    </div>
    </>
  )
}
