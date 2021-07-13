import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import "./NavigationBarMobile.css"

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi"
import { ImArrowLeft2 } from "react-icons/im"

const BottomNavBar = props => {
    const history = useHistory()
    const [activeTabs, setActiveTabs] = useState()
    console.log(props);
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                history.push('/')
                break;
            case 'search':
                history.push('/search')
                break;
            case 'favourites':
                history.push('/favourites')
                break;
            case 'account':
                history.push('/account')
                break;
            default:
                history.push('/')
                break;
        }
    }, [activeTabs, history])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                    <GiHamburgerMenu
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('home')}
                    />
            </div>
            <div className='bn-tab'>
                {activeTabs === 'search' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('search')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('search')}
                    />}
            </div>
            <div className='bn-tab'>
                    <ImArrowLeft2
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('favourites')}
                    />
            </div>
        </div>
    )
}

export default BottomNavBar
