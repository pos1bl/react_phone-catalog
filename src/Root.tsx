import {
  Route,
  HashRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { InvalidPage } from './pages/InvalidPage/InvalidPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductsProvider } from './helpers/ProductsContext';
import { CurrentProductsProvider } from './helpers/CurrentProductsContext';

export const Root = () => (
  <Router>
    <ProductsProvider>
      <CurrentProductsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="phones" element={<PhonesPage />}>
              <Route path=":phoneId" />
            </Route>
            <Route path="tablets" element={<TabletsPage />}>
              <Route path=":tableId" />
            </Route>
            <Route path="accessories" element={<AccessoriesPage />}>
              <Route path=":accessoriesId" />
            </Route>
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<InvalidPage />} />
          </Route>
        </Routes>
      </CurrentProductsProvider>
    </ProductsProvider>
  </Router>
);