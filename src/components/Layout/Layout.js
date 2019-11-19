import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({children, title, description, metaImage, siteUrl}) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@didia" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="article:author" content="Aristote Diasonama" />
      {metaImage && <meta property="og:image" content={`${siteUrl}${metaImage.src}`} />}
      {metaImage && <meta property="og:image:width" content={metaImage.width} />}
      {metaImage && <meta property="og:image:height" content={metaImage.height} />}
    </Helmet>
    {children}
  </div>
);

export default Layout;
