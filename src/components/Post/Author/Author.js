import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Contacts from '../../Contacts';
import styles from './Author.module.scss';

export const PureAuthor = ({data}) => {
  const {author} = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <Contacts contacts={author.contacts} />
      </p>
    </div>
  );
};

export const Author = (props) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                linkedin
                github
                email
                rss
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
