import classNames from "classnames/bind";
import styles from './PlayerCreate.module.scss';

import { useState } from "react";
import api from "~/api/api";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function PlayerCreate() {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/players', formData);
            console.log('Player created:', response.data);
            navigate('/admin/players/list');
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
                    <label>Name:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Full name:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Image URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Club:</label>
                    <textarea className={cx('form-group')}
                        name="club"
                        value={formData.club}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Number:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Position:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Footed:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="footed"
                        value={formData.footed}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Born:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="born"
                        value={formData.born}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>National team:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="national_team"
                        value={formData.national_team}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Introduce:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="introduce"
                        value={formData.introduce}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Stats URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="stats"
                        value={formData.stats}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>VideoID:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Twitter URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Instagram URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>Facebook URL:</label>
                    <input className={cx('form-group')}
                        type="text"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit">Create player</button>
                </form>
            </div>
        </div>
    );
}

export default PlayerCreate;