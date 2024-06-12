import MainColumn from "./MainColumn"
import SaleColumn from "./SaleColumn"
import SpecialColumn from "./SpecialColumn"

const Main = () => {
	return (
		<main className='grid grid-cols-3 w-full h-[600px] container mx-auto gap-6 mt-6'>
			<MainColumn />
			<SaleColumn />
			<SpecialColumn />
		</main>
	)
}

export default Main
