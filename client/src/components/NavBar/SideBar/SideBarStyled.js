import styled from 'styled-components'
import { colors, boxShadow, breakpoints } from '../../../theme'
import SideBar from './SideBar.jsx'

const SideBarStyled = styled(SideBar)`
	width: 80%;
	background-color: ${colors.backgroundDark};
	height: 100vh;
	padding: 4px;
	box-shadow: ${props => props.boxShadow ? boxShadow.sideBar : 'none'};

	& > div > img {
		width: 64px;
		height: 64px;
		border-radius: 50%;
	}

	& > div > .sidebar-profile-align {
		display: grid;
		padding: 4px;
		margin: 4px 0;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 22px);
		grid-template-areas: "user1 icon" "user2 .";
	}

	& .sidebar-social-stats {
		display: flex;
		& > div {
			margin-left: 4px;
			& > span {
				color: ${colors.textGray};
			}
		}
	}

	& .hide-side-bar {
		display: none;
	}

	#user1 {
		grid-area: user1;
	}

	#user2 {
		grid-area: user2;
		color: ${colors.textGray};
	}

	#sidebar-icon {
		grid-area: icon;
		display: flex;
		justify-self: flex-end;
	}

	& .sidebar-flex-center {
		display: flex;
		align-items: center;
		margin: 1rem 0;
		padding: 4px;
		cursor: pointer;

		& > span {
			margin-left: .75rem;
		}
	}

	& .sidebar-item {
		padding: 4px;
		transition: background-color .1s ease-out;
		border-radius: 4px;
	}

	& .sidebar-item:hover {
		cursor: pointer;
		background-color: ${colors.background};
		filter: brightness(120%);
		box-shadow: ${boxShadow.roundButton};
	}

	@media only screen and (min-width: ${breakpoints.desktop}) {
		width: 300px;
		position: absolute;
		top: 0;
	}
`

export default SideBarStyled