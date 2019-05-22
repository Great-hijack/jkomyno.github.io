import * as React from 'react';
import { Link } from '../../components/Link';
import './Header.css';

interface Props {
  ExternalElement: React.ReactNode;
  Logo: React.ReactNode;
  externalUrl: string;
};

export const Header: React.SFC<Props> = ({ ExternalElement, Logo, externalUrl }) => (
  <nav className="navbar has-shadow is-spaced is-fixed-top">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          label="Brand logo"
        >
          {Logo}
        </Link>
      </div>
      <div className="ext-icon-container">
        <div className="navbar-item has-text-centered">
          <Link
            newTab
            className="navbar-item"
            label="External site logo"
            url={externalUrl}
          >
            {ExternalElement}
          </Link>
        </div>
      </div>      
    </div>
  </nav>
);
