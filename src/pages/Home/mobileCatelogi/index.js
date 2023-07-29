import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';
const cx = classNames.bind(styles);
function MobileCatelogi() {
    return (
        <nav className="mobile-catelogy">
            <ul className="mobile-catelogy__list">
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Áo sơ mi & chân váy{' '}
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Mĩ Phẩm đồ $ dưỡng thể{' '}
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Túi xách & balo thể thao
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Váy áo & đầm dự tiệc{' '}
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Phụ kiện thắt lưng
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Đồng hồ
                    </a>
                </li>
                <li className="mobile-catelogy__item">
                    <a href="" className="mobile-catelogy__link">
                        Áo phông unisex phong cách hàn Quốc
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MobileCatelogi;
