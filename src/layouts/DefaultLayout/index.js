    import Header from '~/layouts/Header';
    import Sidebar from '~/layouts/Sidebar';
    import Footter from '~/layouts/Footter';

    import classNames from 'classnames/bind';
    import styles from './DefaultLayout.module.scss';
    //import { FootballClubProvider } from '~/context/FootballClubContext';

    const cx = classNames.bind(styles);

    function DefaultLayout({ children }) {
        const handleLeagueClick = (leagueName) => {
        // Xử lý logic khi click vào đội bóng
        console.log('Clicked on league:', leagueName);
    };
        return (
                <div className={cx('wrapper')}>
                    <Header />
                    <div className={cx('container')}>
                        <Sidebar onLeagueClick={handleLeagueClick}/>
                        <div className={cx('content')}>{children}</div>
                    </div>
                    <Footter />
                </div>
        );
    }

    export default DefaultLayout;
