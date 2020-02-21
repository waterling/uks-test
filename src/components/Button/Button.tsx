import * as React from 'react';

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
    return (
      <button {...props} className={props.className}>
          {props.children}
      </button>
    );
};

export default Button;
