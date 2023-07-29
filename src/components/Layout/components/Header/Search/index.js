import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('header__search')}>
            <div className={cx('header__search-input-wrap')}>
                <input type="text" className={cx('header__search-input')} placeholder="Nhập để tìm kiếm sản phẩm" />
                <div className={cx('header__search-history')}>
                    <h3 className={cx('header__search-history-heading')}>Lịch sử tìm kiếm</h3>
                    <ul className={cx('header__search-history-list')}>
                        <li className={cx('header__search-history-item')}>
                            <a href="">chân váy ngắn</a>
                        </li>

                        <li className={cx('header__search-history-item')}>
                            <a href="">dầm ôm body</a>
                        </li>

                        <li className={cx('header__search-history-item')}>
                            <a href="">chân váy ngắn</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('header__search-select')}>
                <span className={cx('header__search-select-label')}>Trong shop</span>
                <span className={cx('header__search-select-icon')}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </span>

                <ul className={cx('header_search-option')}>
                    <li className={cx('header_search-option-item', 'header_search-option-item-active')}>
                        <span>Trong shop</span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </li>
                    <li className={cx('header_search-option-item')}>
                        <span>Ngoài shop</span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </li>
                </ul>
            </div>

            <button className={cx('header__search-btn')}>
                <span className={cx('header__search-btn-icon')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </button>
        </div>
    );
}

export default Search;
