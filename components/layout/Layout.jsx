import Navbar from "./Navigation";
import Footer from './footer';

const Layout = (props) => {
    return (
        <div className="bg-white dark:bg-black transition-all min-h-[90vh]">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
