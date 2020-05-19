import React, { useState } from 'react';
import { EditBtn, ViewBtn } from '../buttons';

const MenuListItem = ({menuItem}) => {
    const {title, text, src} = menuItem;
    return(
        <div className="card mb-3">
            <h3 className="card-header">{title}</h3>
            <img className="card-img-top" data-src={src} alt="There will be picture"/>
            <div className="card-body">
                <p className="card-text">{text}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <ViewBtn value="View" />
                        <EditBtn value="Edit" />
                    </div>
                </div>
            </div>
        </div>



        // <div className="card mb-3">
        //     <h3 className="card-header">Wine name</h3>
        //     <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="There will be picture"/>
        //     <div className="card-body">
        //         <p className="card-text">text</p>
        //         <div className="d-flex justify-content-between align-items-center">
        //             <div className="btn-group">
        //                 <ViewBtn value="View" />
        //                 <EditBtn value="Edit" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default MenuListItem;



