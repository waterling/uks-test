import * as React from 'react';
import LoginForm from './LoginForm';

import styles from './SignIn.module.scss';
import { useMemo } from 'react';
import { ILoginForm } from '../../api/auth/interfaces';
import { connect } from 'react-redux';
import { Dispatch, IRootState } from '../../store';

const SignIn: React.FC<IProps> = ({ login }) => {
    const handleLogin = useMemo(() => (form: ILoginForm) => {
        login(form);
    }, [login]);

    return (
      <div className={styles.signInPage}>
          <LoginForm
            onSubmit={handleLogin}
          />
      </div>
    );
};

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>

interface IProps extends connectedProps{
}


const mapState = (state: IRootState) => ({

});

//TODO issue https://github.com/rematch/rematch/issues/723
const mapDispatch = (dispatch: any) =>{
    const d = dispatch as Dispatch;
    return ({
        login: d.auth.login,
    })
};
export default connect(null, mapDispatch)(SignIn);
