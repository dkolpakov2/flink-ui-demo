import { Toaster } from "sonner";

import AppRoutes from "./router/routes";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        richColors
        position="top-right"
        expand
      />
    </>
  );
}