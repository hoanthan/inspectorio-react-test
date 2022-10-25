import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./contexts/AppProvider";
import DefaultLayout from "./layouts/Default";

const HomePage = lazy(() => import('./pages/Home'))
const UserInfoPage = lazy(() => import('./pages/UserInfo'))

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/users/:username" element={<UserInfoPage />} />
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
