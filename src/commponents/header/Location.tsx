import { LuMapPin } from "react-icons/lu"
const Location = () => {
	return (
		<div className=' border-b'>
			<div className='flex-center justify-between container mx-auto py-2'>
				<div className=' flex-center gap-2'>
					<LuMapPin className='text-xl' />
					<p>Store Location: Katowice, Poland</p>
				</div>
				<div className='flex-center gap-4 text-sm'>
					<div className='flex-center gap-2 '>
						<p>Eng </p>
						<p>USD </p>
					</div>
					<div className='w-[1px]  h-[15px] bg-slate-300'></div>
					<div>
						<p>Sign In / Sign up</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Location
