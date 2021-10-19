import styled from "styled-components"
import { colors, breakpoints } from "../../../theme"
import CitterMessage from './CitterMessage.jsx'

const CitterMessageStyled = styled(CitterMessage)`
	border: 1px solid var(--gray-dark);
	padding: 4px;

	& .citter-message-user {
		display: flex;
		align-items: center;
		padding: 4px;

		& .img-profile {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}

		& .citter-user-info {
			margin-left: 8px;
			display: flex;

			& > span {
				margin-left: 8px;
				color: ${colors.textGray};
			}
			
		}
	}

	& .font-weight-big {
		font-weight: 700;
	}

	& .img-media-container {
		width: 90%;
		margin: 16px auto;
		padding: 8px;
		display: flex;
		justify-content: center;
		background-color: var(--background-color-dark);
		border-radius: 4px;

		& .img-media-citter {
			width: 90%;
			border-radius: 4px;
		}
	}

	& .video-media-container {
		width: 100%;

		& > video {
			width: 100%;
			height: 100%;
		}
	}
	
	& .social-info-container {
		display: flex;
		justify-content: space-around;

		& .social-item {
			display: flex;
			align-items: center;

			& > span {
				margin-left: 8px;
			}

			& .icon-small {
				width: 20px;
				height: 20px;
			}

			& .icon-small:hover {
				background-color: ${colors.grayDark};
			}
		}

		& .social-item-red {
			color: ${colors.like};
		}

		& .social-item-green {
			color: ${colors.share};
		}

		& .ml-3 {
			margin-left: 3rem;
		}
	}

	@media only screen and (min-width: ${breakpoints.desktop}) {
		margin: 0 auto;
		width: 700px;
		font-size: 1.25rem;
	}
`

export default CitterMessageStyled