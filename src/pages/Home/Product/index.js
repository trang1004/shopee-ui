import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className="home-product">
            <div className={cx('row', 'sm-gutter')}>
                <div className={cx('col', 'l-2-4', 'm-4', 'c-6')}>
                    <a className="home-product-item" href="#">
                        <div
                            className="home-product-item__img"
                            style={{
                                backgroundImage: `url(https://salt.tikicdn.com/ts/product/4b/9f/7f/a462e1bd28f8e84d8140bc26c3e42b16.jpg)`,
                            }}
                        ></div>

                        <h4 className="home-product-item__name">
                            Váy body 2 dây sợi bún, đầm ôm body siêu tôn dáng sexy, vải co giãn, mặc đi chơi, dự tiệc
                            siêu xinh
                        </h4>
                        <div className="home-product-item__price">
                            <span className="home-product-item__prive-old">1.200.000đ</span>
                            <span className="home-product-item__prive-current">960.000đ</span>
                        </div>
                        <div className="home-product-item__action">
                            <span className={cx('home-product-item__like', 'home-product-item__liked')}>
                                <span className="home-product-item__like-icon">
                                    <FontAwesomeIcon icon={farHeart} />
                                </span>
                                <span className="home-product-item__liked-icon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </span>

                            <div className="home-product-item__rating">
                                <span className="home-product-item__star-gold" style={{ color: '#c5c8cd' }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="home-product-item__star-gold" style={{ color: '#c5c8cd' }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="home-product-item__star-gold" style={{ color: '#c5c8cd' }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="home-product-item__star-gold" style={{ color: '#c5c8cd' }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="home-product-item__star-gold" style={{ color: '#c5c8cd' }}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <span className="home-product-item__sold">88 đã bán</span>
                        </div>

                        <div className="home-product-item__origin">
                            <span className="home-product-item__brand">hanna</span>
                            <span className="home-product-item__origin-name">Việt Nam</span>
                        </div>

                        <div className="home-product-item__favourite">
                            <span className="fa-sharp fa-solid fa-check">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>Yêu thích</span>
                        </div>

                        <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-precent">20%</span>
                            <span className="home-product-item__sale-off-lable">GIẢM</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Product;
