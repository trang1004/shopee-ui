import classNames from "classnames/bind";
import styles from "~/components/GlobalStyles/GlobalStyles.scss";
import Filter from "./Filter";
import MobileCatelogi from "./mobileCatelogi";
import Product from "./Product";
import Pagination from "./Pagination";
const cx =classNames.bind(styles);

function Home() {
    return (
        <div className={cx("col","l-10","m-12","c-12")}>
            <Filter />
            <MobileCatelogi />
            <Product />
            <Pagination />
        </div>
    );
}

export default Home;