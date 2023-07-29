import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames/bind';
import styles from './Connect.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Connect() {
    return (
        <li className={cx('header__navbar-item')}>
            <span className={cx('header__navbar-title--no-pointer')}>Kết nối</span>

            <a href="https://www.facebook.com/ShopeeVN" className={cx('header__navbar-icon-link')}>
                <span className={cx("header__navbar-icon")}>
                    <FontAwesomeIcon icon={faFacebook} />
                </span>
            </a>

            <a href="https://www.instagram.com/Shopee_VN/" className={cx('header__navbar-icon-link')}>
                <span className={cx("header__navbar-icon")}>
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
            </a>
        </li>
    );
}

export default Connect;
