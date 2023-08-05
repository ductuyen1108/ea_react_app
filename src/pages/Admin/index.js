import classNames from "classnames/bind";
import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

function Admin() {
    return ( 
        <div className={cx('wrapper')}>
            <img src="https://images.alphacoders.com/132/1323691.jpeg" alt=""></img>
        </div>
    );
}

export default Admin;