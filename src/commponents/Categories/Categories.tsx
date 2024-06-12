export type CategoryTypes = {
	name: string
	icon: string
}

import FreshFruit from "../../assets/categories/FreshFruit.png"
import cooking from "../../assets/categories/Cooking.png"
import FreshVegetables from "../../assets/categories/FreshVegetables.png"
import DiabeticFood from "../../assets/categories/DiabeticFood.png"
import DishDetergents from "../../assets/categories/DishDetergents.png"
import Oil from "../../assets/categories/Oil.png"
import BakingNeeds from "../../assets/categories/BakingNeeds.png"
import BeautyAndHealth from "../../assets/categories/Beauty&Health.png"
import Beverages from "../../assets/categories/Beverages.png"
import BreadAndBaker from "../../assets/categories/Bread&Baker.png"
import MeatAndFish from "../../assets/categories/Meat&Fish.png"
import Snacks from "../../assets/categories/Snacks.png"
import Category from "./Category"

const categories: CategoryTypes[] = [
	{
		name: "Fresh Fruits",
		icon: FreshFruit,
	},
	{
		name: "Fresh Vegetables",
		icon: FreshVegetables,
	},
	{
		name: "Meat & Fish",
		icon: MeatAndFish,
	},
	{
		name: "Snacks",
		icon: Snacks,
	},
	{
		name: "Beverages",
		icon: Beverages,
	},
	{
		name: "Beauty & Health",
		icon: BeautyAndHealth,
	},
	{
		name: "Bread & Bakers",
		icon: BreadAndBaker,
	},
	{
		name: "Baking Needs",
		icon: BakingNeeds,
	},
	{
		name: "Cooking",
		icon: cooking,
	},
	{
		name: "Diabetic Food",
		icon: DiabeticFood,
	},
	{
		name: "Dish Detergents",
		icon: DishDetergents,
	},
	{
		name: "Oil",
		icon: Oil,
	},
]

const Categories = () => {
	return (
		<section
			id='categories'
			aria-label='categories'
			className='mx-auto container '>
			<h2 className='text-4xl font-semibold mt-12 mb-6'>Popular Categories</h2>
			<div className='grid grid-cols-6 gap-6   text-center  '>
				{categories.map(item => (
					<Category key={item.name} {...item} />
				))}
			</div>
		</section>
	)
}

export default Categories
