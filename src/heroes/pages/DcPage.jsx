import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <>
      <div className="container">

        <h1 className="animate__animated animate__fadeIn">DC page</h1> 
        <hr />
       <HeroList publisher='DC Comics'/> 
      </div>
    </>
  )
}
