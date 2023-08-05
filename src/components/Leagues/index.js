import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './League.module.scss';

import api from '~/api/api';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Leagues({ onLeagueClick, selectedLeagueName }) {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        api.get('/leagues')
            .then(response => {
                setLeagues(response.data);
            })
            .catch(err => {
                console.log("Error: ", err)
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {leagues.map(league => (
                <div
                    key={league._id}
                    className={cx('league-info', { active: league.lea_name === selectedLeagueName })}
                    onClick={() => onLeagueClick(league.lea_name)}
                >
                    <Image
                        className={cx('league-logo')}
                        src={league.logo}
                        alt="league-logo"
                    />
                </div>
            ))}
        </div>
    );
}

export default Leagues;