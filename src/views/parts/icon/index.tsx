import React from 'react';
import classNames from 'classnames';
import DividerIcon from '@public/images/dividerIcon.png';
import Image from "next/image";

interface IProps {
  size?: number | string;
  color?: string;
  position?: 'vertical' | 'horizontal';
}

function Icon({
  size = 50,
  color = '#2B3692',
  position = 'horizontal',
}: IProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={classNames('icon-wrapper', {
        vertical: position === 'vertical',
      })}
    >
      <Image src={DividerIcon} />
    </div>
  );
}

export default Icon;
