import classNames from "classnames/bind";
import styles from './LeagueEdit.module.scss';

import { useState, useEffect } from 'react'
import api from "~/api/api";
import { useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function LeagueEdit() {
    const [formData, setFormData] = useState({
        lea_name: "",
        country: "",
        acronym_lea: "",
        description: "",
        logo: "",
    });

    const { id } = useParams()

    useEffect(() => {
        const fetchLeagueData = async () => {
            try {
                const response = await api.get(`/leagues/${id}/edit`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching league data:', error);
            }
        };
        fetchLeagueData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/leagues/${id}`, formData);
            console.log('League updated:', response.data);
            navigate('/admin/leagues/list')
        } catch (error) {
            console.error('Error updating league:', error);
        }
      };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Edit league</h2>
                <div className={cx('content')}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>League Name:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="lea_name"
                                value={formData.lea_name}
                                onChange={handleChange}
                                defaultValue={formData.lea_name}
                            />
                        </div>
                        <div>
                            <label>Country:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                defaultValue={formData.country}
                            />
                        </div>
                        <div>
                            <label>Acronym:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="acronym_lea"
                                value={formData.acronym_lea}
                                onChange={handleChange}
                                defaultValue={formData.acronym_lea}
                            />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea className={cx('form-group')}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                defaultValue={formData.description}
                            />
                        </div>
                        <div>
                            <label>Logo URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="logo"
                                value={formData.logo}
                                onChange={handleChange}
                                defaultValue={formData.logo}
                            />
                        </div>
                        <button type="submit">Update League</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LeagueEdit;