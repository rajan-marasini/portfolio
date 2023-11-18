import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AdminLogin from "./Pages/AdminLogin";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import NotFound from "./Pages/NotFound";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/auth" element={<Auth />}>
                        <Route
                            path="messageonlyfortheadmin"
                            element={<Message />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
