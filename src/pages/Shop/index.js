import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('nav')}>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Category</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Man</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Woman</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Kids</span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Brands</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Nike</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Adidas</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Puma</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Kappa</span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('block')}>
                            <h3 className={cx('text-heading')}>Price</h3>
                            <div className={cx('menu')}>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>Under $50</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>$50 to $100</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>$100 to $150</span>
                                </label>
                                <label className={cx('group')}>
                                    <input type="checkbox" className={cx('form-checkbox')}></input>
                                    <span>$150 to $300</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('products')}>
                        <div className={cx('group-box')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://images.footballfanatics.com/chelsea/chelsea-hawaiian-shirt-blue-mens_ss5_p-13381243+u-950r2mbfa6epywyz8hdc+v-1tmg8wwoetuxogph5yxn.jpg?_hv=2&w=340"
                                    alt="chel"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <span className={cx('name-product')}>Chelsea Hawaiian Shirt</span>
                                <p className={cx('desc-product')}>
                                    In Stock - This item will ship within 1 business day.
                                </p>
                                <div className={cx('price-product')}>
                                    <span>$40</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('group-box')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://images.footballfanatics.com/chelsea/chelsea-hawaiian-shirt-blue-mens_ss5_p-13381243+u-950r2mbfa6epywyz8hdc+v-1tmg8wwoetuxogph5yxn.jpg?_hv=2&w=340"
                                    alt="chel"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <span className={cx('name-product')}>Chelsea Hawaiian Shirt</span>
                                <p className={cx('desc-product')}>
                                    In Stock - This item will ship within 1 business day.
                                </p>
                                <div className={cx('price-product')}>
                                    <span>$40</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('group-box')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://images.footballfanatics.com/chelsea/chelsea-hawaiian-shirt-blue-mens_ss5_p-13381243+u-950r2mbfa6epywyz8hdc+v-1tmg8wwoetuxogph5yxn.jpg?_hv=2&w=340"
                                    alt="chel"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <span className={cx('name-product')}>Chelsea Hawaiian Shirt</span>
                                <p className={cx('desc-product')}>
                                    In Stock - This item will ship within 1 business day.
                                </p>
                                <div className={cx('price-product')}>
                                    <span>$40</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('group-box')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://images.footballfanatics.com/chelsea/chelsea-hawaiian-shirt-blue-mens_ss5_p-13381243+u-950r2mbfa6epywyz8hdc+v-1tmg8wwoetuxogph5yxn.jpg?_hv=2&w=340"
                                    alt="chel"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <span className={cx('name-product')}>Chelsea Hawaiian Shirt</span>
                                <p className={cx('desc-product')}>
                                    In Stock - This item will ship within 1 business day.
                                </p>
                                <div className={cx('price-product')}>
                                    <span>$40</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('group-box')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://images.footballfanatics.com/chelsea/chelsea-hawaiian-shirt-blue-mens_ss5_p-13381243+u-950r2mbfa6epywyz8hdc+v-1tmg8wwoetuxogph5yxn.jpg?_hv=2&w=340"
                                    alt="chel"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <span className={cx('name-product')}>Chelsea Hawaiian Shirt</span>
                                <p className={cx('desc-product')}>
                                    In Stock - This item will ship within 1 business day.
                                </p>
                                <div className={cx('price-product')}>
                                    <span>$40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
