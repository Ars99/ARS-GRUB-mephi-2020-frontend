import React from 'react';
import './forms.css';
import {Link} from 'react-router-dom';


const RegistrationForm = () => {

	const textStyle = {color: 'white'};

    return( 
			<form className="form-signin">
				<img className="mb-1" src="https://vineandwine.vin/upload/medialibrary/8aa/logotype_vineandwine_Copy.svg" alt="Wine" width="300" height="500"/>
				<div className="form-group">
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
				    <input type="password" id="inputPassword" className="form-control center" placeholder="Password" required/>
                    <input type="password" id="inputPasswordSecondTime" className="form-control" placeholder="Please type your password once again" required />
				</div>
				<div className="checkbox mb-3">               
					<label><input type="checkbox" value="Remember me"/> Remember me</label>                
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit"><Link to='main' style= {textStyle}>Sign up</Link></button>
				<button className="btn btn-lg btn-primary btn-block" type="submit"><Link to='login' style= {textStyle}>Have an account? Log in!</Link></button>
				<p className="mt-5 text-muted">&copy; 2020</p>
			</form>   
    );
}

export default RegistrationForm;