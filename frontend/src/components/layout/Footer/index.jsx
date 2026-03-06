import "./footer.styles.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-col">
					<h2 className="footer-logo">AgendaPro</h2>
					<p>
						Mais que um treino, uma transformação. Método, disciplina e
						acompanhamento personalizado para quem busca evoluir no físico, na
						saúde e na performance.
					</p>

					<form className="footer-newsletter">
						<input type="email" placeholder="Seu melhor Email" />
						<button type="submit">→</button>
					</form>
				</div>

				<div className="footer-col">
					<h3>Navegação</h3>
					<ul>
						<li>
							<a href="#">Início</a>
						</li>
						<li>
							<a href="#aboutSection">Sobre Nós</a>
						</li>
						<li>
							<a href="#ProgramSection">Programas</a>
						</li>
						<li>
							<a href="#TeamSection">Nossa Equipe</a>
						</li>
						<li>
							<a href="#pricing">Planos</a>
						</li>
						<li>
							<a href="#TestimonialsSection">Depoimentos</a>
						</li>
						<li>
							<a href="/booking">Agendar Horário</a>
						</li>
					</ul>
				</div>

				<div className="footer-col">
					<h3>Nossos Serviços</h3>
					<ul>
						<li>
							<a href="#ProgramSection">Cardio</a>
						</li>
						<li>
							<a href="#ProgramSection">PowerLift</a>
						</li>
						<li>
							<a href="#ProgramSection">Calistenia</a>
						</li>
						<li>
							<a href="#ProgramSection">Musculação</a>
						</li>
						<li>
							<a href="#ProgramSection">Yoga</a>
						</li>
						<li>
							<a href="#ProgramSection">Pilates</a>
						</li>
					</ul>
				</div>

				<div className="footer-col">
					<h3>Contato</h3>
					<p>Seg - Dom: 9h às 20h</p>
					<hr />
					<p>+55 (83) 99999-9999</p>
					<p>Campina Grande - PB</p>
				</div>
			</div>

			<div className="footer-span">
				<span>
					© 2026 AgendaPro. Todos os direitos reservados. <br /> Desenvolvido
					por João Emanuel.
				</span>
			</div>
		</footer>
	);
}

export default Footer;
