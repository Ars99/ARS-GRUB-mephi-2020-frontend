import React from 'react';


const CheckBox = ({value}) => {


    return (
        <div className="checkbox mb-3">               
			<label>
                <input type="checkbox" value="Remember me"/> {value}
            </label>                
		</div>
    );
};

export default CheckBox;