import ContentContainer from './Content/ContentContainer.jsx'
import ProfilePage from './ProfilePage/ProfilePage.jsx'
import NewCitter from './Content/NewCitter/NewCitter.jsx'
import LoginPage from './Forms/LoginPage.jsx'
import SignUp from './Forms/SignUp.jsx'

// Styled Components
import BottomBarStyled from './NavBar/BottomBar/BottomBarStyled.js'
import BtnRound from './Buttons/BtnRound.js'
import TopBarStyled from './NavBar/TopBar/TopBarStyled.js'
import SideBarStyled from './NavBar/SideBar/SideBarStyled.js'

const PageControl = (props) => {
	const {
		page,
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
		return (
			<>
				<TopBarStyled showSideBar={changePage} />
				<ContentContainer 
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
				<ProfilePage />
				<ContentContainer
					user={user}
					userProfile={userProfile}
					citterMessage={citterContent}
				/>
				<BtnRound cittear={changePage} />
				<BottomBarStyled changePage={changePage} />
			</>
		)
	} else if (page === 'newCitter') {
		return (
			<NewCitter 
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