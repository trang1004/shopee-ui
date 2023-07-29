import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <li className={cx('header__navbar-item', 'header__navbar-item--has-notifi')}>
            <a href="/" className={cx('header__navbar-item-link')}>
                <span className={cx('header__navbar-icon')}>
                    <FontAwesomeIcon icon={faBell} />
                </span>
                Thông báo
            </a>
            <div className={cx('header__notifi')}>
                <header className={cx('header__notifi-header')}>
                    <h3>Thông Báo Mới Nhận</h3>
                </header>
                <ul className={cx('header__notifi-list')}>
                    <li className={cx('header__notifi-item', 'header__notifi-item--viewed')}>
                        <a href="#" className={cx('header__notifi-link')}>
                            <span>
                                <img src={images.Notifi} alt="ảnh thông báo" className={cx('header__notifi-img')} />
                            </span>
                            <div className={cx('header__notifi-info')}>
                                <span className={cx('header__notifi-name')}>
                                    váy lụa cao cấp ôm trọn body màu basic chất liệu thủ công cao cấp
                                </span>
                                <span className={cx('header__notifi-descriotion')}>
                                    mô tả trắng được thiết kế mềm mãi tạo sư ôm trọn cơ thể tạo đường cong cuốn rũ
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
                <footer className={cx('header__notifi-footer')}>
                    <a href="#" className={cx('header__notifi-footer-btn')}>
                        Xem tất cả
                    </a>
                </footer>
            </div>
        </li>
    );
}

export default Notification;
