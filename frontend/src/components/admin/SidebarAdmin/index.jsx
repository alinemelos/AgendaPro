import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../SidebarAdmin/sidebar-admin.styles.css";

function SidebarAdmin() {
	const [user] = useState(() => {
		const storedUser = localStorage.getItem("user");

		if (!storedUser || storedUser === "undefined") {
			return null;
		}

		return JSON.parse(storedUser);
	});

	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem("auth");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	}
	return (
		<aside className="sidebar">
			<div className="profile-section">
				<div className="profile-img"></div>
				<h3>{user?.nome}</h3>
				<span>{user?.email}</span>
			</div>

			<nav className="sidebar-menu">
				<ul>
					<li className="active">Dashboard</li>
					<li>Clientes</li>
					<li>Treinos</li>
					<li>Agenda</li>
					<li>Pagamentos</li>
					<li>Relatórios</li>
					<li>Configurações</li>
				</ul>
			</nav>

			<button className="logout-btn" onClick={handleLogout}>
				Logout
			</button>
		</aside>
	);
}

export default SidebarAdmin;
