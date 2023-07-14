import { useParams } from 'react-router-dom';

export const Hero = () => {

  const { id } = useParams();

  return (
    <>
        <div className="container">

            <h1>Hero Page</h1>

        </div>
    </>
  )
}
