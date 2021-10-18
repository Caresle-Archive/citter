import styled from "styled-components"
import InputNormal from "./InputNormal.jsx"
import { colors } from "../../theme.js"

const InputNormalStyled = styled(InputNormal)`
	padding: 8px;
	height: 8vh;
	font-size: 1.25rem;
	border: 1px solid ${colors.textGray};
	border-radius: 4px;
	width: 80%;
	margin: .5rem auto;

	&:focus {
		outline: none;
		border: 1px solid ${colors.primary};
	}
`

export default InputNormalStyled