import classNames from 'classnames/bind';
import styles from './Squad.module.scss';
import api from '~/api/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useClub } from '~/context/ClubContext';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Squad() {
    const [playerList, setPlayerList] = useState([]);
    const [menuPlayer, setMenuPlayer] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const { nameClub } = useClub();

    const handleMenuPlayer = () => {
        setMenuPlayer(!menuPlayer);
    };

    useEffect(() => {

        if(nameClub) {
            api.get(`/players/club/${nameClub}`)
                .then(response => {
                    setPlayerList(response.data);
                    if (response.data.length > 0) {
                        setSelectedPlayer(response.data[0])
                    }
                })
                .catch(err => {
                    console.log('error', err);
            });
        } 
    }, [nameClub]);

    const handlePlayerSelect = (selectedPlayer) => {
        setSelectedPlayer(selectedPlayer);
        setMenuPlayer(false); 
    };

    useEffect(() => {
        if (selectedPlayer) {
            const timeoutId = setTimeout(() => {
            api.get(`/players/${nameClub}/${selectedPlayer.name}`)
                .then(response => {
                    setSelectedPlayer(response.data)
                })
                .catch(err => {
                    console.log("Error ", err);
                });
            }, 10000)
            return () => clearTimeout(timeoutId);
        }
    },[nameClub, selectedPlayer])

    if (!selectedPlayer) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('squad-player')}>
                    <div className={cx('menu-player')} onClick={handleMenuPlayer}>
                        <span className={cx('name-player')}>{selectedPlayer.number} - {selectedPlayer.name}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    {menuPlayer && (
                        <div className={cx('dropdown-content')}>
                        {playerList.map((playerItem) => (
                            <div className={cx('item')} key={playerItem._id} onClick={() => handlePlayerSelect(playerItem)}>
                                {playerItem.number} - {playerItem.name}
                            </div>
                        ))}
                        </div>
                    )}                    
                    <span className={cx('full-season')}>Full season show skills</span>
                    <div className={cx('vid-player')}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedPlayer.video}`}
                            title="YouTube Video"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={cx('desc-player')}>
                        <span>
                            {selectedPlayer.introduce}
                        </span>
                    </div>
                </div>
                <div className={cx('data-player')}>
                    <div className={cx('title')}>
                        <span>Scouting Report</span>
                    </div>
                    <div className={cx('img-stats')}>
                        <img
                            src={selectedPlayer.stats}
                            alt=""
                        />
                    </div>
                    <div className={cx('note')}>
                        <span>Last season stats</span>
                    </div>
                    <div className={cx('params')}>
                        <div className={cx('params-item')}>
                            <div className={cx('param-color-a')}></div>
                            <span>Attacking</span>
                        </div>
                        <div className={cx('params-item')}>
                            <div className={cx('param-color-p')}></div>
                            <span>Possession</span>
                        </div>
                        <div className={cx('params-item')}>
                            <div className={cx('param-color-d')}></div>
                            <span>Defending</span>
                        </div>
                    </div>
                </div>
                <div className={cx('image-player')}>
                    <div className={cx('title')}>
                        <span>Detail</span>
                    </div>
                    <div className={cx('avatar')}>
                        <img
                            src={selectedPlayer.image}
                            alt=""
                        />
                    </div>
                    <div className={cx('infor')}>
                        <div className={cx('infor-item')}>
                            <strong>Full Name:</strong>
                            <span>{selectedPlayer.full_name}</span>
                        </div><div className={cx('infor-item')}>
                            <strong>Number:</strong>
                            <span>{selectedPlayer.number}</span>
                        </div>
                        <div className={cx('infor-item')}>
                            <strong>Position:</strong>
                            <span>{selectedPlayer.position}</span>
                        </div>
                        <div className={cx('infor-item')}>
                            <strong>Footed:</strong>
                            <span>{selectedPlayer.footed}</span>
                        </div>
                        <div className={cx('infor-item')}>
                            <strong>Born:</strong>
                            <span>{selectedPlayer.born}</span>
                        </div>
                        <div className={cx('infor-item')}>
                            <strong>National Team:</strong>
                            <span>{selectedPlayer.national_team}</span>
                        </div>
                    </div>
                    <div className={cx('follow-social')}>
                        <span>Follow {selectedPlayer.name} on Social Media</span>
                        <div className={cx('socials')}>
                            <Link to={selectedPlayer.twitter} target='blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to={selectedPlayer.instagram} target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to={selectedPlayer.facebook} target='blank'><FontAwesomeIcon icon={faFacebook} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Squad;
