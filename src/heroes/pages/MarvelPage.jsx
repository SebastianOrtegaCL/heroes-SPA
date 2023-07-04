import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
   <>
      <div className="container">
        <h1>Marvel Page !</h1>
        <hr />

        <HeroList publisher='Marvel Comics'/>
      </div>
   </> 
  )
}
