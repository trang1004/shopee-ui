import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles/GlobalStyles.scss';

const cx = classNames.bind(styles);
function FooterButton() {
    return (
        <div className="footer-button">
            <div className="grid wide">
                <p className="footer__license">© 2013 - Bản quyền thuộc về Công ty TNHH Shopii</p>
            </div>
        </div>
    );
}

export default FooterButton;
