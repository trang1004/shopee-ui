import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function FooterContent() {
    return (
        <div className={cx('grid', 'wide', 'footer__content')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                    <h3 className={cx('footer__heading')}>CHĂM SÓC KHÁCH HÀNG</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Trung Tâm Trợ Giúp
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Shopee Mall
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Hướng Dẫn Mua Hàng
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Hướng Dẫn Bán Hàng
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Thanh Toán
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Vận Chuyển
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Trả Hàng & Hoàn Tiền
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Chính Sách Bảo Hành
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                    <h3 className={cx('footer__heading')}>VỀ SHOPEE</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Giới Thiệu Về Shopee Việt Nam
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Chương Trình Tiếp Thị Liên Kết{' '}
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Điều Khoản Shopee
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Chính Sách Bảo Mật
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Liên Hệ Với Truyền Thông
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                    <h3 className={cx('footer__heading')}>DANH MỤC</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Danh mục 1
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Danh mục 2
                            </a>
                        </li>

                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                Danh mục 3
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                    <h3 className={cx('footer__heading')}>THEO DÕI CHÚNG TÔI TRÊN</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                <span className={cx('footer-item__icon')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </span>
                                Facebook
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                <span className={cx('footer-item__icon fa-brands fa-instagram')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </span>
                                Instagram
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a href="" className={cx('footer-item__link')}>
                                <span className={cx('footer-item__icon fa-brands fa-linkedin')}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </span>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx('col', 'l-2-4', 'm-8', 'c-12')}>
                    <h3 className={cx('footer__heading')}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
                    <div className={cx('footer__download')}>
                        <img src={images.QA} alt="Download QR" className={cx('footer__download-qr')} />
                        <div className={cx('footer__download-apps')}>
                            <a href="https://play.google.com/store/apps/details?id=com.shopee.vn&hl=vi&gl=US" className={cx('footer__download-app-link')}>
                                <img src={images.google} alt="Google play" className={cx('footer__download-app-img')} />
                            </a>

                            <a href="https://apps.apple.com/vn/app/shopee-mua-s%E1%BA%AFm-online/id959841449" className={cx('footer__download-app-link')}>
                                <img src={images.appStore} alt="App Store" className={cx('footer__download-app-img')} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContent;
