import styled from 'styled-components'
import { colors, boxShadow } from '../../theme'

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
`

export default BasicFormStyled