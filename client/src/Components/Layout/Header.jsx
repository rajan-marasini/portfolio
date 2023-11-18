import axios from "axios";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../Context/userContext";

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogout = async () => {
        try {
            const { data } = await axios.post("/api/v1/user/logout");
            if (data.success) {
                toast.success(data.message);
                setUser(data.user);
                navigate("/");
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div
            className="flex justify-between font-bold text-xl items-center"
            id="home"
        >
            <div className="h-10 w-10">
                <Link to={"/"}>
                    <img
                        src="/favicon.jpg"
                        alt=""
                        className="rounded-full w-full h-full object-cover"
                    />
                </Link>
            </div>
            <div className="gap-6 items-center hidden md:flex">
                <Link to="/">
                    <span className="hover:text-primary cursor-pointer transition-all duration-300 ease-in">
                        Home
                    </span>
                </Link>
                <a href="#about">
                    <span className="hover:text-primary cursor-pointer transition-all duration-300 ease-in">
                        About
                    </span>
                </a>

                <a href="#projects">
                    <span className="hover:text-primary cursor-pointer">
                        Projects
                    </span>
                </a>

                {user?.name && (
                    <>
                        <Link to={"/auth/messageonlyfortheadmin"}>
                            <span className="hover:text-primary cursor-pointer">
                                Messages
                            </span>
                        </Link>

                        <Link>
                            <span
                                className="hover:text-primary cursor-pointer"
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                        </Link>
                    </>
                )}

                <a href="#contact">
                    <span className="hover:bg-primary px-8 py-2 rounded-full text-primary hover:text-white border-2 border-primary hover:border-white cursor-pointer transition-all duration-300 ease-in">
                        Contact
                    </span>
                </a>
            </div>

            <div className="block md:hidden">
                <div
                    className="cursor-pointer px-4"
                    onClick={() => setShowSidebar((prev) => !prev)}
                >
                    {showSidebar ? (
                        <FaBars size={24} />
                    ) : (
                        <IoCloseSharp size={30} />
                    )}
                </div>

                <div
                    className={` ${
                        !showSidebar ? "translate-x-0" : "-translate-x-[999px]"
                    } fixed inset-0 top-20  z-10 w-screen h-full flex flex-col gap-8 bg-[#272c2f] text-right pr-10 transition-all duration-300 ease-in`}
                >
                    <a
                        className="w-full"
                        onClick={() => setShowSidebar((prev) => !prev)}
                        href="#home"
                    >
                        <span>Home</span>
                    </a>
                    <a
                        className="w-full"
                        onClick={() => setShowSidebar((prev) => !prev)}
                        href="#about"
                    >
                        <span>About</span>
                    </a>
                    <a
                        className="w-full"
                        onClick={() => setShowSidebar((prev) => !prev)}
                        href="#projects"
                    >
                        <span>Projects</span>
                    </a>

                    {user?.name && (
                        <>
                            <Link
                                className="w-full"
                                to={"/auth/messageonlyfortheadmin"}
                                onClick={() => setShowSidebar((prev) => !prev)}
                            >
                                <span className="">Messages</span>
                            </Link>

                            <Link
                                className="w-full"
                                onClick={() => setShowSidebar((prev) => !prev)}
                            >
                                <div className="w-full" onClick={handleLogout}>
                                    Logout
                                </div>
                            </Link>
                        </>
                    )}

                    <a
                        className="w-full"
                        onClick={() => setShowSidebar((prev) => !prev)}
                        href="#contact"
                    >
                        <span className="hover:bg-primary px-8 py-2 rounded-full text-primary hover:text-white border-2 border-primary hover:border-white cursor-pointer transition-all duration-300 ease-in">
                            Contact
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
