import React from 'react';
import {Link} from 'gatsby';
import styles from './Menu.module.scss';

const isAbsoluteUrl = url => /^https?:\/\/.+/.test(url);

const getLinkComponent = ({isAbsolute, label, path}) => {
  if (isAbsolute) {
    return (
      <a href={path} className={styles['menu__list-item-link']}>
        {label}
      </a>
    );
  }

  return (
    <Link to={path} className={styles['menu__list-item-link']} activeClassName={styles['menu__list-item-link--active']}>
      {label}
    </Link>
  );
};

const Menu = ({menu}) => {
  const richMenus = menu.map(item => ({...item, isAbsolute: isAbsoluteUrl(item.path)}));

  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {richMenus.map(item => (
          <li className={styles['menu__list-item']} key={item.path}>
            {getLinkComponent(item)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
