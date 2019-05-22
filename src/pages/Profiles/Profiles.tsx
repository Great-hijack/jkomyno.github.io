import * as React from 'react';
import { Link } from '../../components/Link';
import { Section } from '../../components/Section';

export interface ProfileLink {
  link: string,
  className: string,
  platformTitle: string,
};

interface Props {
  links: ProfileLink[],
};

export class Profiles extends React.PureComponent<Props> {
  public render() {
    const renderedLinks = this.renderLinks();

    return (
      <Section section="Profiles" className="profiles">
        <div className="buttons is-centered">
          {renderedLinks}
        </div>
      </Section>
    );
  }

  private renderLink = ({ link, className, platformTitle }: ProfileLink): JSX.Element => (
    <Link
      newTab={true}
      label={platformTitle}
      url={link}
      key={platformTitle}
      className={`button is-outlined is-size-4-desktop is-size-6-mobile ${className}`}
    >
      {platformTitle}
    </Link>
  )

  private renderLinks = (): JSX.Element[] => (
    this.props.links.map(this.renderLink)
  )
};
