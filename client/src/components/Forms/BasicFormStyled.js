import styled from 'styled-components'
import { colors, boxShadow, breakpoints } from '../../theme'

const BasicFormStyled = styled.div`
	display: flex;
	height: 80vh;
	align-items: center;

	& .form-card {
		background-color: ${colors.textGray};
		width: 90%;
		height: 50vh;
		margin: 1rem auto;
		padding: 8px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: ${boxShadow.small};
	}

	& #button-signup, & #button-login {
		display: flex;
		justify-content: center;
	}

	@media only screen and (min-width: ${breakpoints.desktop}) {
		width: 900px;
		margin: 2rem auto;

		& .form-card {
			height: 60vh;
		}

		& .form-signup {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 10vh);
			grid-template-areas: "username-input username-input"
			"password-input password-input"
			"password-input-2 password-input-2"
			"signup login";
		}

		& .form-login {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 20vh);
			grid-template-areas: "username-input username-input"
			"password-input password-input"
			"login signup";
		}

		& #username-input {
			grid-area: username-input;
		}

		& #password-input {
			grid-area: password-input;
		}

		& #password-input-2 {
			grid-area: password-input-2;
		}

		& #button-signup {
			grid-area: signup;
		}

		& #button-login {
			grid-area: login;
		}
	}
`

export default BasicFormStyled