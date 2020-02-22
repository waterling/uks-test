import * as React from 'react';
import { ILoginForm } from '../../api/auth/interfaces';
import { useMemo, useState } from 'react';
import cx from 'classnames';
import Form from '../../components/BasicComponents/Form/Form';
import Input from '../../components/BasicComponents/Input/Input';
import Button from '../../components/BasicComponents/Button/Button';

import styles from './LoginForm.module.scss';

const LoginForm: React.FC<IProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }
        onSubmit({ email, password });
    };

    return (
      <Form onSubmit={handleSubmit} title='LoginForm' className={styles.loginForm}>
          <Input
            type='text'
            label='Email'
            value={email}
            className={styles.row}
            onChange={useMemo(() => e => setEmail(e.target.value), [])}
          />
          <Input
            type='password'
            label='Password'
            value={password}
            className={styles.row}
            onChange={useMemo(() => e => setPassword(e.target.value), [])}
          />
          <Button className={cx(styles.row, styles.submitButton)}>
              Login
          </Button>
      </Form>
    );
};

interface IProps {
    onSubmit: (form: ILoginForm) => void;
}

export default LoginForm;
