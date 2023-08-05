import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Club from '~/components/Club/Club';
import api from '~/api/api';
import { useDebounce } from '~/hooks';

import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Fix api call multiple times 
    const debounced = useDebounce(searchValue, 800);

    const inputRef = useRef(); // get DOM element

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if(!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        api.get(`/clubs/search?name=${encodeURIComponent(debounced)}&type=less`)
            .then (response => {
                setSearchResult(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error: ", error);
                setLoading(false);
            })
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Clubs</h4>
                        {searchResult.map(result => (
                            <Club key={result._id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)} // input value = user input value
                    onFocus={() => setShowResult(true)} // focus input show search result
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
