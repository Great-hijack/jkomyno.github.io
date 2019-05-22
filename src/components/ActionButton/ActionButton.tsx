import * as React from 'react';
import { Column } from '../../components/Column';
import { Link } from '../Link';
import './ActionButton.css';

export const ArrowRight: React.SFC<{}> = () => (
  <svg
    viewBox="0 0 453.5 270"
    width="2em"
  >
    <g stroke="color">
      <path
        id="arrow-head"
        fill="none"
        strokeWidth={20}
        d="M318.5 10l125 125-125 125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="arrow-body"
        strokeMiterlimit={0}
        d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"
      />
    </g>
  </svg>
);

interface Props {
  message: string;
  onClick: () => void;
  url: string;
}

export const ActionButton: React.SFC<Props> = ({ message, onClick, url }) => (
  <Column>
    <div className="box action-button-container has-text-centered">
      <Link
        className="button action-button is-size-3 is-size-6-mobile"
        fillEffect={false}
        label={message}
        onClick={onClick}
        url={url}
      >
        {message} <ArrowRight />
      </Link>
    </div>
  </Column>
);
