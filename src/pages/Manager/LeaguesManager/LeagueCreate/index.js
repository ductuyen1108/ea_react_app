import classNames from "classnames/bind";
import styles from './LeagueCreate.module.scss';
// import Button from "~/components/Button";

import { useState } from "react";
import api from "~/api/api";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function LeagueCreate() {
    const [formData, setFormData] = useState({
        lea_name: '',
        country: '',
        acronym_lea: '',
        description: '',
        logo: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/leagues', formData);
            console.log('League created:', response.data);
            navigate('/admin/leagues/list');
        } catch (error) {
            console.error('Error creating league:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Create a New League</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>League Name:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="lea_name"
                        value={formData.lea_name}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Country:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Acronym:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="acronym_lea"
                        value={formData.acronym_lea}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Description:</label>
                    <textarea className={cx('form-group')}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Logo URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="logo"
                        value={formData.logo}
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit">Create League</button>
                </form>
            </div>
        </div>
    );
}

export default LeagueCreate;