import { motion } from "framer-motion";
import React from "react";

const About = () => {
    return (
        <div id="about" className="overflow-hidden">
            <h1 className="font-bold text-3xl">About Me</h1>
            <div
                className="
                flex
                flex-col
                md:flex-row
                mt-4
            "
            >
                <motion.div
                    className="flex-1 p-8 relative"
                    initial={{ opacity: 0, bottom: "100px" }}
                    whileInView={{ opacity: 1, bottom: "0px" }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        bounce: 1,
                    }}
                >
                    <img src="/heroimage.jpg" alt="" className="rounded-full" />
                </motion.div>
                <motion.div
                    className="flex-1 p-4 flex items-center justify-center relative"
                    initial={{ opacity: 0, left: "200px" }}
                    whileInView={{ opacity: 1, left: "0px" }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        bounce: 1,
                    }}
                >
                    <p
                        className="
                        text-lg
                    "
                    >
                        Hello! I'm{" "}
                        <span className="text-primary font-bold text-xl">
                            Rajan Marasini
                        </span>
                        , currently based in Kathmandu, Nepal, and pursuing a
                        Bachelor's degree in Software Engineering. As a
                        self-learned programmer, I specialize in the MERN stack
                        and programming languages like C and C++. I am on the
                        lookout for an internship to further hone my skills and
                        contribute to real-world projects. My journey into the
                        world of programming is driven by an insatiable
                        curiosity and a genuine passion for exploring the
                        ever-evolving technology landscape. I stay updated on
                        industry trends through active engagement in social
                        media, ensuring that I am well-versed in the current
                        affairs of the tech world. While I may be a beginner, my
                        motivation to achieve more and explore the vast realm of
                        programming keeps me dedicated to continuous learning. I
                        approach problem-solving by leveraging the vast
                        resources available on the internet and by reading
                        official documentation. In addition to my technical
                        pursuits, I have a love for literature, often found
                        engrossed in books, and I enjoy the immersive experience
                        of movies. Beyond academics, I am actively exploring the
                        field of web development and am eager to contribute my
                        skills to meaningful projects. Thank you for visiting my
                        portfolio, and I look forward to the exciting
                        opportunities that lie ahead in my journey as a software
                        engineer.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
