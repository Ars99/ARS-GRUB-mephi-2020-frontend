import React from 'react';
import './forms.css';
import {StartBtn} from '../buttons';
import CheckBox from '../checkbox';

const LoginForm = () => {

	

    return (   
		<form className="form-signin">
			<img className="mb-1" src="https://vineandwine.vin/upload/medialibrary/8aa/logotype_vineandwine_Copy.svg" alt="Wine" width="72" height="72"/>
			<div className="form-group">
				<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
			</div>
			<CheckBox value="Remember me" />
			<StartBtn value="Sign in" link="main"/>
			<StartBtn value="First time? Create an account!" link="reg" />
			<p className="mt-5 text-muted">&copy; 2020</p>
		</form>   
    );
}

export default LoginForm;