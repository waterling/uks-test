import * as React from 'react';

import styles from './Form.module.scss';

const Form: React.FC<IProps> = ({title, className, ...props}) => {
    return (
      <form {...props} className={styles.container}>
          <h2 className={styles.title}>
              {title}
          </h2>
          <div className={className}>
              {props.children}
          </div>
      </form>
    );
};

interface IProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    title: string;
}

export default Form;
