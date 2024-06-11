import React from "react";
import Layout from "../components/layout";

export const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="decription" content="Talga portal" />
  </>
);

export default AboutPage;
