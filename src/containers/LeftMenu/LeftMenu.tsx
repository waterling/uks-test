import * as React from 'react';

import logo from '../../components/icons/logo.svg';
import styles from './LeftMenu.module.scss';

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
        <div className={styles.navigation}>
            <li><span>Профиль</span></li>
            <li className={styles.chosen}><span>Обращения</span></li>
            <li><span>Безопасность</span></li>
        </div>
      </div>
    );
};

interface IProps {
}

export default LeftMenu;
