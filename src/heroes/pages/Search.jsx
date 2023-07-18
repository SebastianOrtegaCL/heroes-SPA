import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  
  const { q = '' } = queryString.parse(location.search);

  // console.log(typeof q)
  
  const heroes = getHeroesByName(q);
  console.log(heroes)


  const { searchText, onInputChange } = useForm({
    searchText: 'q'


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
          {
            (q === '')
              ?
              <div className="alert alert-success">
                Search a hero
              </div>
              : (heroes.length === 0 ) 
              &&  <div className="alert alert-danger"> 
                  No se ha encontrado el <b> { q } </b>
                </div>
              
          }

          {/* <HeroCard /> */}
          {
            heroes.map( (hero) => (
              <HeroCard key={ hero.id } {...hero} />
            ) )
          }
        </div>

      </div>

    </div>
    </>
  )
}
