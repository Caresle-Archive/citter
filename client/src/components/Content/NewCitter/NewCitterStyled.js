import styled from 'styled-components'
import NewCitter from './NewCitter.jsx'

const NewCitterStyled = styled(NewCitter)`
	.input-citter {
		width: 100%;
		background-color: var(--background-color);
		border: 1px solid var(--background-color);
		color: var(--white);
		font-size: 1rem;
	}

	.input-citter:focus {
		outline: none;
	}
`

export default NewCitterStyled