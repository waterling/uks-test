import * as React from 'react';

import logo from '../../components/icons/logo.svg';
import styles from './LeftMenu.module.scss';
import Navigation from '../../components/Navigation/Navigation';

const LeftMenu: React.FC<IProps> = () => {

    return (
      <div className={styles.menu}>
          <div className={styles.topPart}>
              <div className={styles.logoContainer}>
                  <img src={logo} alt="logo"/>
                  <span>BIMDATA</span>
              </div>

              <div className={styles.userInfo}>
                <span className={styles.name}>Имя Фамилия</span>
                <span className={styles.email}>email@mail.ru</span>
              </div>
          </div>

          <Navigation chosenClassName={styles.chosen} links={links}/>
      </div>
    );
};

const links = [
    {
        url: '/profile',
        label: 'Профиль'
    },
    {
        url: '/appeal',
        label: 'Обращения'
    },
    {
        url: '/security',
        label: 'Безопасность'
    },
];

interface IProps {
}

export default LeftMenu;
