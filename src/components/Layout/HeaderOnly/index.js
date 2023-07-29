import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';

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
        </div>
    );
}

export default HeaderOnly;
