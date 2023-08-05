import classNames from 'classnames/bind';
import styles from './Standings.module.scss';
import { useEffect, useState } from 'react';
import api from '~/api/api';
import { useClub } from '~/context/ClubContext';


const cx = classNames.bind(styles);

function Standings() {

    const [table, setTable] =useState(null);
    const { nameClub } = useClub();
    console.log("nameClub from URL:", nameClub);
    useEffect(() => {
        api.get(`/tables/team/${nameClub}`)
            .then(response => {
                setTable(response.data)
            })
            .catch(error => {
                console.log("Error: ", error);
            })
    },[nameClub]);

    if (!table) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h2>{table.league} standings for the season {table.season}</h2>
                </div>
                <div className={cx('content')}>
                    <div className={cx('rank')}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={cx('th-position')}>Position</th>
                                    <th className={cx('th-club')}>Club</th>
                                    <th className={cx('th-param')}>Played</th>
                                    <th className={cx('th-param')}>Won</th>
                                    <th className={cx('th-param')}>Drawn</th>
                                    <th className={cx('th-param')}>Lost</th>
                                    <th className={cx('th-param')}>GF</th>
                                    <th className={cx('th-param')}>GA</th>
                                    <th className={cx('th-param')}>GD</th>
                                    <th className={cx('th-param')}>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table?.clubs.map((club, index) => (
                                    <tr key={index}>
                                        <td className={cx('td-position')}>{index+1}</td>
                                        <td className={cx('td-club')}>
                                            <div className={cx('content-club')}>
                                                <span className={cx('logo')}>
                                                    <img
                                                        src={club.logo}
                                                        alt=""
                                                    />
                                                </span>
                                                <span className={cx('name')}>{club.name_club}</span>
                                            </div>
                                        </td>
                                        <td>{club.matches_played}</td>
                                        <td>{club.wins}</td>
                                        <td>{club.drawns}</td>
                                        <td>{club.losses}</td>
                                        <td>{club.goals_for}</td>
                                        <td>{club.goals_against}</td>
                                        <td>{club.goals_for - club.goals_against}</td>
                                        <td>{club.wins*3 + club.drawns*1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Standings;
