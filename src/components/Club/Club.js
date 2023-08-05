import classNames from 'classnames/bind';
import styles from './Club.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Club({ data }) {

    return (
        <Link to={`/overview/${data.name_club}`} className={cx('wrapper')}>
            <Image
                className={cx('club-logo')}
                src={data.logo}
                alt={data.acronym_club}
            />
            <div className={cx('info-club')}>
                <h4 className={cx('club-name')}>
                    <span>{data.name_club}</span>
                </h4>
                <span className={cx('league')}>{data.lea_name}</span>
            </div>
        </Link>
    );
}

export default Club;
