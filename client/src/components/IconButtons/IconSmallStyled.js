import styled from "styled-components"
import { colors } from "../../theme"
import IconSmall from "./IconSmall.jsx"

const IconSmallStyled = styled(IconSmall)`
	background-color: ${colors.background};
	color: ${colors.textColor};
	border: none;
	cursor: pointer;
	padding: 8px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${colors.backgroundDark};
		border-radius: 50%;
	}

	& > svg {
		width: 20px;
		height: 20px;
	}
`

export default IconSmallStyled