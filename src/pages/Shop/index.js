import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { useEffect, useState } from 'react';
import api from '~/api/api';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Shop() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);

    const [categoryFilters, setCategoryFilters] = useState([]);
    const [brandFilters, setBrandFilters] = useState([]);
    const [priceFilters, setPriceFilters] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    }, []);

    // Load more:
    const handleLoadMore = () => {
        setVisibleProducts(products.length);
    };
    const remainingProducts = products.length - visibleProducts;

    // Filter:
    const handleCategoryFilter = (category) => {
        if (categoryFilters.includes(category)) {
            setCategoryFilters(categoryFilters.filter((filter) => filter !== category));
        } else {
            setCategoryFilters([...categoryFilters, category]);
        }
    };

    const handleBrandFilter = (brand) => {
        if (brandFilters.includes(brand)) {
            setBrandFilters(brandFilters.filter((filter) => filter !== brand));
        } else {
            setBrandFilters([...brandFilters, brand]);
        }
    };

    const handlePriceFilter = (minPrice, maxPrice) => {
        const selectedPriceRange = { min: minPrice, max: maxPrice };

        if (!priceFilters.some((filter) => filter.min === minPrice && filter.max === maxPrice)) {
            setPriceFilters([...priceFilters, selectedPriceRange]);
        } else {
            setPriceFilters(priceFilters.filter((filter) => !(filter.min === minPrice && filter.max === maxPrice)));
        }
    };

    const filteredProducts = products.filter((product) => {
        const categoryPass = categoryFilters.length === 0 || categoryFilters.includes(product.category);
        const brandPass = brandFilters.length === 0 || brandFilters.includes(product.brand);
        const pricePass =
            priceFilters.length === 0 ||
            priceFilters.some((filter) => product.price >= filter.min && product.price <= filter.max);
        return categoryPass && brandPass && pricePass;
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('nav')}>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Category</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')} onClick={() => handleCategoryFilter('man')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Man</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleCategoryFilter('woman')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Woman</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleCategoryFilter('kid')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Kid</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleCategoryFilter('hat')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Hat</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleCategoryFilter('shoes')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Shoes</span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Brands</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')} onClick={() => handleBrandFilter('Nike')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Nike</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleBrandFilter('Adidas')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Adidas</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleBrandFilter('Puma')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Puma</span>
                                </label>
                                <label className={cx('group')} onClick={() => handleBrandFilter('Kappa')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Kappa</span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Price</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')}>
                                    <input
                                        type="checkbox"
                                        className={cx('form-checkbox')}
                                        onClick={() => handlePriceFilter(0, 50)}
                                    ></input>
                                    <span>Under $50</span>
                                </label>
                                <label className={cx('group')}>
                                    <input
                                        type="checkbox"
                                        className={cx('form-checkbox')}
                                        onClick={() => handlePriceFilter(50, 100)}
                                    ></input>
                                    <span>$50 to $100</span>
                                </label>
                                <label className={cx('group')}>
                                    <input
                                        type="checkbox"
                                        className={cx('form-checkbox')}
                                        onClick={() => handlePriceFilter(100, 150)}
                                    ></input>
                                    <span>$100 to $150</span>
                                </label>
                                <label className={cx('group')}>
                                    <input
                                        type="checkbox"
                                        className={cx('form-checkbox')}
                                        onClick={() => handlePriceFilter(150, 300)}
                                    ></input>
                                    <span>$150 to $300</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('products')}>
                        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                            <div key={index} className={cx('group-box')}>
                                <div className={cx('image')}>
                                    <img src={product.image} alt=""></img>
                                </div>
                                <div className={cx('infor')}>
                                    <span className={cx('name-product')}>{product.name}</span>
                                    <p className={cx('desc-product')}>{product.description}</p>
                                    <div className={cx('price-product')}>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {remainingProducts > 0 && (
                        <Button primary className={cx('load-more')} onClick={handleLoadMore}>
                            Load More
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Shop;
