import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const CategoryTemplate = ({data, pageContext}) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    url: siteUrl,
    image,
    imageWidth,
    imageHeight
  } = data.site.siteMetadata;

  const metaImage = {
    src: image,
    width: imageWidth,
    height: imageHeight
  };

  const {category, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage} = pageContext;

  const {edges} = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage} - ${siteTitle}` : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle} siteUrl={siteUrl} metaImage={metaImage}>
      <Sidebar />
      <Page title={category}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
        url
        image
        imageWidth
        imageHeight
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {frontmatter: {category: {eq: $category}, template: {eq: "post"}, draft: {ne: true}}}
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
