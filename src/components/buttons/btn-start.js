import React from 'react';
import {Link} from 'react-router-dom';


const StartBtn = ({value, link}) => {

    const textStyle = {color: 'white'};

    return (
        <button className="btn btn-lg btn-primary btn-block" type="submit">
            <Link to={link} style= {textStyle}>
                {value}
            </Link>
        </button>
    );
};

export default StartBtn;