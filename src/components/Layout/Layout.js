import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({children, title, description}) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@thefuture2092" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
