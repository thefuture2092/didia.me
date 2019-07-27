import React from 'react';
import {Link, graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const CategoriesListTemplate = ({data}) => {
  const {title, subtitle, url, image, imageWidth, imageHeight} = data.site.siteMetadata;
  const metaImage = {
    src: image,
    width: imageWidth,
    height: imageHeight
  };

  const {group} = data.allMarkdownRemark;

  return (
    <Layout title={`Categories - ${title}`} description={subtitle} siteUrl={url} metaImage={metaImage}>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {group.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoriesListQuery {
    site {
      siteMetadata {
        subtitle
        title
        url
        image
        imageWidth
        imageHeight
      }
    }
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default CategoriesListTemplate;
