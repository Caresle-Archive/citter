import InputNormal from '../Input/InputNormal'
import BtnPrimarySmall from '../Buttons/BtnPrimarySmall'
import './Form.css'

const SignUp = () => {
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
				<InputNormal
					type="password"
					placeholder="Repeat password"
					id="password-input-2"
					name="passwordInput2"
				/>
				<BtnPrimarySmall boxShadow={true} text="Sign up" type={"submit"} />
			</form>
		</div>
	)
}

export default SignUp