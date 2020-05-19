import React from 'react';
import './forms.css';
import {Link} from 'react-router-dom';
import {StartBtn} from '../buttons';
import CheckBox from '../checkbox';


const RegistrationForm = () => {


    return( 
			<form className="form-signin">
				<img className="mb-1" src="https://vineandwine.vin/upload/medialibrary/8aa/logotype_vineandwine_Copy.svg" alt="Wine" width="72" height="72"/>
				<div className="form-group">
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
				    <input type="password" id="inputPassword" className="form-control center" placeholder="Password" required/>
                    <input type="password" id="inputPasswordSecondTime" className="form-control" placeholder="Please type your password once again" required />
				</div>
				<CheckBox value="Remember me" />
				<StartBtn value="Sign up" link="login" />
				<StartBtn value="Have an account? Log in!" link="login" />
				<p className="mt-5 text-muted">&copy; 2020</p>
			</form>   
    );
}

export default RegistrationForm;