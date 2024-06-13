import { FeaturedProps } from "./Featured"

const Category = ({ icon, name, info }: FeaturedProps) => {
	return (
		<div className='flex-center gap-4 '>
			<img src={icon} alt={name} />
			<div>
				<h3 className='text-lg font-semibold text-gray-9'>{name}</h3>
				<p className='text-gray-4'>{info}</p>
			</div>
		</div>
	)
}

export default Category
