import React from 'react';

const ItemCards = () => {
    return(
        <div className="album py-5 bg-light">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="card mb-3">
                    <h3 className="card-header">Wine name</h3>
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="There will be picture"/>
                    <div className="card-body">
                    <p className="card-text">There will be some text.</p>
                    <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card mb-3">
                    <h3 className="card-header">Wine name</h3>
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="There will be picture"/>
                    <div className="card-body">
                    <p className="card-text">There will be some text.</p>
                    <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card mb-3">
                    <h3 className="card-header">Wine name</h3>
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="There will be picture"/>
                    <div className="card-body">
                    <p className="card-text">There will be some text.</p>
                    <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>


            </div>
            </div>
        </div>
    )
}

export default ItemCards;