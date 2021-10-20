import LoginPage from './Forms/LoginPage.jsx'
import SignUp from './Forms/SignUp.jsx'

// Styled Components
import BottomBarStyled from './NavBar/BottomBar/BottomBarStyled.js'
import BtnRound from './Buttons/BtnRound.js'
import TopBarStyled from './NavBar/TopBar/TopBarStyled.js'
import SideBarStyled from './NavBar/SideBar/SideBarStyled.js'
import ContentStyled from './Content/ContentStyled.js'
import NewCitterStyled from './Content/NewCitter/NewCitterStyled.js'
import ProfilePageStyled from './ProfilePage/ProfilePageStyled.js'

import { breakpoints } from '../theme.js'

const PageControl = (props) => {
	const {
		page,
		windowSize,
		user,
		changePage,
		citterContent,
		url,
		userProfile,
		newCitter,
		handleLogin,
		handleOnChange,
		handleSignup,
		onSocialInteraction
	} = props

	
	if (!user && page === 'login') {
		return (
			<>
				<LoginPage
					handleSubmit={handleLogin}
					handleOnChange={handleOnChange}
					changePage={changePage}
				/>
			</>
		)
	} else if (!user && page === 'signup'){
		return (
			<SignUp
				changePage={changePage}
				onSubmit={handleSignup}
			/>
		)
	}
	if (page === 'feed') {
		const desktop = breakpoints.desktop.replace('px', '')
		if (windowSize === parseInt(desktop)) {
			return (
				<>
					<NewCitterStyled 
						cancelCitter={changePage}
						submitCitter={newCitter}
					/>
					<ContentStyled
						citterMessage={citterContent} 
						url={url}
						handleSocial={onSocialInteraction}
					/>
					<SideBarStyled changePage={changePage} />
					<BtnRound boxShadow cittear={changePage} />
				</>
			)
		}
		
		return (
			<>
				<TopBarStyled showSideBar={changePage} />
				<ContentStyled
					citterMessage={citterContent} 
					url={url}
					handleSocial={onSocialInteraction}
				/>
				<BtnRound boxShadow cittear={changePage} />
				<BottomBarStyled changePage={changePage} />
			</>
		)
	} else if (page === 'sidebar') {
		return (
			<SideBarStyled boxShadow changePage={changePage} />
		)
	} else if (page === 'profile') {
		return (
			<>
				<ProfilePageStyled />
				<ContentStyled
					user={user}
					userProfile={userProfile}
					citterMessage={citterContent}
					handleSocial={onSocialInteraction}
				/>
				<BtnRound cittear={changePage} />
				<BottomBarStyled changePage={changePage} />
			</>
		)
	} else if (page === 'newCitter') {
		return (
			<NewCitterStyled
				cancelCitter={changePage}
				submitCitter={newCitter}
			/>
		)
	}
	return (
		<h1>return</h1>
	)
}

export default PageControl