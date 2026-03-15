import { useState } from "react";

import SidebarAdmin from "../../components/admin/SidebarAdmin";
import DashboardAdmin from "../../components/admin/DashboardAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin/index";

import "../Admin/admin.styles.css";

function Admin() {
	const [section, setSection] = useState("dashboard");
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="admin-wrapper">
			<SidebarAdmin
				section={section}
				setSection={setSection}
				open={sidebarOpen}
				setOpen={setSidebarOpen}
			/>

			<div className="admin-main">
				<HeaderAdmin setSidebarOpen={setSidebarOpen} />

				<DashboardAdmin section={section} />
			</div>
		</div>
	);
}

export default Admin;
