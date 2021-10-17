import TopBar from './NavBar/TopBar/TopBar.jsx'
import ContentContainer from './Content/ContentContainer.jsx'
import BtnCittear from './Buttons/BtnCittear.jsx'
import BottomBar from './NavBar/BottomBar/BottomBar.jsx'
import SideBar from './NavBar/SideBar/SideBar.jsx'
import ProfilePage from './ProfilePage/ProfilePage.jsx'
import NewCitter from './Content/NewCitter/NewCitter.jsx'
import LoginPage from './Forms/LoginPage.jsx'
import SignUp from './Forms/SignUp.jsx'

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
		handleSignup
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
				<TopBar showSideBar={changePage} />
				<ContentContainer 
					citterMessage={citterContent} 
					url={url}
				/>
				<BtnCittear cittear={changePage} />
				<BottomBar changePage={changePage} />
			</>
		)
	} else if (page === 'sidebar') {
		return (
			<SideBar changePage={changePage} />
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
				<BtnCittear cittear={changePage} />
				<BottomBar changePage={changePage} />
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