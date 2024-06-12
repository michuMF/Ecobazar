import logo from "../../assets/header/logo.png"

const Logo = () => {
	return (
		<div className='flex-center gap-2 py-4'>
			<img width={32} src={logo} alt='' />
			<h2 className='text-3xl font-semibold'>Ecobazar</h2>
		</div>
	)
}

export default Logo
