'use strict';

const _ = require('lodash');
const {createFilePath} = require('gatsby-source-filesystem');

const onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      const slug = node.frontmatter.slug[0] === '/' ? node.frontmatter.slug : `/${node.frontmatter.slug}`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
    } else {
      const value = createFilePath({node, getNode});
      createNodeField({
        node,
        name: 'slug',
        value
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({node, name: 'tagSlugs', value: tagSlugs});
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({node, name: 'categorySlug', value: categorySlug});
    }
  }
};

module.exports = onCreateNode;
