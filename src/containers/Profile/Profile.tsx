import * as React from 'react';
import StaticForm from '../../components/StaticForm/StaticForm';

import styles from './Profile.module.scss';
import { IRootState } from '../../store';
import { useMemo } from 'react';
import { connect } from 'react-redux';

const PROFILE_FIELDS = [
    {
        label: 'Имя',
        field: 'firstName',
    },
    {
        label: 'Фамилия',
        field: 'lastName',
    },
    {
        label: 'Эл. почта',
        field: 'email',
    },
];

const Profile: React.FC<IProps> = (props) => {

    const profileData = useMemo(() => PROFILE_FIELDS.map(f => ({
        ...f,
        value: props.profile[f.field],
    })), [props.profile]);

    return (
      <div className={styles.container}>
          <StaticForm title='Основная информация' data={profileData} />
          <StaticForm title='Проекты' data={testProjectsData} type='rows' containerClassName={styles.projects}/>
      </div>
    );
};

const testProjectsData = [
    {
        label: 'Название проекта 1',
    },
    {
        label: 'Название проекта 2',
    },
    {
        label: 'Название проекта 3',
    },
];
type connectedProps = ReturnType<typeof mapState>;

const mapState = (state: IRootState) => ({
    profile: state.user.profile
});
interface IProps extends connectedProps{

}

export default connect(mapState)(Profile);
