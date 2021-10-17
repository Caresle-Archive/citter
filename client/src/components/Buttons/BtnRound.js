import styled from "styled-components"
import { colors, boxShadow } from "../../theme"
import BtnCittear from "./BtnCittear.jsx"

const BtnRound = styled(BtnCittear)`
	display: flex;
	width: 100%;
	justify-content: flex-end;

	& > button:hover {
		filter: brightness(150%);
		box-shadow: ${props => props.boxShadow ? boxShadow.roundButton : 'none'};
	}

	& > button  {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background-color: ${colors.primary};
		border: 1px solid ${colors.primary};
		color: ${colors.white};
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 12vh;
		margin-right: 4px;
		cursor: pointer;
	}
`

export default BtnRound