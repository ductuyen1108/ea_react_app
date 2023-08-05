/* eslint-disable no-cond-assign */
import classNames from "classnames/bind";
import styles from './Login.module.scss';

import api from "~/api/api";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useClub } from "~/context/ClubContext";

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { setUserRole } = useClub();

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/accounts/login', { email, password });
            // Xử lý đăng nhập thành công, ví dụ: lưu token vào localStorage
            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            setUserRole(role);

            console.log('Login succesfull!', response.data);
            history('/');
        } catch (error) {
            setErrorMessage('Login failed. Please double check your email and password!');
            console.error(error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>Login</h1>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('inner')}>
                        <label>Email:</label>
                        <input
                            className={cx('input')}
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={cx('inner')}>
                        <label>Password:</label>
                        <input
                            className={cx('input')}
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={cx('btn')} type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;