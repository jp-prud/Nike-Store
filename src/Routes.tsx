import { Routes as Switch, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Product from './pages/Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Route index element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:productId" element={<Product />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
