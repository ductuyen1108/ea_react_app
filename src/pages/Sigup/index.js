/* eslint-disable no-cond-assign */
import classNames from "classnames/bind";
import styles from './Sigup.module.scss';

import { useState } from 'react';
import api from "~/api/api";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Sigup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/accounts/register', { email, password });
            console.log('Đăng ký thành công!', response.data);
            history('/login');
        } catch (error) {
            setErrorMessage('Đăng ký không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
            console.error(error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>Sigup</h1>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('inner')}>
                        <label>Email:</label>
                        <input
                            className={cx('input')}
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={cx('inner')}>
                        <label>Password:</label>
                        <input
                            className={cx('input')}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={cx('btn')} type="submit">Sigup</button>
                </form>
            </div>
        </div>
    );
}

export default Sigup;