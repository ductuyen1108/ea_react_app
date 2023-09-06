import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';
import images from '~/assets/images';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarAdmin({ children }) {
    const [showLeague, setShowLeague] = useState(false);
    const [showClub, setShowClub] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="" />
                    </Link>
                </div>
                <div className={cx('nav')}>
                    <div className={cx('container')}>
                        <span className={cx('heading')}>Menu</span>
                        <ul className={cx('choose')}>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowLeague(!showLeague)}>Leagues</Link>
                                {showLeague && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/leagues/list">Leagues list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/leagues/create">Create a new League</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowClub(!showClub)}>Clubs</Link>
                                {showClub && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/clubs/list">Clubs list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/clubs/create">Create a new club</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowPlayer(!showPlayer)}>Players</Link>
                                {showPlayer && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/players/list">Players list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/players/create">Create a new player</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowSchedule(!showSchedule)}>Schedule</Link>
                                {showSchedule && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/schedule/list">Schedule list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/schedule/create">Create a new Shedule</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowTable(!showTable)}>Accounts</Link>
                                {showTable && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/accounts/list">Accounts list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/accounts/create">Create a new account</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={cx('main')}>
                                <Link onClick={() => setShowProducts(!showProducts)}>Products</Link>
                                {showProducts && (
                                    <ul className={cx('dropdown')}>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/products/list">Products list</Link>
                                        </li>
                                        <li className={cx('sub')}>
                                            <Link to="/admin/products/create">Create a new product</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default SidebarAdmin;
