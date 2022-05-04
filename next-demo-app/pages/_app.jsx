import { ThemeProvider } from "theme-ui";
import Nav from "../src/components/Nav";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  // console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
