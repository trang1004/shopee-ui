import classNames from 'classnames/bind';
import styles from './QAcode.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function QAcode() {
    return (
        <li className={cx('header__navbar-item', 'header__navbar-item--has-QR', 'header__navbar-item--separate')}>
            Vào cửa hàng trên ứng dụng shopee
            <div className={cx('header__qr')}>
                <img src={images.QA} alt="QA code" className={cx('header__qr-img')} />
                <div className={cx('header__qr-apps')}>
                    <a
                        href="https://apps.apple.com/vn/app/shopee-mua-s%E1%BA%AFm-online/id959841449"
                        className={cx('header__qr-link')}
                    >
                        <img src={images.appStore} alt="App store" className={cx('header__qr-download-img')} />
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.shopee.vn&hl=vi&gl=US&pli=1"
                        className={cx('header__qr-link')}
                    >
                        <img src={images.google} alt="Google Play" className={cx('header__qr-download-img')} />
                    </a>
                </div>
            </div>
        </li>
    );
}

export default QAcode;
