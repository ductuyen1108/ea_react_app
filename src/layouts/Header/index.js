import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MenuHeader from '~/layouts/MenuHeader';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAmerica,
    faEllipsisVertical,
    faMoon,
    faShoppingCart,
    faSignOut,
    faUser,
    /* faWrench, */
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import { useClub } from '~/context/ClubContext';
import { isAuthenticated } from '~/context/ClubContext';

const cx = classNames.bind(styles);

/* const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'About',
        to: '/about',
    },
    {
        icon: <FontAwesomeIcon icon={faWrench} />,
        title: 'Admin',
        to: '/admin',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
]; */

function Header() {
    const [selectedLeagueName, setSelectedLeagueName] = useState(null);
    const history = useNavigate();
    const {userRole, setUserRole} = useClub();

    useEffect(() => {
        // Kiểm tra đăng nhập khi Header được render lần đầu tiên
        if (isAuthenticated()) {
          const role = localStorage.getItem('role');
          setUserRole(role);
        }
      }, [setUserRole]);

    const handleLeagueClick = (leagueName) => {
        setSelectedLeagueName(leagueName);
    };

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setUserRole(null);
        history('/login');
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faEarthAmerica} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vie',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'About',
            to: '/about',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="" />
                    </Link>
                </div>
                <MenuHeader selectedLeagueName={selectedLeagueName} onLeagueClick={handleLeagueClick} />
                <Search />
                <div className={cx('actions')}>
                    {userRole ? (
                        <>
                            <Tippy delay={[0, 200]} content="Cart" placement="bottom">
                                <Link to="/cart" className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="User" placement="bottom">
                                <button className={cx('user')}>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </Tippy>
                            <Menu items={userMenu} onChange={handleMenuChange}>                    
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                            <Tippy delay={[0, 200]} content="Log out" placement="bottom">
                                <button className={cx('logout')} onClick={handleLogOut}><FontAwesomeIcon icon={faSignOut} /></button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to='/login'><Button primary>Log in</Button></Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;