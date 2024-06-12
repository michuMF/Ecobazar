import { CategoryTypes } from "./Categories"

const Category = ({ icon, name }: CategoryTypes) => {
	return (
		<div className='border rounded-xl py-10 '>
			<img width={190} className='mx-auto' src={icon} alt={name} />
			<h4>{name}</h4>
		</div>
	)
}

export default Category
