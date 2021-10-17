import styled from "styled-components"
import { colors } from "../../../theme"
import BottomBar from "./BottomBar.jsx"

const BottomBarStyled = styled(BottomBar)`
	background-color: ${colors.backgroundDark};
	height: 10vh;
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	& > ul {
		list-style: none;
		display: grid;
		margin-right: 2rem;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 3rem;
	}

	& > ul > li {
		cursor: pointer;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
	}

	& > ul > li:hover {
		background-color: ${colors.hoverColor};
		border-radius: 50%;
		color: ${colors.primary};
		filter: brightness(140%);
	}
`

export default BottomBarStyled