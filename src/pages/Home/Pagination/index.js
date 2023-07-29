import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <ul className={cx("pagination","home-product--pagition")}>
            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    <span className={cx("pagination-item__icon")}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                </a>
            </li>

            <li className={cx("pagination-item","pagination-item--active")}>
                <a href="" className={cx("pagination-item__link")}>
                    1
                </a>
            </li>

            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    2
                </a>
            </li>

            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    3
                </a>
            </li>
            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    4
                </a>
            </li>
            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    5
                </a>
            </li>

            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link ")}>
                    ...
                </a>
            </li>

            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link ")}>
                    14
                </a>
            </li>

            <li className={cx("pagination-item")}>
                <a href="" className={cx("pagination-item__link")}>
                    <span className={cx("pagination-item__icon")}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;
