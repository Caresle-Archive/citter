import styled from 'styled-components'
import NewCitter from './NewCitter.jsx'
import { breakpoints, colors } from '../../../theme.js'

const NewCitterStyled = styled(NewCitter)`
	.input-citter {
		width: 100%;
		background-color: ${colors.background};
		border: 1px solid ${colors.background};
		color: var(--white);
		font-size: 1rem;
	}

	.input-citter:focus {
		outline: none;
	}

	@media only screen and (min-width: ${breakpoints.desktop}) {
		width: 700px;
		height: 20vh;
		margin-left: 370px;
		
		& form {
			height: 20vh;
			border: 1px solid ${colors.grayDark};
		}

		.input-citter {
			border: 1px solid ${colors.grayDark};
			height: 16vh;
		}
	}
`

export default NewCitterStyled