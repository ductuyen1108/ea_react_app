import classNames from 'classnames/bind';
import styles from './MenuHeader.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { useClub } from '~/context/ClubContext';

const cx = classNames.bind(styles);

function MenuHeader() {
    const location = useLocation();
    const { nameClub } = useClub();

    return (
        <ul className={cx('wrapper')}>
            {publicRoutes.map((route, index) => {
                const url = route.path === '/overview/:nameClub' ? `/overview/${nameClub}` : route.path;
                return (
                    <li key={index} className={cx({ active: location.pathname === url })}>
                        <Link className={cx('menu-option')} to={url}>
                            {route.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}

export default MenuHeader;
