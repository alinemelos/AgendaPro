import { useState } from "react";

import TrainingModal from "../TrainingModal/index";

import "./training-card.styles.css";

function TrainingCard({ treino }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<div key={treino.id} className={`training-card card-${treino.categoria}`}>
				<h3>{treino.nome}</h3>
				<p>{treino.descricao}</p>
				<p>Duração: {treino.duracao} min</p>
				<div className="training-footer">
					<button type="button" onClick={handleOpenModal}>
						Editar
					</button>
				</div>
			</div>

			<TrainingModal
				treino={treino}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onEdit={() => alert(`Editar ${treino.descricao}`)}
				onDelete={() => alert(`Deletar ${treino.nome}`)}
			/>
		</>
	);
}

export default TrainingCard;
