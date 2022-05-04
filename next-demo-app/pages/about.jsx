import Footer from "../src/components/layout/Footer";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="just about section description" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
