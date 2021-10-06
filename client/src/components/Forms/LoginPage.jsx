import BtnPrimarySmall from "../Buttons/BtnPrimarySmall"
import InputNormal from "../Input/InputNormal"
import './Form.css'

const LoginPage = () => {
	return (
		<div className="form-container">
			<form className="form-card">
				<InputNormal
					type="text"
					placeholder="Username" 
					id="username-input"
					name="usernameInput"
					/>
				<InputNormal
					type="password"
					placeholder="Password"
					id="password-input"
					name="passwordInput"
					/>
				<BtnPrimarySmall boxShadow={true} text="Login" type={"submit"} />
			</form>
		</div>
	)
}

export default LoginPage