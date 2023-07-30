import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import Footer from '~/components/Layout/components/Footer';

import styles from '~/components/GlobalStyles/GlobalStyles.scss';
const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('app__container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx("row","sm-gutter","app__content")}>{children}</div>
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default HeaderOnly;
