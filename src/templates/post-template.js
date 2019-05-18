import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostTemplate = ({data}) => {
  const {title: siteTitle, subtitle: siteSubtitle, url: siteUrl} = data.site.siteMetadata;

  const {title: postTitle, description: postDescription, thumbnail} = data.markdownRemark.frontmatter;

  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  const metaImage = thumbnail ? thumbnail.childImageSharp.fixed : null;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} metaImage={metaImage} siteUrl={siteUrl}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
          contacts {
            twitter
          }
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        thumbnail {
          childImageSharp {
            fixed(width: 1200, height: 630, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
