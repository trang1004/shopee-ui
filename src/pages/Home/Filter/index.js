import classNames from "classnames/bind";
import styles from "~/components/GlobalStyles/GlobalStyles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx =classNames.bind(styles);

function Filter() {
    return ( 
        <div className={cx("home_filter", "hide-on-mobile-tablet")}>
                            <span className={cx("home-filter__label")}>Sắp xếp theo</span>
                            <button className={cx("btn", "home-filter__btn")}>Phổ biến</button>
                            <button className={cx("btn", "home-filter__btn", "btn--primary")}>Mới nhất</button>
                            <button className={cx("btn", "home-filter__btn")}>Bán chạy</button>

                            <div className={cx("select-input")}>
                                <span className={cx("select-input__lable")}>Giá</span>
                                <span className={cx("select-input__icon ")}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                <ul className={cx("select-input-list")}>
                                    <li className={cx("select-input-item")}>
                                        <a href="" className={cx("select-input__link")}>Giá: Thấp đến cao</a>
                                        
                                    </li>
                                    <li className={cx("select-input-item")}>
                                        <a href="" className={cx("select-input__link")}>Giá: Cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx("home-filter__page")}>
                                <span className={cx("home-filter__page-num")}>
                                    <span className={cx("home-filter__page-current")}>1</span>/14
                                    
                                </span>
                                
                                <div className={cx("home-filter_page-control")}>
                                    <a href="" className={cx("home-filter_page-btn", "home-filter_page-btn-disable")}>
                                        <span className={cx("home-filter_page--icon")}>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </span>
                                    </a>
                                    <a href="" className={cx("home-filter_page-btn")}>
                                        <span className={cx("home-filter_page--icon ")}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </span>
                                    </a>
                                </div>
                            </div>


        </div>
    );
}

export default Filter;