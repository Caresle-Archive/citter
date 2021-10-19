import styled from "styled-components"
import { colors, breakpoints } from "../../../theme"
import TopBar from "./TopBar.jsx"

const TopBarStyled = styled(TopBar)`
	background-color: ${colors.backgroundDark};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 10vh;

	& > img {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-left: 1rem;
		cursor: pointer;
	}

	@media only screen and (min-width: ${breakpoints.desktop}) {
		display: none;
	}
`

export default TopBarStyled