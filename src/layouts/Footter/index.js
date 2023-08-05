import classNames from 'classnames/bind';
import styles from './Footter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('about')}>
                        <h4 className={cx('title')}>ABOUT</h4>
                        <p className={cx('description')}>
                            Welcome to our website - your go to source for information on top football teams in Europe.
                            Here, you can explore the latest updates and details about the Premier League, La Liga,
                            Bundesliga, Serie A, and Ligue 1. We provide team line-ups, performance records, standout
                            players, and the latest news from the world of European football. Join us now and dive into
                            the exciting world of European football!
                        </p>
                    </div>
                    <div className={cx('league')}>
                        <h4 className={cx('title')}>LEAGUE</h4>
                        <ul className={cx('menu')}>
                            <li>Premier league</li>
                            <li>Laliga</li>
                            <li>Bundesliga</li>
                            <li>Serie A</li>
                            <li>Ligue 1</li>
                        </ul>
                    </div>
                    <div className={cx('links')}>
                        <h4 className={cx('title')}>LINKS</h4>
                        <ul className={cx('menu')}>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/schedule">
                                <li>Schedule</li>
                            </Link>
                            <Link to="/news">
                                <li>News</li>
                            </Link>
                            <Link to="/standings">
                                <li>Standings</li>
                            </Link>
                            <Link to="/squad">
                                <li>Squad</li>
                            </Link>
                            <Link to="/shop">
                                <li>Shop</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={cx('contact')}>
                    <div className={cx('copyright')}>
                        <span>Copyright 2023 All Rights Reserved by DucTuyen</span>
                    </div>
                    <div className={cx('follow')}>
                        <div className={cx('socials')}>
                            <Link to="https://www.facebook.com/tuyen.chelsea.1108" target="blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </div>
                        <div className={cx('socials')}>
                            <Link to="https://www.tiktok.com/@ductuyn" target="blank">
                                <FontAwesomeIcon icon={faTiktok} />
                            </Link>
                        </div>
                        <div className={cx('socials')}>
                            <Link to="https://www.youtube.com/@ndtuyn15" target="blank">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </div>
                        <div className={cx('socials')}>
                            <Link to="https://www.instagram.com/nd.tunnn/" target="blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footter;
