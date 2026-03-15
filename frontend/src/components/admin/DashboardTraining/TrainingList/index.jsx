import TrainingCard from "../TrainingCard";
import "./training-list.styles.css";

function TrainingList({ treinos }) {
	return (
		<div className="training-container">
			<div className="training-cards">
				{treinos.map((treino) => (
					<TrainingCard treino={treino} />
				))}
			</div>
		</div>
	);
}

export default TrainingList;
