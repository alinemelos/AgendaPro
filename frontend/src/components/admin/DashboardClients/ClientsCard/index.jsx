import { useState } from "react";

import ClientsModal from "../ClientsModal";

import "./clients-card.styles.css";

function ClientsCard({ aluno, plano }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<div className="client-card">
				<div className="client-header">
					<h3>
						{aluno.nome} {aluno.sobrenome}
					</h3>
					<p>{aluno.email}</p>
				</div>
				<div className="client-body">
					<p>
						<strong>Telefone:</strong> {aluno.telefone}
					</p>
					<p>
						<strong>Plano:</strong> {plano ? plano.nome : "Sem plano"}
					</p>
					<p>
						<strong>Início do Plano:</strong> {aluno.inicio_plano}
					</p>
					<p>
						<strong>Cadastro:</strong> {aluno.inicio_cadastro}
					</p>
				</div>
				<div className="client-footer">
					<button type="button" onClick={handleOpenModal}>
						Editar
					</button>
				</div>
			</div>

			<ClientsModal
				aluno={aluno}
				plano={plano}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onEdit={() => alert(`Editar ${aluno.nome}`)}
				onDelete={() => alert(`Deletar ${aluno.nome}`)}
			/>
		</>
	);
}

export default ClientsCard;
