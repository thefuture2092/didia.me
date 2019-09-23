import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import BookFeed from '../components/BookFeed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const BooksListTemplate = ({data, pageContext}) => {
  const {url} = data.site.siteMetadata;

  const {currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath} = pageContext;

  const {edges} = data.allMarkdownRemark;

  const metaImage = edges[0].node.frontmatter.sharingThumbnail;

  const pageTitle =
    currentPage > 0 ? ` Page ${currentPage} - Livres lus par Didia Aristote` : 'Livres lus par Didia Aristote';

  const description = "Je partage ici les livres que je suis entrain de lire ou que j'ai lus dans le passé";

  return (
    <Layout title={pageTitle} description={description} siteUrl={url} metaImage={metaImage}>
      <Sidebar />
      <Page>
        <BookFeed edges={edges} />
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
  query BooksTemplate($postsLimit: Int!, $postsOffset: Int!) {
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
      filter: {frontmatter: {template: {eq: "book"}, draft: {ne: true}}}
      sort: {order: DESC, fields: [frontmatter___readingStart]}
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            amazonLink
            author
            category
            description
            readingEnd
            readingStart
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                  presentationWidth
                }
              }
            }
            sharingThumbnail: thumbnail {
              childImageSharp {
                fixed(width: 1200, height: 630, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BooksListTemplate;
