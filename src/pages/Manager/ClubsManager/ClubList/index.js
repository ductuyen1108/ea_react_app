import classNames from "classnames/bind";
import styles from './ClubList.module.scss';
import api from "~/api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ClubList() {

    const [clubs, setClubs] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deletedClubId, setDeletedClubId] = useState(null);

    useEffect(() => {
        api.get('/clubs')
            .then(response => {
                setClubs(response.data);
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }, []);

    const navigation = useNavigate();
    const handleEdit = (id) => {
        navigation(`/admin/clubs/edit/${id}`);
    }

    const handleDelete = (club) => {
        setShowAlert(true);
        setDeletedClubId(club._id)
    }

    const fetchClubs = async () => {
        try {
            const response = await api.get('/clubs');
            setClubs(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await api.delete(`/clubs/${deletedClubId}`);
            setShowAlert(false);
            setDeletedClubId(null);
            fetchClubs();
        } catch (error) {
            console.log('Error deleting club: ', error);
        }
    };
    
    const handleCancelDelete = () => {
        setShowAlert(false);
        setDeletedClubId(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Club manager list</h2>
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Club name</th>
                                <th>League</th>
                                <th>Stadium</th>
                                <th>Created time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clubs.map((club, index) => (
                                <tr key={club._id}>
                                    <th>{index + 1}</th>
                                    <td>{club.name_club}</td>
                                    <td>{club.lea_name}</td>
                                    <td>{club.stadium}</td>
                                    <td>{club.createdAt}</td>
                                    <td>
                                        <button className={cx('btn-edit')} onClick={() => handleEdit(club._id)}>Edit</button>
                                        <button className={cx('btn-delete')} onClick={() => handleDelete(club)}>Delete</button>                                    
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

export default ClubList;