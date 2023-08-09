import classNames from 'classnames/bind';
import styles from './LeagueEdit.module.scss';

import { useState, useEffect } from 'react';
import api from '~/api/api';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function LeagueEdit() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        brand: '',
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await api.get(`/products/${id}/edit`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        fetchProductData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/products/${id}`, formData);
            console.log('Product updated:', response.data);
            navigate('/admin/products/list');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Edit product</h2>
                <div className={cx('content')}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Product Name:</label>
                            <input
                                className={cx('form-group')}
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                defaultValue={formData.name}
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
                                defaultValue={formData.description}
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
                                defaultValue={formData.price}
                            />
                        </div>
                        <div>
                            <label>Category:</label>
                            <textarea
                                className={cx('form-group')}
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                defaultValue={formData.category}
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
                                defaultValue={formData.image}
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
                                defaultValue={formData.brand}
                            />
                        </div>
                        <button type="submit">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LeagueEdit;
