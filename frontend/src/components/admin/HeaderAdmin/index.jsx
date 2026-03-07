import "../HeaderAdmin/header-admin.styles.css";
import { useState } from "react";

function HeaderAdmin() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<header className="topbar">
			<h2>Bem vindo nome !</h2>

			<div className="header-right">
				<div className="search-bar">
					<input type="text" placeholder="Search" />
				</div>

				<label className="switch">
					<input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
					<span className="slider round"></span>
				</label>

				<button className="notification-btn">🔔</button>
			</div>
		</header>
	);
}

export default HeaderAdmin;
