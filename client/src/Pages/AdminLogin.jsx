import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../Context/userContext";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill all the input");
            return;
        }
        try {
            setLoading(true);
            const { data } = await axios.post("/api/v1/user/login", {
                email,
                password,
            });
            if (data.success) {
                setUser(data.user);
                toast.success(data.message);
                navigate("/");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" w-full">
            <div className="w-full max-w-lg mx-auto mt-32">
                <h1 className="text-center font-bold text-3xl">Login</h1>
                <form>
                    <div className="flex flex-col my-3">
                        <label className="text-base font-medium" htmlFor="name">
                            Email:
                        </label>
                        <input
                            className=" flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="text-base font-medium" htmlFor="name">
                            Password:
                        </label>
                        <input
                            className=" flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="bg-primary w-full py-2 px-4 rounded-full font-semibold hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300 ease-in disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={loading}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
