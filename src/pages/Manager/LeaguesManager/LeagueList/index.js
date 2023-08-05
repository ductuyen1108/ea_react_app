import classNames from "classnames/bind";
import styles from './LeagueList.module.scss';
import api from "~/api/api";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function LeagueList() {

    const [leagues, setLeagues] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deletedLeagueId, setDeletedLeagueId] = useState(null);

    useEffect(() => {
        api.get('/leagues')
            .then((response) => {
                setLeagues(response.data);
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }, []);

    const navigation = useNavigate();
    const handleEdit = (id) => {
        navigation(`/admin/leagues/edit/${id}`);
    };

    const handleDelete = (league) => {
        setShowAlert(true);
        setDeletedLeagueId(league._id);
    };
    
    const fetchLeagues = async () => {
        try {
          const response = await api.get('/leagues');
          setLeagues(response.data);
        } catch (error) {
          console.error('Error fetching leagues:', error);
        }
    }

    const handleConfirmDelete = async () => {
        try {
            await api.delete(`/leagues/${deletedLeagueId}`);
            setShowAlert(false);
            setDeletedLeagueId(null);
            // Tải lại danh sách liên đoàn từ server để cập nhật lại trạng thái của component
            fetchLeagues();
          } catch (error) {
            console.error('Error deleting league:', error);
          }
    };

    const handleCancelDelete = () => {
        setShowAlert(false);
        setDeletedLeagueId(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>League manager list</h2>
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>League name</th>
                                <th>Country</th>
                                <th>Created time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leagues.map((league, index) => (
                                <tr key={league._id}>
                                    <th>{index + 1}</th>
                                    <td>{league.lea_name}</td>
                                    <td>{league.country}</td>
                                    <td>{league.createdAt}</td>
                                    <td>
                                        <button className={cx('btn-edit')} onClick={() => handleEdit(league._id)}>Edit</button>
                                        <button className={cx('btn-delete')} onClick={() => handleDelete(league)}>Delete</button>                                    
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
    )
}

export default LeagueList;