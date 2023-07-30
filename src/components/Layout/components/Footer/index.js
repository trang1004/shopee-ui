import classNames from "classnames/bind";
import styles from "~/components/GlobalStyles/GlobalStyles.scss"
import FooterContent from "./FooterContent";
import FooterButton from "./FooterButton";

const cx =classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx("footer")}>
            <FooterContent />
            <FooterButton />
        </div>
    );
}

export default Footer;