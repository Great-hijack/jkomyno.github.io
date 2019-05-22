import * as React from 'react';
// @ts-ignore (I should add types to `react-inview-monitor`)
import InViewMonitor from 'react-inview-monitor';
import './AnimatedWrapper.css';

interface Props {
  children: React.ReactChild[];
}

/**
 * Whenever the user scrolls into the view of any child component, for each of them,
 * the same animation is applied. The chosen animation is `fade-in-up`,
 * borrowed from `https://github.com/daneden/animate.css`.
 */
export const AnimatedWrapper: React.SFC<Props> = ({ children }) => {
  const fn = (child: React.ReactChild, index: number): React.ReactNode => (
    <InViewMonitor
      classNameNotInView="is-invisible"
      classNameInView="width-100 animated fade-in-up"
    >
      {child}
    </InViewMonitor>
  );

  return (
    <>
      {React.Children.map<React.ReactNode, React.ReactChild>(children, fn)}
    </>
  );
};
