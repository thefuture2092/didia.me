import React from 'react';
import {Link, graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const TagsListTemplate = ({data}) => {
  const {title, subtitle, url, image, imageWidth, imageHeight} = data.site.siteMetadata;
  const {group} = data.allMarkdownRemark;

  const metaImage = {
    src: image,
    width: imageWidth,
    height: imageHeight
  };

  return (
    <Layout title={`Tags - ${title}`} description={subtitle} metaImage={metaImage} siteUrl={url}>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagsListQuery {
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
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsListTemplate;
