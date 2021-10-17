import { colors, boxShadow } from '../../theme'
import styled from 'styled-components'
import BtnPrimarySmall from './BtnPrimarySmall.jsx'

const BtnStyled = styled(BtnPrimarySmall)`
	background-color: ${props => props.outline ? colors.formCard : colors.primary};
	border: 1px solid ${colors.primary};
	border-radius: 6px;
	color: ${props => props.outline ? colors.primary : colors.white};
	padding: 4px;
	font-size: 1rem;
	font-weight: 700;
	width: ${props => props.btnForm ? '65%' : '90%'};
	height: 48px;
	margin: .25rem auto;
	cursor: pointer;
	box-shadow: ${props => props.boxShadow ? boxShadow.small : boxShadow.none};
	transition: filter .075s ease-in;

	&:hover {
		filter: ${props => props.outline ? "brightness(75%)" : "brightness(150%)"};
	}
`

export default BtnStyled