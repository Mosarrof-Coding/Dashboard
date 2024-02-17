import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dsahboard from "./pages/Dsahboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import MainLayout from "./components/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // initializev react querry
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* react querry dev tools  */}
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Navigate replace to="dsahboards" />} />
              <Route path="dsahboards" element={<Dsahboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="logins" element={<Login />} />
              <Route path="settings" element={<Settings />} />
              <Route path="users" element={<Users />} />
              <Route path="accounts" element={<Account />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
