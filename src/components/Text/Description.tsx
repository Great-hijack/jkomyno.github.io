import cx from 'classnames';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  big?: boolean;
  spaceBottom?: 'small' | 'medium';
}

/**
 * This component should be used to display important descriptions.
 * The description can be conditionally enlarged with the `big` prop.
 */
export const Description: React.SFC<Props> = ({ big, children, spaceBottom }) => (
  <p className={cx('', {
      'is-size-5-mobile is-size-3-desktop': big,
      'is-size-5-mobile is-size-4-desktop': !big,
      'padding-bottom-small': spaceBottom === 'small',
    })}
  >
    {children}
  </p>
);

Description.defaultProps = {
  big: false,
};
