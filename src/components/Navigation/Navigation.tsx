import * as React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC<IProps> = (props) => (
  <div className={styles.navigation}>
      {props.links.map(((link: NavigationLink) => (
        <NavLink to={link.url} activeClassName={props.chosenClassName} key={link.url}>
            <span>{link.label}</span>
        </NavLink>
      )))}
  </div>
);

Navigation.defaultProps = {
    links: [],
    chosenClassName: '',
};

interface IProps {
    chosenClassName: string;
    links: NavigationLink[];
}

interface NavigationLink {
    url: string;
    label: string;
    chosen?: boolean;
}

export default Navigation;
