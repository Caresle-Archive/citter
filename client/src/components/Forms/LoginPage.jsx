import BtnPrimarySmall from "../Buttons/BtnPrimarySmall"
import InputNormal from "../Input/InputNormal"
import './Form.css'

const LoginPage = ({ handleSubmit, handleOnChange }) => {
	return (
		<div className="form-container">
			<form className="form-card" onSubmit={handleSubmit}>
				<InputNormal
					type="text"
					placeholder="Username" 
					id="username-input"
					name="usernameInput"
					onChange={({target}) => handleOnChange('username', target.value)}
					/>
				<InputNormal
					type="password"
					placeholder="Password"
					id="password-input"
					name="passwordInput"
					onChange={({target}) => handleOnChange('password', target.value)}
					/>
				<BtnPrimarySmall boxShadow={true} text="Login" type={"submit"} />
			</form>
		</div>
	)
}

export default LoginPage