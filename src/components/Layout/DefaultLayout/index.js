import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('app__container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row' ,'sm-gutter', 'app__content')}>
                        <SideBar />
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
