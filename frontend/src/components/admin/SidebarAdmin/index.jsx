import { useNavigate } from "react-router-dom";
import "../SidebarAdmin/sidebar-admin.styles.css";

function SidebarAdmin() {
	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem("auth");
		localStorage.removeItem("token");
		navigate("/login");
	}
	return (
		<aside className="sidebar">
			<div className="profile-section">
				<div className="profile-img"></div>
				<h3>Nirmal Kumar P</h3>
				<span>nirmal001@gmail.com</span>
			</div>

			<nav className="menu">
				<ul>
					<li className="active">Dashboard</li>
					<li>Inventory</li>
					<li>Orders</li>
					<li>Purchase</li>
					<li>Reporting</li>
					<li>Support</li>
					<li>Settings</li>
				</ul>
			</nav>

			<button className="logout-btn" onClick={handleLogout}>
				Logout
			</button>
		</aside>
	);
}

export default SidebarAdmin;
