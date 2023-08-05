import classNames from "classnames/bind";
import styles from './ClubCreate.module.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "~/api/api";

const cx = classNames.bind(styles);

function ClubCreate() {

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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/clubs', formData);
            console.log('League created:', response.data);
            navigation('/admin/clubs/list');
        } catch (error) {
            console.error('Error creating league:', error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Create a New Club</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Club Name:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="name_club"
                        value={formData.name_club}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Acronym:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="acronym_club"
                        value={formData.acronym_club}
                        onChange={handleChange}
                    />
                    </div>
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
                    <label>Stadium:</label>
                    <textarea className={cx('form-group')}
                        name="stadium"
                        value={formData.stadium}
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
                    <div>
                    <label>History:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="history"
                        value={formData.history}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Overview:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="overview"
                        value={formData.overview}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Stadium introduce:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="stadium_desc"
                        value={formData.stadium_desc}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Trophy:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="trophy"
                        value={formData.trophy}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Image stadium URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="img_stadium"
                        value={formData.img_stadium}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Image trophy URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="img_trophy"
                        value={formData.img_trophy}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Image history URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="img_history"
                        value={formData.img_history}
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit">Create club</button>
                </form>
            </div>
        </div>
    );
}

export default ClubCreate;