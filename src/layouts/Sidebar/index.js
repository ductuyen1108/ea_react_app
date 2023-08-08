import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Leagues from '~/components/Leagues';
import FootballClubs from '~/components/FootballClubs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [selectedLeagueName, setSelectedLeagueName] = useState(null);
    const [isFootballClubsVisible, setIsFootballClubsVisible] = useState(false);

    const handleLeagueClick = (leagueName) => {
        setSelectedLeagueName(leagueName);
        setIsFootballClubsVisible(true);
    };

    const handleBackClick = () => {
        setSelectedLeagueName(null);
        setIsFootballClubsVisible(false);
    };

    return (
        <div className={cx('wrapper')}>
            {!isFootballClubsVisible && <Leagues onLeagueClick={handleLeagueClick} />}
            {isFootballClubsVisible && (
                <div className={cx('button')}>
                    <button className={cx('btn-back')} onClick={handleBackClick}>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <span>Return</span>
                    </button>
                </div>
            )}
            {isFootballClubsVisible && <FootballClubs leagueName={selectedLeagueName} />}
        </div>
    );
}

export default Sidebar;
