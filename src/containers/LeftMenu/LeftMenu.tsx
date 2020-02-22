import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../components/icons/logo.svg';
import styles from './LeftMenu.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { IRootState } from '../../store';
import { connect } from 'react-redux';

const LeftMenu: React.FC<IProps> = ({ profile }) => {

    return (
      <div className={styles.menu}>
          <div className={styles.topPart}>
              <Link to={'/'}>
                  <div className={styles.logoContainer}>
                      <img src={logo} alt="logo" />
                      <span>BIMDATA</span>
                  </div>
              </Link>


              <div className={styles.userInfo}>
                <span className={styles.name}>{profile.firstName} {profile.lastName}</span>
                <span className={styles.email}>{profile.email}</span>
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

type connectedProps = ReturnType<typeof mapState>;

const mapState = (state: IRootState) => ({
    profile: state.user.profile,
});

interface IProps extends connectedProps{
}

export default connect(mapState)(LeftMenu);
