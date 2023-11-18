import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center sticky bottom-0 p-4">
            <p>
                All{" "}
                <Link className="cursor-default" to={"/adminlogin"}>
                    right
                </Link>{" "}
                reserve &copy; Rajan Marasini
            </p>
        </div>
    );
};

export default Footer;
