import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Rajan Marasini.", "Software Engineer.", "Web Developer."],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 50,
    });

    return (
        <div className="flex min-h-screen flex-col md:flex-row items-center relative ">
            {/* left */}
            <motion.div
                className="flex-[1.25] relative overflow-hidden"
                initial={{ right: "300px", opacity: 0 }}
                whileInView={{ left: "0px", opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div className="pt-20 md:pt-12">
                    <h3 className="text-lg font-medium">Hi, There!</h3>
                    <h1 className="text-4xl sm:text-5xl font-bold  mb-4">
                        I Am <br />
                        <div className="text-primary whitespace-nowrap h-16 w-full">
                            <span>{text}</span>
                            <Cursor cursorColor="white" />
                        </div>
                    </h1>
                    <p className="text-white">
                        Hi, I'm{" "}
                        <span className="font-semibold">Rajan Marasini</span>, a
                        passionate self-taught programmer from Kathmandu, Nepal,
                        currently exploring the world of web development.
                        Enthusiastic about continuous learning, I bring
                        proficiency in the MERN stack and a dedication to
                        staying ahead in the ever-evolving tech landscape.
                    </p>
                    <div className="logo flex gap-4 my-4">
                        <a
                            className="
                            bg-gray-500
                            hover:bg-primary
                            transition-all
                            duration-300
                            ease-in
                            p-3
                            cursor-pointer
                            rounded-full
                        "
                            href="https://m.facebook.com/rajan.marasini.58"
                            target="_blank"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            className="
                            bg-gray-500
                            hover:bg-primary
                            transition-all
                            duration-300
                            ease-in
                            p-3
                            cursor-pointer
                            rounded-full
                        "
                            href="https://github.com/rajan-marasini"
                            target="_blank"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            className="
                            bg-gray-500
                            hover:bg-primary
                            transition-all
                            duration-300
                            ease-in
                            p-3
                            cursor-pointer
                            rounded-full
                        "
                            href="https://www.linkedin.com/in/rajan-marasini-824068262/"
                            target="_blank"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <span
                            className="
                            bg-gray-500
                            hover:bg-primary
                            transition-all
                            duration-300
                            ease-in
                            p-3
                            cursor-pointer
                            rounded-full
                        "
                        >
                            <FaXTwitter size={20} />
                        </span>
                    </div>

                    <div className="more">
                        <a href="#contact">
                            <button className="bg-primary px-10 py-2 rounded-full hover:bg-transparent hover:text-primary border-2 border-transparent font-semibold text-xl hover:border-primary transition-all duration-300 ease-in mt-10">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* right */}
            <motion.div
                className="flex-1 p-8 relative"
                initial={{ opacity: 0, bottom: "200px" }}
                whileInView={{ opacity: 1, bottom: "0px" }}
                transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <img
                    src="/hero.jpg"
                    alt=""
                    className="
                    rounded-full
                "
                />
            </motion.div>
        </div>
    );
};

export default Hero;
