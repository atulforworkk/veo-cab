import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import '@mantine/charts/styles.css';
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
const theme = createTheme({});
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
