import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import '@mantine/charts/styles.css';
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
