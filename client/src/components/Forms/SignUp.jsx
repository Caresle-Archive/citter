import InputNormal from '../Input/InputNormal'
import BtnPrimarySmall from '../Buttons/BtnPrimarySmall'
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
				<BtnPrimarySmall boxShadow={true} text="Sign up" type={"submit"} />
				{/* <BtnPrimarySmall
					outline={true}
					boxShadow={true}
					text="Login"
					type="button"
				/> */}
				<button 
					onClick={changePage("login")}
					type="button"
					className="btn-primary-out-small btn-form btn-box-shadow"
				>
					login
				</button>
			</form>
		</div>
	)
}

export default SignUp