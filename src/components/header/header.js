import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="col-6 col-md-4">
                    <h4>Enjoy.</h4>
                </div>
                <div class="col-6 col-md-4">
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit"><Link to='login' className='textChange'>Log out</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Header;