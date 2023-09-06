import classNames from 'classnames/bind';
import styles from './LeagueList.module.scss';
import api from '~/api/api';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountList() {
    const [accounts, setAccounts] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deletedAccountId, setDeletedAccountId] = useState(null);

    useEffect(() => {
        api.get('/accounts')
            .then((response) => {
                setAccounts(response.data);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }, []);

    const navigation = useNavigate();
    const handleEdit = (id) => {
        navigation(`/admin/accounts/edit/${id}`);
    };

    const handleDelete = (account) => {
        setShowAlert(true);
        setDeletedAccountId(account._id);
    };

    const fetchAccounts = async () => {
        try {
            const response = await api.get('/accounts');
            setAccounts(response.data);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await api.delete(`/accounts/${deletedAccountId}`);
            setShowAlert(false);
            setDeletedAccountId(null);
            fetchAccounts();
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const handleCancelDelete = () => {
        setShowAlert(false);
        setDeletedAccountId(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Account manager list</h2>
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ paddingRight: '15px' }}>#</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={account._id}>
                                    <th style={{ paddingRight: '15px' }}>{index + 1}</th>
                                    <td>{account.email}</td>
                                    <td>{account.password}</td>
                                    <td>
                                        <button className={cx('btn-edit')} onClick={() => handleEdit(account._id)}>
                                            Edit
                                        </button>
                                        <button className={cx('btn-delete')} onClick={() => handleDelete(account)}>
                                            Delete
                                        </button>
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

export default AccountList;
