import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Bouquet Grand Prix"
        src="https://flora.se/wp-content/uploads/2019/06/BukettGrandPrixLyx.png"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
