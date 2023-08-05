import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('actions')}>
                    <Link to="/">
                        <img src={images.logo} alt="" />
                    </Link>
                    <Link to='/register'>
                        <Button primary>Register</Button>
                    </Link>
                </div>
            </div>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;
