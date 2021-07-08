import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import "./NavigationBarMobile.css"

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'

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
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('home')}
                    />}
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
                {activeTabs === 'favourites' ?
                    <AiFillHeart
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('favourites')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('favourites')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#E9C46A'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar
