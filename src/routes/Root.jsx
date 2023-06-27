import { Outlet, Link } from 'react-router-dom';
import { Navbar } from '../ui/components';

export const Root = () => {
    return (
      <>
        {/* <h1>Heroes APP 'entrada'</h1> */}
        <div id='detail'>
          <Navbar />
          <Outlet /> 
        </div>
      </>
    )
  }