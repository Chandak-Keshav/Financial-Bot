import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import ChartComponent from "../chart/ChartComponent";
import Buy from "../BuySell/Buy";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <ChartComponent />
        <Buy />
        <Outlet />
    </div>;
};

export default AppLayout;
