import * as React from 'react';

const Form: React.FC<IProps> = ({title, className, ...props}) => {
    return (
      <form {...props}>
          <h1>
              {title}
          </h1>
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
