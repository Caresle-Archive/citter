import InputNormalStyled from '../Input/InputNormalStyled'
import BtnStyled from '../Buttons/BtnStyled'
import BasicFormStyled from './BasicFormStyled'

const SignUp = ({ changePage, onSubmit }) => {
	return (
		<BasicFormStyled>
			<form className="form-card form-signup" onSubmit={onSubmit}>
				<InputNormalStyled
					type="text"
					placeholder="Username" 
					id="username-input"
					name="usernameInput"
				/>
				<InputNormalStyled
					type="password"
					placeholder="Password"
					id="password-input"
					name="passwordInput"
				/>
				<InputNormalStyled
					type="password"
					placeholder="Repeat password"
					id="password-input-2"
					name="passwordInput2"
				/>
				<div id="button-signup">
					<BtnStyled btnForm boxShadow
						text="Sign up" type="submit"
					/>
				</div>
				<div id="button-login">
					<BtnStyled btnForm boxShadow outline
						text="login" type="button"
						click={changePage("login")}
					/>
				</div>
			</form>
		</BasicFormStyled>
	)
}

export default SignUp