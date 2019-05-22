import * as React from 'react';
import { Title } from '../../components/Text';

interface Props {
  className?: string;
  children?: React.ReactNode;
  section?: string;
  hideTitle?: boolean;
};

export const Section: React.SFC<Props> = ({ children, className, hideTitle, section }) => (
  <section className={`section${className ? ` ${className}` : ''}`}>
    <div className="container">
      {!hideTitle && section && <Title>{section}</Title>}
      {children}
    </div>
  </section>
);

Section.defaultProps = {
  className: '',
  hideTitle: false,
};
