import React from 'react';
import {graphql} from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const NotFoundTemplate = ({data}) => {
  const {title, subtitle, url, image, imageWidth, imageHeight} = data.site.siteMetadata;

  const metaImage = {
    src: image,
    width: imageWidth,
    height: imageHeight
  };

  return (
    <Layout title={`Not Found | Rien trouvé - ${title}`} description={subtitle} siteUrl={url} metaImage={metaImage}>
      <Sidebar />
      <Page title="NOT FOUND | Rien trouvé">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>Malheureusement, rien n&#39;existe à cet endroit 😢😢</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        image
        imageWidth
        imageHeight
      }
    }
  }
`;

export default NotFoundTemplate;
