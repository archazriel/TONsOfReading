import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface IProps extends PropsWithChildren<unknown> {
  useContainer?: boolean;
  contentClassName?: string;
}

function Layout({
  useContainer = true,
  children,
  contentClassName,
}: IProps) {
  return (
    <div className="page">
      <div
        className={classNames('page-content', contentClassName, {
          'page-container': useContainer,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
