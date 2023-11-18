import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (id) => {
        setIsLoading(true);
        try {
            const { data } = await axios.post(`/api/v1/message/delete/${id}`);

            if (data.success) {
                toast.success(data.message);
                setMessages((prev) =>
                    prev.filter((message) => message.id != id)
                );
            } else {
                toast.error("Failed to delete message");
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const { data } = await axios.get("/api/v1/message/all-message");

                setMessages(data.messages);
            } catch (error) {
                console.log(error.mesage);
            }
        };

        getAllMessages();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mt-8">Messages</h1>

            {messages?.length && (
                <>
                    <table className="w-full bg-gray-500 text-center mt-4 h-full">
                        <thead className="border-b-2 border-white">
                            <tr className="">
                                <th>SN</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {messages.map((message, i) => (
                                <tr
                                    key={message.id}
                                    className="border-b border-b-gray-600"
                                >
                                    <td className="">{i + 1}</td>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.message}</td>
                                    <td
                                        className="py-4"
                                        onClick={() => handleDelete(message.id)}
                                    >
                                        <button
                                            className="bg-red-600 font-medium px-4 py-2 rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                            disabled={isLoading}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Message;
