import React from 'react';
import moment from 'moment';
import {Link} from 'gatsby';
import Card, {CardMedia, CardPrimaryContent, CardActions, CardActionButtons} from '@material/react-card';
import {Body2, Headline5, Subtitle2} from '@material/react-typography';
import classnames from 'classnames';
import styles from './BookFeed.module.scss';

const BookActionButtons = ({edge}) => {
  console.log(edge.node);
  if (!edge.node.html && !edge.node.frontmatter.amazonLink) return <></>;
  return (
    <CardActions>
      <CardActionButtons>
        {edge.node.html ? <Link className={'mdc-button mdc-card__action mdc-card__action--button'} to={edge.node.fields.slug}>
          Lire mon résumé
        </Link> : <></>}
        {edge.node.frontmatter.amazonLink ? <a className={'mdc-button mdc-card__action mdc-card__action--button'} href={edge.node.frontmatter.amazonLink} target="_blank" rel="noopener noreferrer">
          Acheter
        </a> : <></>}
      </CardActionButtons>
    </CardActions>
  );
}

const ReadingTime = ({edge}) => (
  edge.node.frontmatter.readingEnd ?
    <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.readingStart).format('MMMM D, YYYY')}>
      {`Lu du ${moment(edge.node.frontmatter.readingStart).format('D MMMM YYYY')} au ${moment(edge.node.frontmatter.readingEnd).format('D MMMM YYYY')}`}
    </time>
   : <time
      className={styles['feed__item-meta-time']}
      dateTime={moment(edge.node.frontmatter.readingStart).format('MMMM D, YYYY')}
    >
      {`En lecture depuis le ${moment(edge.node.frontmatter.readingStart).format('D MMMM YYYY')}`}
    </time>
);

const CurrentBook = ({edge}) => (
  <Card className={classnames(styles['feed__item'], 'mdc-card')}>
    <div className={styles['feed__item-body']}>
      <Headline5 className={styles['feed__item-title']}>
        {edge.node.frontmatter.title}
      </Headline5>
      <Subtitle2 className={classnames(styles['feed__item-subtitle'], styles['feed__item-subtitle--author'])}>
        Par {edge.node.frontmatter.author}
      </Subtitle2>
    </div>
    <CardPrimaryContent className={styles['feed__item-content']}>
      <CardMedia wide imageUrl={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
      <div className={styles['feed__item-body']}>
        <Subtitle2 className={styles['feed__item-subtitle']}>
          <ReadingTime edge={edge} />
        </Subtitle2>
        <Body2 className={styles['feed__item-description']}>
          {edge.node.frontmatter.description}
        </Body2>
      </div>
    </CardPrimaryContent>
    <BookActionButtons edge={edge}/>
  </Card>
);

const Book = ({edge}) => (
  <Card className={classnames(styles['feed__item'], 'mdc-card')}>
    <CardPrimaryContent className={classnames(styles['feed__item-content'], styles['feed__item-content--horizontal'])}>
      <CardMedia square imageUrl={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
      <div className={classnames(styles['feed__item-body'], styles['feed__item-body--horizontal'])}>
        <Headline5 className={classnames(styles['feed__item-title'], styles['feed__item-title--horizontal'])}>
          {edge.node.frontmatter.title}
        </Headline5>
        <Subtitle2 className={classnames(styles['feed__item-subtitle'], styles['feed__item-subtitle--author'])}>
          Par {edge.node.frontmatter.author}
        </Subtitle2>
        <Subtitle2 className={styles['feed__item-subtitle']}>
          <ReadingTime edge={edge} />
        </Subtitle2>
        <Body2 className={classnames(styles['feed__item-description'], styles['feed__item-description--horizontal'])}>
          {edge.node.frontmatter.description}
        </Body2>
      </div>
    </CardPrimaryContent>
    <BookActionButtons edge={edge} />
  </Card>
);

const BookFeed = ({edges}) => [
  <CurrentBook edge={edges[0]} />,
  <div className={styles['feed']} key="feed">
    {edges.slice(1).map(edge => <Book edge={edge} key={edge.node.fields.slug} />)}
  </div>
];

export default BookFeed;
