import React, { Component } from 'react';
import MenuListItem from '../menu-item'
import {connect} from 'react-redux';
import WithWineService from '../hoc';
import {menuLoaded} from '../../actions';

class MenuList extends Component {

    componentDidMount() {
        const {WineService} = this.props;
        let res = WineService.getItems();
        this.props.menuLoaded(res);
    }

    render(){
        const {menuItems} = this.props;

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                menuItems.map(menuItem => {
                                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems : state.menu
    }
};

const mapDispatchToProps = {
    menuLoaded
};


export default WithWineService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));