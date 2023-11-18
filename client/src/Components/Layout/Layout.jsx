import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#151a1c] to-[#292e31] text-white">
            <div className="max-w-7xl mx-auto p-4 min-h-screen flex flex-col">
                <div className="flex-1">
                    <Header />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
