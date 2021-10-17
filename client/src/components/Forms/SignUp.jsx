import InputNormal from '../Input/InputNormal'
import BtnStyled from '../Buttons/BtnStyled'
import './Form.css'

const SignUp = ({ changePage, onSubmit }) => {
	return (
		<div className="form-container">
			<form className="form-card" onSubmit={onSubmit}>
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
				<InputNormal
					type="password"
					placeholder="Repeat password"
					id="password-input-2"
					name="passwordInput2"
				/>

				<BtnStyled btnForm boxShadow
					text="Sign up" type="submit"
				/>
				<BtnStyled btnForm boxShadow outline
					text="login" type="button"
					click={changePage("login")}
				/>
			</form>
		</div>
	)
}

export default SignUp