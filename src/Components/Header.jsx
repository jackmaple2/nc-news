import { Link } from 'react-router-dom';

function Header() {

    

    return (
        <div>
                <h1>
                    NC-News
                </h1>
            <Link to='/' className='homeButton-class'>
                <button>
                    Home
                </button>
            </Link>
        </div>
        
    )
}

export default Header