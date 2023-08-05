import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h2>News</h2>
                </div>
                <div className={cx('content')}>
                    <div className={cx('new')}>
                        <div className={cx('image')}>
                            <img
                                className={cx('new-img')}
                                src="https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/07/20/RJ_returns.png"
                                alt="RJ24"
                            />
                        </div>
                        <a className={cx('title-new')} href="/news/reece-james-is-here">
                            Reece James is here!
                        </a>
                    </div>
                    <div className={cx('new')}>
                        <div className={cx('image')}>
                            <img
                                className={cx('new-img')}
                                src="https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/07/20/RJ_returns.png"
                                alt="RJ24"
                            />
                        </div>
                        <a className={cx('title-new')} href="/news/reece-james-is-here">
                            Reece James is here!
                        </a>
                    </div>
                    <div className={cx('new')}>
                        <div className={cx('image')}>
                            <img
                                className={cx('new-img')}
                                src="https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/07/20/RJ_returns.png"
                                alt="RJ24"
                            />
                        </div>
                        <a className={cx('title-new')} href="/news/reece-james-is-here">
                            Reece James is here!
                        </a>
                    </div>
                    <div className={cx('new')}>
                        <div className={cx('image')}>
                            <img
                                className={cx('new-img')}
                                src="https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/07/20/RJ_returns.png"
                                alt="RJ24"
                            />
                        </div>
                        <a className={cx('title-new')} href="/news/reece-james-is-here">
                            Reece James is here!
                        </a>
                    </div>
                    <div className={cx('new')}>
                        <div className={cx('image')}>
                            <img
                                className={cx('new-img')}
                                src="https://img.chelseafc.com/image/upload/f_auto,ar_16:9,w_500,c_fill,g_auto,q_90/video/2023/07/20/RJ_returns.png"
                                alt="RJ24"
                            />
                        </div>
                        <a className={cx('title-new')} href="/news/reece-james-is-here">
                            Reece James is here!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
