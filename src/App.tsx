import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./pages/People";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="/character/:id" element={<People />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
