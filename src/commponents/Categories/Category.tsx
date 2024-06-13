import { CategoryTypes } from "./Categories"
const Category = ({ icon, name }: CategoryTypes) => {
	return (
		<div className='cursor-pointer border rounded-xl h-[200px] flex flex-col justify-center items-center hover:text-primary hover:border-primary hover:shadow-sm hover:shadow-primary '>
			<img width={190} className='' src={icon} alt={name} />
			<h4 className='mt-3'>{name}</h4>
		</div>
	)
}

export default Category
