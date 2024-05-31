import { Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Product from "../pages/Product";
import List from "../pages/List";
import Cadastro from "../pages/Cadastro";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Cadastro />} />
            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoutes role="Admin_Role" />}>
                <Route path="/product" element={<Product />} />
            </Route>
            <Route element={<PrivateRoutes role="Admin_Role,User_Role" />}>
                <Route path="/list" element={<List />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
