import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        to="/marvel"
                        className={ ({isActive, isPending}) => 
                            isPending ? 'nav-item nav-link' : isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
                        }
                        // className={ ({isActive}) => `'nav-item nav-link' ${ isActive ? 'active' : ''}` }
                        // "nav-item nav-link" 
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        to="/dc"
                        className={ ({isActive, isPending}) => 
                            isPending ? 'nav-item nav-link' : isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
                        }

                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Sebastian 
                    </span> 
                    <button 
                        className='nav-item nav-link btn'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
