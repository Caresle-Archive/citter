import styled from "styled-components"
import { colors } from "../../../theme"
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
`

export default TopBarStyled