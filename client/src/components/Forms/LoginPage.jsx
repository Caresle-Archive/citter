import BtnStyled from "../Buttons/BtnStyled"
import InputNormalStyled from "../Input/InputNormalStyled.js"
import BasicFormStyled from "./BasicFormStyled"

const LoginPage = ({ handleSubmit, handleOnChange, changePage }) => {
	return (
		<BasicFormStyled>
			<form className="form-card form-login" onSubmit={handleSubmit}>
				<InputNormalStyled
					type="text"
					placeholder="Username" 
					id="username-input"
					name="usernameInput"
					onChange={({target}) => handleOnChange('username', target.value)}
					/>
				<InputNormalStyled
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
		</BasicFormStyled>
	)
}

export default LoginPage