import styled from "styled-components"
import ProfilePage from "./ProfilePage.jsx"
import { colors } from "../../theme.js"

const ProfilePageStyled = styled(ProfilePage)`
	padding: 8px;

	& .myprofile-img-container {
		height: 80px;
		display: flex;
		align-items: center;
		padding: 8px;

		& > img {
			border-radius: 50%;
			height: 64px;
			width: 64px;
		}

		& > button {
			padding: 8px;
			background-color: ${colors.background};
			color: ${colors.primary};
			border: 1px solid ${colors.primary};
			border-radius: 8px;
			height: 40px;
			font-weight: 700;
			margin-left: 9rem;
			cursor: pointer;
		}
	}

	& .sidebar-social-stats {
		display: flex;

		& div + div {
			margin-left: 1rem;
		}
	}
`

export default ProfilePageStyled