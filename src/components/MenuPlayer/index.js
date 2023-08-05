import classNames from 'classnames/bind';
import styles from './MenuPlayer.module.scss';

import { useState, useEffect } from "react";
import api from "~/api/api";

const cx = classNames.bind(styles);

function MenuPlayer() {
    const [playerList, setPlayerList] = useState([]);
    
    useEffect(() => {
        api.get(`/players/club/Chelsea`)
        .then(response => {
            setPlayerList(response.data)
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    },[]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('dropdown-content')}>
                {playerList.map((playerItem) => (
                    <div className={cx('item')} key={playerItem._id} onClick={() => setPlayerList(playerItem)}>
                        {playerItem.number} - {playerItem.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPlayer;