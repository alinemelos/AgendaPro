import { useState, useRef, useEffect } from "react";
import "./notification-button.styles.css";

function NotificationButton({ notifications = [] }) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="notification-wrapper" ref={ref}>
			<button
				className="notification-btn"
				onClick={() => setOpen((prev) => !prev)}
			>
				🔔
				{notifications.length > 0 && (
					<span className="notification-badge">{notifications.length}</span>
				)}
			</button>

			{open && (
				<div className="notification-panel">
					<ul>
						{notifications.length > 0 ? (
							notifications.map((n, i) => <li key={i}>{n}</li>)
						) : (
							<li>Sem notificações</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}

export default NotificationButton;
