import classNames from 'classnames/bind';
import styles from './HeaderShop.module.scss';
import Header from '../Header';
import Footter from '../Footter';

const cx = classNames.bind(styles);

function HeaderShop({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footter />
        </div>
    );
}

export default HeaderShop;
