import store from "./redux/features/store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Cart from "./page/cart";
import NoMatch from "./page/noMatch";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Provider>
  );
}

export default App;
