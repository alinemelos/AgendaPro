import { useState } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

import "./login-section.styles.css";

function LoginSection() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="login-container">
			<div className="login-box">
				{isLogin ? (
					<LoginForm toggle={() => setIsLogin(false)} />
				) : (
					<RegisterForm toggle={() => setIsLogin(true)} />
				)}
			</div>
		</div>
	);
}

export default LoginSection;
