import Logo from "./Logo"
import Location from "./Location"
import Search from "./Search"
import Icons from "./Icons"
import Navigation from "./Navigation"
const Header = () => {
	return (
		<header className=' '>
			<Location />
			<div className='flex-center justify-between container mx-auto'>
				<Logo />
				<div className='relative flex-center'>
					<Search />
				</div>
				<Icons />
			</div>
			<Navigation />
		</header>
	)
}

export default Header
