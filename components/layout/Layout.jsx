import Navbar from "./Navigation";
import Footer from './footer';

const Layout = (props) => {
    return (
        <div className="bg-white dark:bg-black transition-all ">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
