import React from 'react';


const EditBtn = ({ value}) => {

    return (
    <button type="button" className="btn btn-sm btn-outline-secondary">
        {value}
    </button>
    );
};

export default EditBtn;