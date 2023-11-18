import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaConfig.js";
import { comparePassword } from "../utils/hashPassword.js";

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (user) {
            const passwordMatch = await comparePassword(
                password,
                user.password
            );

            if (passwordMatch) {
                const token = await jwt.sign(
                    { id: user.id },
                    process.env.JWT_SECRET,
                    { expiresIn: "7d" }
                );

                delete user.password;

                res.status(200)
                    .cookie("token", token, {
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                    })
                    .send({
                        success: true,
                        message: "Login successful",
                        user,
                    });
            } else {
                res.status({
                    success: false,
                    message: "Invalid credentials",
                });
            }
        } else {
            res.status(200).send({
                success: false,
                message: "User doesn't exist",
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(404).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};

export const getProfile = async (req, res) => {
    try {
        const { user } = req;
        res.send({ user });
    } catch (error) {
        console.log(error.message);
        res.send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};

export const userLogout = async (req, res) => {
    try {
        req.user = null;

        res.status(200).cookie("token", "").send({
            success: true,
            message: "Logout Successfully",
            user: null,
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
