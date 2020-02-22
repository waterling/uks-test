import * as React from 'react';

import styles from './Input.module.scss';

const Input: React.FC<IProps> = ({ children, label, ...props }) => {
    return (
      <div className={styles.input}>
          <span className={styles.label}>{label}</span>
          <input {...props} />
      </div>
    );
};

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label: string;
}



export default Input;
