import React from "react";
import PermissionComponent from "../../components/PermissionComponent";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <PermissionComponent role="Admin_Role">
                    <li>
                        <a href="/product">Cadastro de produto</a>
                    </li>
                </PermissionComponent>
                <li>
                    <a href="/list">Listagem de produto</a>
                </li>
            </ul>
        </div>
    );
;}

export default Dashboard;