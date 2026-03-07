import "../DashboardOrder/dashboard-order.styles.css";

function DashboardOrder() {
	return (
		<div className="box">
			<h3>Lista de agendamentos</h3>
			<div className="box-content">
				<ul>
					<li>Cliente</li>
					<li>Data e horário</li>
					<li>Status</li>
					<li>Observações</li>
				</ul>
				<div className="box-content-btn">
					<button className="btn-confirm">confirmar</button>
					<button className="btn-remark">remarcar</button>
					<button className="btn-cancel">cancelar</button>
				</div>
			</div>
		</div>
	);
}

export default DashboardOrder;
