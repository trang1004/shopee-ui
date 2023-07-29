import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('header__cart')}>
            <div className={cx('header__car-wrap')}>
                <span className={cx('header__cart-icon')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span className={cx('header__cart-notice')}>3</span>
                <div className={cx('header__cart-list ')}>
                    <img src={images.NoCart} alt="" className={cx('header__cart-list-no-cart-img')} />
                    <p className={cx('header__cart-list-no-cart-msg')}>Chưa có sản phẩm</p>

                    <h4 className={cx('header__cart-heading')}>Sản phẩm đã thêm</h4>
                    <ul className={cx('header__cart-list-item')}>
                        <li className={cx('header__cart-item')}>
                            <img src={images.Notifi4} alt="" className={cx('header__cart-img')} />
                            <div className={cx('header__cart-item-info')}>
                                <div className={cx('header__cart-item-head')}>
                                    <h5 className={cx('header__cart-item-name')}>
                                        váy basic nhẹ nhàng nữ tính váy basic nhẹ nhàng nữ tính váy basic nhẹ nhàng nữ
                                        tính váy basic nhẹ nhàng nữ tính
                                    </h5>
                                    <div className={cx('header__cart-item-swap')}>
                                        <span className={cx('header__cart-item-price')}>200.000đ</span>
                                        <span className={cx('header__cart-item-multipl')}>x</span>
                                        <span className={cx('header__cart-item-qnt')}>2</span>
                                    </div>
                                </div>

                                <div className={cx('header__cart-item-body')}>
                                    <span className={cx('header__cart-item-description')}>Phân loại: Trăng</span>
                                    <span className={cx('header__cart-item-remove')}>Xoá</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="#" className={cx(' header__cart-view-cart', 'btn', 'btn--primary')}>
                        Xem giỏ hàng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cart;
