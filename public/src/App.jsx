
import Actions from './components/Actions';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import ProductCards from './components/ProductCards';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Actions></Actions>
      <SearchBar></SearchBar>
      <ProductCards></ProductCards>
      <Pagination></Pagination>
    </>
  )
}

export default App
