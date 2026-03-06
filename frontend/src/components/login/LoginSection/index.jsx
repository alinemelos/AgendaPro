import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../../services/authService";

import "./login-section.styles.css";

function LoginSection() {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setLoading(true);

		if (!email || !senha) {
			setError("Preencha todos os campos.");
			return;
		}

		try {
			let data;

			if (isLogin) {
				data = await login(email, senha);

				localStorage.setItem("token", data.token);
				localStorage.setItem("auth", "true");

				navigate("/admin");
			} else {
				await register(email, senha);
				setIsLogin(true);
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="login-container">
			<div className="login-box">
				<h2>{isLogin ? "Login Admin" : "Cadastro Admin"}</h2>

				{error && <p className="login-error">{error}</p>}

				<form onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Senha"
						value={senha}
						onChange={(e) => setSenha(e.target.value)}
					/>

					<button type="submit" disabled={loading}>
						{loading ? "Carregando..." : isLogin ? "Entrar" : "Cadastrar"}
					</button>
				</form>

				<p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
					{isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
				</p>
			</div>
		</div>
	);
}

export default LoginSection;
