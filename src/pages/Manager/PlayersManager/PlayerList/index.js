import classNames from "classnames/bind";
import styles from './PlayerList.module.scss';
import api from "~/api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function PlayerList() {

    const [players, setPlayers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deletedPlayerId, setDeletedPlayerId] = useState(null);

    useEffect(() => {
        api.get('/players')
            .then(response => {
                setPlayers(response.data);
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }, []);

    const navigation = useNavigate();
    const handleEdit = (id) => {
        navigation(`/admin/players/edit/${id}`);
    }

    const handleDelete = (player) => {
        setShowAlert(true);
        setDeletedPlayerId(player._id)
    }

    const fetchPlayers = async () => {
        try {
            const response = await api.get('/players');
            setPlayers(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await api.delete(`/players/${deletedPlayerId}`);
            setShowAlert(false);
            setDeletedPlayerId(null);
            fetchPlayers();
        } catch (error) {
            console.log('Error deleting player: ', error);
        }
    };
    
    const handleCancelDelete = () => {
        setShowAlert(false);
        setDeletedPlayerId(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Player manager list</h2>
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Club</th>
                                <th>Created time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player, index) => (
                                <tr key={player._id}>
                                    <th>{index + 1}</th>
                                    <td>{player.name}</td>
                                    <td>{player.number}</td>
                                    <td>{player.club}</td>
                                    <td>{player.createdAt}</td>
                                    <td>
                                        <button className={cx('btn-edit')} onClick={() => handleEdit(player._id)}>Edit</button>
                                        <button className={cx('btn-delete')} onClick={() => handleDelete(player)}>Delete</button>                                    
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showAlert && (
                        <div className={cx('alert-container')}>
                            <p className={cx('alert-message')}>Do you really want to delete?</p>
                            <div className={cx('alert-buttons')}>
                                <button onClick={handleConfirmDelete}>Delete</button>
                                <button onClick={handleCancelDelete}>Cancel</button>
                            </div>
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlayerList;