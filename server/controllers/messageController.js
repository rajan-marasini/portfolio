import { prisma } from "../config/prismaConfig.js";

export const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const userMessage = await prisma.message.create({
            data: {
                name,
                email,
                message,
            },
        });

        res.status(201).send({
            success: true,
            message: "Message sent successfully",
            userMessage,
        });
    } catch (error) {
        console.log(error.message);
        res.status({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};

export const allMessage = async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
            orderBy: {
                createdAt: "asc",
            },
        });
        res.send({ messages });
    } catch (error) {
        console.log(error.message);
        res.status(404).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.message.delete({ where: { id } });

        res.status(200).send({
            success: true,
            message: "Successfully deleted",
        });
    } catch (error) {
        console.log(error.message);
        res.status(404).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};
