import classNames from 'classnames/bind';
import styles from './LeagueEdit.module.scss';

import { useState, useEffect } from 'react';
import api from '~/api/api';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountEdit() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchAccountData = async () => {
            try {
                const response = await api.get(`/accounts/${id}/edit`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching account data:', error);
            }
        };
        fetchAccountData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/accounts/${id}`, formData);
            console.log('Account updated:', response.data);
            navigate('/admin/accounts/list');
        } catch (error) {
            console.error('Error updating account:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Edit Account</h2>
                <div className={cx('content')}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input
                                className={cx('form-group')}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                defaultValue={formData.email}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                className={cx('form-group')}
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                defaultValue={formData.password}
                            />
                        </div>
                        <button type="submit">Update Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AccountEdit;
