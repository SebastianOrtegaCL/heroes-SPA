import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  console.log({ location })
  const { searchText, onInputChange } = useForm({
    searchText: ''


  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
    <div className="container">
      <div className="row">

        <h1>Search</h1>
        <hr />

        <div className="col-5">
            <form onSubmit={ onSearchSubmit } >
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control" 
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
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
