import classNames from 'classnames/bind';
import styles from './Overview.module.scss';

import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import api from '~/api/api';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Overview() {

    const [club, setClub] = useState(null);
    const { nameClub } = useParams();
    console.log('overview', nameClub);
    useEffect(() => {
        api.get(`/clubs/${nameClub}`)
            .then(response => {
                setClub(response.data)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [nameClub])

    if (!club) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('overview')}>
                        <h2 className={cx('title-overview')}>Overview</h2>
                        <p className={cx('desc-overview')}>
                            {club.overview}
                        </p>
                    </div>
                    <div className={cx('history')}>
                        <Image
                            className={cx('image')}
                            src={club.img_history}
                            alt={club.name_club}
                        />
                        <div className={cx('content')}>
                            <h2 className={cx('title-content')}>The History of {club.name_club}</h2>
                            <p className={cx('desc-content')}>
                                {club.history}
                            </p>
                        </div>
                    </div>
                    <div className={cx('stadium')}>
                        <div className={cx('content')}>
                            <h2 className={cx('title-content')}>{club.name_club} stadium</h2>
                            <p className={cx('desc-content')}>
                                {club.stadium_desc}
                            </p>
                        </div>
                        <Image
                            className={cx('image')}
                            src={club.img_stadium}
                            alt={club.name_club}
                        />
                    </div>
                    <div className={cx('trophy-cabinet')}>
                        <Image
                            className={cx('image')}
                            src={club.img_trophy}
                            alt={club.name_club}
                        />
                        <div className={cx('content')}>
                            <h2 className={cx('title-content')}>{club.name_club} trophies room</h2>
                            <p className={cx('desc-content')}>
                                {club.trophy}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Overview;
