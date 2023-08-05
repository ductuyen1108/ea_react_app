import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import api from '~/api/api';
import { useClub } from '~/context/ClubContext';

const cx = classNames.bind(styles);

function Schedule() {
    const [schedule, setSchedule] = useState(null);
    const { nameClub } = useClub();
    useEffect(() => {
        api.get(`/schedules/${nameClub}`)
            .then(response => {
                setSchedule(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            })
    },[nameClub])
    if(!schedule) {
        return <div>Loading...</div>
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>Schedule for the season 2023-2024</div>
                <div className={cx('container')}>
                    {schedule?.rounds.map((round, index) => (    
                        <div key={index}>
                            <div className={cx('date')}>
                                <span className={cx('date-long')}>{round.date}</span>
                            </div>               
                            <div className={cx('match')} key={index}>
                                <div className={cx('matches-list')}>
                                    <div className={cx('teams')}>
                                        {round.is_home_match ? (
                                            <>
                                                <div className={cx('left-team')}>
                                                    <p className={cx('name-team')}>{schedule.name_club}</p>
                                                    <Image className={cx('logo-team')} src={schedule.logo} alt="" />
                                                </div>
                                                <div className={cx('time-start')}>
                                                    <span>{round.time}</span>
                                                </div>
                                                <div className={cx('right-team')}>
                                                    <Image className={cx('logo-team')} src={round.away_logo} alt="" />
                                                    <p className={cx('name-team')}>{round.away_club}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className={cx('left-team')}>
                                                    <p className={cx('name-team')}>{round.away_club}</p>
                                                    <Image className={cx('logo-team')} src={round.away_logo} alt="" />
                                                </div>
                                                <div className={cx('time-start')}>
                                                    <span>{round.time}</span>
                                                </div>
                                                <div className={cx('right-team')}>
                                                    <Image className={cx('logo-team')} src={schedule.logo} alt="" />
                                                    <p className={cx('name-team')}>{schedule.name_club}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {round.is_home_match ? (
                                        <div className={cx('stadium')}>
                                            <div className={cx('stadium-logo')}>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <span className={cx('stadium-name')}>{schedule.stadium}</span>
                                        </div>
                                    ) : (
                                        <div className={cx('stadium')}>
                                            <div className={cx('stadium-logo')}>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <span className={cx('stadium-name')}>{round.away_stadium}</span>
                                        </div>
                                    )}                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
