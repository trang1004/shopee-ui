import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import QAcode from './QAcode';
import Connect from './Connect';
import Notification from './Notification';
import Help from './Help';
import User from './User';
import Logo from './Logo';


const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('grid wide')}>
                <nav className={cx('header__navbar hide-on-mobile-tablet')}>
                    <ul className={cx('header__navbar-list')}>
                        <QAcode />
                        <Connect />
                    </ul>
                    <ul className={cx("header__navbar-list")}>
                        <Notification />
                        <Help />
                        <User />
                    </ul>
                </nav>

                <div className={cx("header-with-search")}>
                    <label htmlFor="mobile-search-checkbox" className={cx('header__mobile-search')}>
                        <span className={cx('header__mobile-search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </label>
                    <Logo />
                </div>
            </div>
        </header>
    );
}

export default Header;
