import classNames from 'classnames/bind';
import styles from './Help.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';


const cx =classNames.bind(styles)
function Help() {
    return (
        <li className={cx("header__navbar-item")}> 
            <a href="https://help.shopee.vn/portal" className={cx("header__navbar-item-link")}>
                <span className={cx("header__navbar-icon")}>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </span>
                Trợ giúp
            </a>
        </li>
    );
}

export default Help;
