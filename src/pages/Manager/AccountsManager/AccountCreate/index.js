import classNames from 'classnames/bind';
import styles from './ClubCreate.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '~/api/api';

const cx = classNames.bind(styles);

function AccountCreate() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/accounts/register', formData);
            console.log('Account created:', response.data);
            navigation('/admin/accounts/list');
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Create a Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                        />
                    </div>
                    <button type="submit">Create account</button>
                </form>
            </div>
        </div>
    );
}

export default AccountCreate;
