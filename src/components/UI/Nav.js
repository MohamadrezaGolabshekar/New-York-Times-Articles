import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const Nav = () => {

    const [activeItem, setActiveItem] = useState('home');
    let history = useHistory();

    const handleItemClick = (e, { name }) => {
        history.push(`/${name === 'home' ? '' : name}`)
        setActiveItem(name);
    }
    

    useEffect(() => {
        console.log('window.location.pathname :: ', window.location.pathname)
        setActiveItem(window.location.pathname === '/' ? 'home' : window.location.pathname === '/saved-Articles' ? 'saved-Articles' : '');
    }, [window.location.pathname])

    return (

        <div className='nav'>
            <Menu secondary color='yellow'>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='saved-Articles'
                    active={activeItem === 'saved-Articles'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>

    )
}

export default Nav;