import {useHistory} from 'react-router-dom'
import "./NavigationBarMobile.css"
import {BiSearchAlt} from 'react-icons/bi'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImArrowLeft2} from "react-icons/im"
import {useOptionContext} from "../../context/SelectedOptionsProvider";

const BottomNavBar = props => {
    const history = useHistory();
    const {showMenu, setShowMenu} = useOptionContext();


    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                <GiHamburgerMenu
                    size='50'
                    color='#E9C46A'
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            <div className='bn-tab'>
                <BiSearchAlt
                    size='50'
                    color='#E9C46A'
                    onClick={() => history.push("/")}
                />

            </div>
            <div className='bn-tab'>
                <ImArrowLeft2
                    size='50'
                    color='#E9C46A'
                    onClick={() => history.goBack()}
                />
            </div>
        </div>
    )
}

export default BottomNavBar
