import Categories from "./commponents/Categories/Categories"
import BestDeals from "./commponents/bestdeals/BestDeals"
import Featured from "./commponents/featured/Featured"
import Header from "./commponents/header/Header"
import Main from "./commponents/main/Main"
import PopularProducts from "./commponents/products/PopularProducts"

function App() {
	return (
		<>
			<Header />
			<Main />
			<Featured />
			<Categories />
			<PopularProducts />
			<BestDeals />
		</>
	)
}

export default App
