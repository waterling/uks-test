import * as React from 'react';
import { ILoginForm } from '../../api/auth/interfaces';
import { useMemo, useState } from 'react';
import Form from '../../components/BasicComponents/Form/Form';
import Input from '../../components/BasicComponents/Input/Input';
import Button from '../../components/BasicComponents/Button/Button';

import styles from './LoginForm.module.scss';

const LoginForm: React.FC<IProps> = ({ onSubmit }) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!login || !password) {
            return;
        }
        onSubmit({ login, password });
    };

    return (
      <Form onSubmit={handleSubmit} title='LoginForm' className={styles.loginForm}>
          <Input
            type='text'
            label='Login'
            value={login}
            onChange={useMemo(() => e => setLogin(e.target.value), [])}
          />
          <Input
            type='password'
            label='Password'
            value={password}
            onChange={useMemo(() => e => setPassword(e.target.value), [])}
          />
          <Button className={styles.submitButton}>
              Login
          </Button>
      </Form>
    );
};

interface IProps {
    onSubmit: (form: ILoginForm) => void;
}

export default LoginForm;
