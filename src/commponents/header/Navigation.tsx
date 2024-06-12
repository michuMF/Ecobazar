const navigationList = [
	"Home",
	"Shop",
	"Pages",
	"Blog",
	"About Us",
	"Contact Us",
]
import { LiaPhoneVolumeSolid } from "react-icons/lia"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
const Navigation = () => {
	return (
		<div className='bg-gray-8'>
			<div className='container mx-auto flex-center justify-between'>
				<nav>
					<ul className='flex gap-4 text-gray-4 py-4'>
						{navigationList.map(item => (
							<li
								key={item}
								className='flex-center gap-1 hover:text-white cursor-pointer'>
								<p>{item}</p>
								<MdOutlineKeyboardArrowDown className='text-xl' />
							</li>
						))}
					</ul>
				</nav>
				<div className='text-white flex gap-2'>
					<LiaPhoneVolumeSolid className='text-2xl' />
					<p>697 705 837</p>
				</div>
			</div>
		</div>
	)
}

export default Navigation
