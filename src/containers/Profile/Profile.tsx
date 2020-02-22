import * as React from 'react';
import StaticForm from '../../components/StaticForm/StaticForm';

import styles from './Profile.module.scss';

const Profile: React.FC<IProps> = (props) => {
    return (
      <div className={styles.container}>
          <StaticForm title='Основная информация' data={testProfileData} />
          <StaticForm title='Проекты' data={testProjectsData} type='rows' containerClassName={styles.projects}/>
      </div>
    );
};

const testProfileData = [
    {
        label: 'Имя',
        value: 'Иван',
    },
    {
        label: 'Фамилия',
        value: 'Иванов',
    },
    {
        label: 'Эл. почта',
        value: 'mail@email.ru',
    },
];

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

interface IProps {
}

export default Profile;
