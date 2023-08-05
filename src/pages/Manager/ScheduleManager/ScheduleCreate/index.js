import classNames from "classnames/bind";
import styles from './ScheduleCreate.module.scss';

const cx = classNames.bind(styles);

function ScheduleCreate() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Create a new schedule</h2>
                <form>
                    <div className={cx('club')}>
                        <div>
                            <label>Club:</label>
                            <input
                                type="text"
                                placeholder="Club Name"
                                //value={nameClub}
                                //onChange={(e) => setNameClub(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Stadium:</label>
                            <input
                                type="text"
                                placeholder="Stadium"
                                //value={stadium}
                                //onChange={(e) => setStadium(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Logo URL:</label>
                            <input
                                type="text"
                                placeholder="Logo URL"
                                //value={stadium}
                                //onChange={(e) => setStadium(e.target.value)}
                            />
                        </div>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default ScheduleCreate;