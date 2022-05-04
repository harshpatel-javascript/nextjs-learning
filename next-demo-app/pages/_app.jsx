import { components, ThemeProvider } from "theme-ui";
import Nav from "src/components/Nav";
import theme from "../theme";
import "styles/globals.css";
import "styles/layout.css";
import Footer from "@/layout/Footer";

export default function App({ Component, pageProps }) {
  // console.log(theme);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}
