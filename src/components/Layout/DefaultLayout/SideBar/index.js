import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="catelogy__header">
                    <span className="catelogy__header-icon">
                        <FontAwesomeIcon icon={faListUl} />
                    </span>
                    Danh mục
                </h3>

                <ul className="catelogy-list">
                    <li className="catelogy-item catelogy-item__active">
                        <a href="#" className="catelogy-item__link ">
                            Váy body cuốn chiếu
                        </a>
                    </li>

                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Chân váy đuôi cá
                        </a>
                    </li>

                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Váy basix duy nhất{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Đầm dự tiệc{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Váy dáng xoè cổ bèo
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Đầm công chúa{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Đầm đuôi cá{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Chân váy xếp ly{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Chân váy tầng{' '}
                        </a>
                    </li>
                    <li className="catelogy-item">
                        <a href="#" className="catelogy-item__link">
                            Chân váy chữ A{' '}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
