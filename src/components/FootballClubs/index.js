import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FootballClubs.module.scss';
import Image from '~/components/Image';

import api from '~/api/api';
import { Link } from 'react-router-dom';
import { useClub } from '~/context/ClubContext';

const cx = classNames.bind(styles);

function FootballClubs({ leagueName }) {
    const [footballClubs, setFootballClubs] = useState([]);
    const { setNameClub } = useClub();

    useEffect(() => {
        api.get(`/clubs/leagueName/${leagueName}`)
            .then((res) => {
                setFootballClubs(res.data);
            })
            .catch((err) => {
                console.log('Error:', err);
            });
    }, [leagueName]);

    const handleFootballClubClick = (nameClub) => {
        setNameClub(nameClub);
        console.log('footballClubs', nameClub);
    };

    return (
        <div className={cx('wrapper')}>
            {footballClubs.map((footballClub) => (
                <div
                    key={footballClub._id}
                    className={cx('fc-info', { hidden: footballClub.lea_name !== leagueName })}
                    onClick={() => handleFootballClubClick(footballClub.name_club)}
                >
                    <Link to={`/overview/${footballClub.name_club}`}>
                        <Image className={cx('fc-logo')} src={footballClub.logo} alt={footballClub.acronym_club} />
                        <p className={cx('fc-name')}>{footballClub.name_club}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FootballClubs;
