import { CategoryList } from './components/CategoryList';
import { FoodItem } from './components/FoodItem';
import { Header } from './components/Header';

import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <Header />
      <CategoryList />
      <FoodItem />
      <GlobalStyles />
    </>
  );
}

export default App;
