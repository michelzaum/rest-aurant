import { CategoryList } from './components/CategoryList';
import { FoodList } from './components/FoodList';
import { Header } from './components/Header';

import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <Header />
      <CategoryList />
      <FoodList />
      <GlobalStyles />
    </>
  );
}

export default App;
