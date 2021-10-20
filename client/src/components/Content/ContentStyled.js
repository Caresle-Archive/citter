import styled from "styled-components"
import ContentContainer from "./ContentContainer.jsx"
import { breakpoints } from "../../theme.js"

const ContentStyled = styled(ContentContainer)`
	height: 80vh;
	overflow: scroll;

	/* @media only screen and (min-width: ${breakpoints.desktop}) {
		height: 100vh;
	} */
`

export default ContentStyled