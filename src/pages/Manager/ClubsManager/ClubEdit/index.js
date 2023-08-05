import classNames from "classnames/bind";
import styles from './ClubEdit.module.scss';

import { useState, useEffect } from 'react'
import api from "~/api/api";
import { useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function ClubEdit() {
    const [formData, setFormData] = useState({
        name_club: '',
        acronym_club: '',
        lea_name: '',
        stadium: '',
        logo: '',
        history: '',
        overview: '',
        stadium_desc: '',
        trophy: '',
        img_stadium: '',
        img_trophy: '',
        img_history: '',
    });

    const { id } = useParams()

    useEffect(() => {
        const fetchClubData = async () => {
            try {
                const response = await api.get(`/clubs/${id}/edit`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching league data:', error);
            }
        };
        fetchClubData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/clubs/${id}`, formData);
            console.log('Club updated:', response.data);
            navigate('/admin/clubs/list')
        } catch (error) {
            console.error('Error updating club:', error);
        }
      };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Edit league</h2>
                <div className={cx('content')}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Club Name:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="name_club"
                                value={formData.name_club}
                                onChange={handleChange}
                                defaultValue={formData.name_club}
                            />
                        </div>
                        <div>
                            <label>Acronym:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="acronym_club"
                                value={formData.acronym_club}
                                onChange={handleChange}
                                defaultValue={formData.acronym_club}
                            />
                        </div>
                        <div>
                            <label>League:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="lea_name"
                                value={formData.lea_name}
                                onChange={handleChange}
                                defaultValue={formData.lea_name}
                            />
                        </div>
                        <div>
                            <label>Stadium:</label>
                            <textarea className={cx('form-group')}
                                name="stadium"
                                value={formData.stadium}
                                onChange={handleChange}
                                defaultValue={formData.stadium}
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
                        <div>
                            <label>History:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="history"
                                value={formData.history}
                                onChange={handleChange}
                                defaultValue={formData.history}
                            />
                        </div>
                        <div>
                            <label>Overview:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="overview"
                                value={formData.overview}
                                onChange={handleChange}
                                defaultValue={formData.overview}
                            />
                        </div>
                        <div>
                            <label>Stadium introduce:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="stadium_desc"
                                value={formData.stadium_desc}
                                onChange={handleChange}
                                defaultValue={formData.stadium_desc}
                            />
                        </div>
                        <div>
                            <label>Trophy:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="trophy"
                                value={formData.trophy}
                                onChange={handleChange}
                                defaultValue={formData.trophy}
                            />
                        </div>
                        <div>
                            <label>Image stadium URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="img_stadium"
                                value={formData.img_stadium}
                                onChange={handleChange}
                                defaultValue={formData.img_stadium}
                            />
                        </div>
                        <div>
                            <label>Image trophy URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="img_trophy"
                                value={formData.img_trophy}
                                onChange={handleChange}
                                defaultValue={formData.img_trophy}
                            />
                        </div>
                        <div>
                            <label>Image history URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="img_history"
                                value={formData.img_history}
                                onChange={handleChange}
                                defaultValue={formData.img_history}
                            />
                        </div>
                        <button type="submit">Update League</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClubEdit;