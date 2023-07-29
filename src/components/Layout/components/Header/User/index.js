import classNames from 'classnames/bind';
import styles from './User.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function User() {
    return (
        <li className={cx("header__navbar-item header__navbar-user")}> 
            <img src={images.avt} alt="Avatar" className={cx("header__navbar-user-img")} />
            <span className={cx("header__navbar-user-name")}>Trần Trang</span>
            <ul className={cx("header__navbar-user-menu")}>
                <li className={cx("header__navbar-user-item")}>
                    <a href="">Tài khoản của tôi</a>
                </li>

                <li className={cx("header__navbar-user-item")}>
                    <a href="">Địa chỉ của tôi</a>
                </li>

                <li className={cx("header__navbar-user-item")}>
                    <a href="">Đơn mua</a>
                </li>

                <li className={cx("header__navbar-user-item")}>
                    <a href="">Đăng xuất</a>
                </li>
            </ul>
        </li>
    );
}

export default User;
