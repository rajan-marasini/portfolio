import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (!name || !email || !message) {
                toast.error("Please fill all the inputs");
                return;
            }

            const { data } = await axios.post("/api/v1/message/create", {
                name,
                email,
                message,
            });

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error("Couldn't send message. Try again later");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div
            id="contact"
            className="mt-8
            w-full
        "
        >
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <form className="mx-auto max-w-lg ">
                <div className="flex flex-col my-3">
                    <label className="text-sm font-medium" htmlFor="name">
                        Full Name:
                    </label>
                    <input
                        className=" flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col my-3">
                    <label className="text-sm font-medium" htmlFor="name">
                        Email
                    </label>
                    <input
                        className=" flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col my-3">
                    <label className="text-sm font-medium" htmlFor="name">
                        Enter Your message
                    </label>
                    <textarea
                        className=" flex h-[150px] w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                        placeholder="Enter your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="bg-primary w-full py-2 px-4 rounded-full font-semibold hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300 ease-in disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    Submit Your Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
