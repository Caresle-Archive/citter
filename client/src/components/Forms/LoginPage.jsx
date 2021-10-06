import BtnPrimarySmall from "../Buttons/BtnPrimarySmall"
import InputNormal from "../Input/InputNormal"

const LoginPage = () => {
	return (
		<form>
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
			<BtnPrimarySmall text="Login" type={"submit"} />
		</form>
	)
}

export default LoginPage