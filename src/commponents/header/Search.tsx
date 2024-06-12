import { CiSearch } from "react-icons/ci"
const Search = () => {
	return (
		<>
			<CiSearch className='text-xl absolute left-4 top-1/2 -translate-y-1/2' />
			<input
				type='text'
				placeholder='Search'
				className='pl-10 h-[45px] border w-[400px] rounded-l-lg'
			/>
			<button className='bg-primary text-white font-semibold text-sm  h-[45px] w-[98px] rounded-r-lg'>
				Search
			</button>
		</>
	)
}

export default Search
