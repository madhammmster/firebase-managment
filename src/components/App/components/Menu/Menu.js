import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

import {action as toggleMenu} from 'redux-burger-menu';
import BurgerMenu from './ReduxBurgerMenu';

import './styles/Menu.scss';

class Menu extends React.Component {

    renderMenuItems() {
        const items = this.props.menuItems.map((menuItem, index) => (
            <NavLink
                exact
                key={index}
                className="nav-link"
                to={menuItem.link}
                onClick={
                    () => {
                        this.props.toggleMenu(false);
                    }
                }
            >
                <span>{menuItem.name}</span>
            </NavLink>
        ));

        return items;
    }


    render() {

        return (
            <BurgerMenu isOpen={ false } pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                {this.renderMenuItems()}
            </BurgerMenu>
        );

    }

}

const mapDispatchToProps = {
    toggleMenu
}

export default connect(null, mapDispatchToProps)(Menu);