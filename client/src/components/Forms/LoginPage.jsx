import BtnStyled from "../Buttons/BtnStyled"
import InputNormal from "../Input/InputNormal"
import './Form.css'

const LoginPage = ({ handleSubmit, handleOnChange, changePage }) => {
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
				<BtnStyled btnForm boxShadow 
					text="Login" type="submit"
				/>
				<BtnStyled btnForm boxShadow outline
					text="Signup" type="button"
					click={changePage("signup")}
				/>
			</form>
		</div>
	)
}

export default LoginPage