import classNames from 'classnames/bind';
import styles from './LeagueList.module.scss';
import api from '~/api/api';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function LeagueList() {
    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deletedProductId, setDeletedProductId] = useState(null);

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }, []);

    const navigation = useNavigate();
    const handleEdit = (id) => {
        navigation(`/admin/products/edit/${id}`);
    };

    const handleDelete = (product) => {
        setShowAlert(true);
        setDeletedProductId(product._id);
    };

    const fetchProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await api.delete(`/products/${deletedProductId}`);
            setShowAlert(false);
            setDeletedProductId(null);
            // Tải lại danh sách product từ server để cập nhật lại trạng thái của component
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleCancelDelete = () => {
        setShowAlert(false);
        setDeletedProductId(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Product manager list</h2>
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Created time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.createdAt}</td>
                                    <td>
                                        <button className={cx('btn-edit')} onClick={() => handleEdit(product._id)}>
                                            Edit
                                        </button>
                                        <button className={cx('btn-delete')} onClick={() => handleDelete(product)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showAlert && (
                        <div className={cx('alert-container')}>
                            <p className={cx('alert-message')}>Do you really want to delete?</p>
                            <div className={cx('alert-buttons')}>
                                <button onClick={handleConfirmDelete}>Delete</button>
                                <button onClick={handleCancelDelete}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeagueList;
