import * as React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { LinkProps } from 'next/link';
import { WithRouterProps } from 'next/dist/client/with-router';
import { ReactElementLike } from 'prop-types';

import classnames from 'classnames';

interface IProps extends WithRouterProps, LinkProps {
  href: string;
  children: ReactElementLike;
  activeClassName: string;
}
const ActiveLink = ({
  router,
  children,
  href,
  activeClassName,
  ...otherProps
}: IProps) => {
  const child = React.Children.only(children);
  const className = classnames(child.props.className, {
    [activeClassName]: router.pathname === href,
  });

  return (
    <Link href={href} {...otherProps}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

export default withRouter(ActiveLink);
