import classNames from "classnames/bind";
import styles from './PlayerEdit.module.scss';

import { useState, useEffect } from 'react'
import api from "~/api/api";
import { useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function PlayerEdit() {
    const [formData, setFormData] = useState({
        name: "",
        full_name: "",
        image: "",
        club: "",
        number: "",
        position: "",
        footed: "",
        born: "",
        national_team: "",
        introduce: "",
        stats: "",
        video: "",
        twitter: "",
        instagram: "",
        facebook: "",
    });

    const { id } = useParams()

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await api.get(`/players/${id}/edit`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };
        fetchPlayerData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/players/${id}`, formData);
            console.log('Player updated:', response.data);
            navigate('/admin/players/list')
        } catch (error) {
            console.error('Error updating player:', error);
        }
      };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Edit player</h2>
                <div className={cx('content')}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                defaultValue={formData.name}
                            />
                        </div>
                        <div>
                            <label>Full name:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                defaultValue={formData.full_name}
                            />
                        </div>
                        <div>
                            <label>Image url:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                defaultValue={formData.image}
                            />
                        </div>
                        <div>
                            <label>Club:</label>
                            <textarea className={cx('form-group')}
                                name="club"
                                value={formData.club}
                                onChange={handleChange}
                                defaultValue={formData.club}
                            />
                        </div>
                        <div>
                            <label>Number:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                defaultValue={formData.number}
                            />
                        </div>
                        <div>
                            <label>Position:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                defaultValue={formData.position}
                            />
                        </div>
                        <div>
                            <label>Footed:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="footed"
                                value={formData.footed}
                                onChange={handleChange}
                                defaultValue={formData.footed}
                            />
                        </div>
                        <div>
                            <label>Born:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="born"
                                value={formData.born}
                                onChange={handleChange}
                                defaultValue={formData.born}
                            />
                        </div>
                        <div>
                            <label>National team:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="national_team"
                                value={formData.national_team}
                                onChange={handleChange}
                                defaultValue={formData.national_team}
                            />
                        </div>
                        <div>
                            <label>Introdue:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="introduce"
                                value={formData.introduce}
                                onChange={handleChange}
                                defaultValue={formData.introduce}
                            />
                        </div>
                        <div>
                            <label>Stats URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="stats"
                                value={formData.stats}
                                onChange={handleChange}
                                defaultValue={formData.stats}
                            />
                        </div>
                        <div>
                            <label>VideoID:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="video"
                                value={formData.video}
                                onChange={handleChange}
                                defaultValue={formData.video}
                            />
                        </div>
                        <div>
                            <label>Twitter URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleChange}
                                defaultValue={formData.twitter}
                            />
                        </div>
                        <div>
                            <label>Instagram URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                                defaultValue={formData.instagram}
                            />
                        </div>
                        <div>
                            <label>Facebook URL:</label>
                            <input className={cx('form-group')}
                                type="text"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleChange}
                                defaultValue={formData.facebook}
                            />
                        </div>
                        <button type="submit">Update League</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlayerEdit;