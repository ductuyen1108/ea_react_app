import classNames from 'classnames/bind';
import styles from './LeagueCreate.module.scss';
// import Button from "~/components/Button";

import { useState } from 'react';
import api from '~/api/api';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LeagueCreate() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        brand: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/products', formData);
            console.log('Product created:', response.data);
            navigate('/admin/products/list');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Create a New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Product Name:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <textarea
                            className={cx('form-group')}
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Image URL:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Brand:</label>
                        <input
                            className={cx('form-group')}
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div>
    );
}

export default LeagueCreate;
