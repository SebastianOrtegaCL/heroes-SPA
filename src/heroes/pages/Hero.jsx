import { useMemo } from 'react';
import { getHeroById } from '../helpers/getHeroById';
import { redirect, useNavigate, useParams } from 'react-router-dom';

export const Hero = () => {

  const { id } = useParams();

  const hero = useMemo( () => getHeroById( id ), [ id ]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }
  
  if( !hero ) {

    return <Navigate to='/' />;
  }

  return (
    <>
        <div className="row mt-5">
          <div className='col-4'>
            <img 
              src={`/src/assets/heroes/${ id }.jpg`} 
              alt={hero.superhero}
              className='img-thumbnail' />
          </div>


          <div className='col-8'>
            <h3>{ hero.superhero }</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b>Alter ego: </b> { hero.alter_ego } </li>
              <li className='list-group-item'> <b>First Appearance: </b> { hero.first_appearance } </li>
              <li className='list-group-item'> <b>Alter ego: </b> { hero.publisher } </li>
            </ul>

           <h5 className='mt-3'>Characters</h5> 
           <p className=''>{ hero.characters }</p>
           <button className='btn btn-outline-primary'
            onClick={ onNavigateBack }  
           >
            Back
           </button>
          </div>


        </div>
    </>
  )
}
