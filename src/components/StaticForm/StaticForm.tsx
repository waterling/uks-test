import * as React from 'react';
import cx from 'classnames';

import styles from './StaticForm.module.scss';

const StaticForm: React.FC<IProps> = (props) => {
    const isGrid = props.type === 'grid';
    const isRows = props.type === 'rows';

    return (
      <div className={props.containerClassName}>
          <h2 className={styles.title}>
              {props.title}
          </h2>
          <div
            className={cx(styles.table, {
                [styles.grid]: isGrid,
                [styles.rows]: isRows,
            })}
          >
              {props.data.map((item: IStaticFormRow, i: number) => (
                <React.Fragment key={i}>
                    <span>{item.label}</span>
                    {isGrid && (<span>{item.value}</span>)}
                </React.Fragment>
              ))}
          </div>
      </div>
    );
};

StaticForm.defaultProps = {
    data: [],
    title: '',
    type: 'grid',
};

interface IProps {
    type?: GridType;
    title: string;
    data: IStaticFormRow[];
    containerClassName?: string;
}

type GridType = 'grid' | 'rows';

interface IStaticFormRow {
    label: string;
    value?: string;
    render?: (value: string) => React.ComponentType
}

export default StaticForm;
