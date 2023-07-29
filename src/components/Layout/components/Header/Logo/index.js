import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('header__logo', 'hide-on-tablet')}>
            <a href="#" className={cx('header__logo-link')}>
                <div className={cx('header__logo-img')}>
                    <img src={images.logo} alt="Shopee-logo" />
                </div>
            </a>
        </div>
    );
}

export default Logo;
