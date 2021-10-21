import styled from "styled-components"
import ProfilePage from "./ProfilePage.jsx"
import { colors } from "../../theme.js"

const ProfilePageStyled = styled(ProfilePage)`
	padding: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;

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
			background-color: ${colors.primary};
			color: ${colors.textColor};
			border: 1px solid ${colors.primary};
			border-radius: 8px;
			height: 48px;
			width: 128px;
			font-weight: 700;
			margin-left: 9rem;
			cursor: pointer;
		}

		& > button:hover {
			filter: brightness(150%);
		}
	}

	& .user-data {
		display: flex;
		& h4 {
			margin-left: 1rem;
			color: ${colors.textGray};
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