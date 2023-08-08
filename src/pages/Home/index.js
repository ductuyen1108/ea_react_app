import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import api from '~/api/api';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const images = [
    'https://image.sggp.org.vn/1200x630/Uploaded/2023/cplaaht/2023_06_05/skysports-premier-league-promo-5897092-7380.png',
    'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0fa8f784e8bcfb2b/62f492bb479be96a6e6b6dd9/League_Cover_La_Liga.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0802%2Fsoc_bundesliga%2Dseason%2Dpreview_16x9.jpg',
    'https://theanalyst.com/wp-content/uploads/2023/05/serie-a-predictions-opta.jpg',
    'https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2020/01/31/Desktop_1920_L1_Banner_logo_stars.jpg',
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        api.get('/leagues')
            .then((response) => {
                setLeagues(response.data);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });

        const interval = setInterval(() => {
            setCurrentIndex((imageIndex) => (imageIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('slide-club')}>
                    <button
                        className={cx('prev-button')}
                        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className={cx('image-slider')}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={cx('slide', {
                                    active: currentIndex === index,
                                    prev:
                                        currentIndex - 1 === index ||
                                        (currentIndex === 0 && index === images.length - 1),
                                    next:
                                        currentIndex + 1 === index ||
                                        (currentIndex === images.length - 1 && index === 0),
                                })}
                            />
                        ))}
                    </div>
                    <button
                        className={cx('next-button')}
                        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                {leagues.map((league) => (
                    <div key={league._id} className={cx('leagues')}>
                        <div className={cx('title')}>
                            <h2>{league.lea_name}</h2>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('image')}>
                                <img src={league.logo} alt="" />
                            </div>
                            <div className={cx('description')}>
                                <span>{league.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
