import * as React from 'react';
import { Link } from '../../components/Link';
import { Section } from '../../components/Section';
import { Description } from '../../components/Text';
import { InfoContext, InfoContextType } from '../../context';

export const Opportunities: React.SFC<{ email: string }> = ({ email }) => {
  const opportunities = {
    drop: `Drop me an `,
    email: <Link newTab label="email" url={`mailto:${email}`} />,
    new: `for new opportunities.`,
  };

  return (
    <Description>{opportunities.drop} {opportunities.email} {opportunities.new}</Description>
  );
};

export const About: React.SFC<{}> = () => {
  const links = {
    androidiani: <Link newTab label="Androidiani" url="http://www.androidiani.com" />,
    brainwise: <Link newTab label="Brainwise" url="https://brainwise.it" />,
    skydreamer: <Link newTab label="Skydreamer" url="https://www.crunchbase.com/organization/skydreamer" />,
  }
  const experience = {
    onSite: `as well as on-site`,
    remote: `I have experience in working with remote-only teams`,
  };
  const study = `I'm a third year Computer Science student at the University of
                Padova. I'm curious and passionate about advanced math topics, programming
                paradigms and software engineering best practices.`;

  const renderOpportunities = ({ authorEmail }: InfoContextType) => (
    <Opportunities email={authorEmail} />
  );

  return (
    <Section section="About" className="about">
      <Description>{study}</Description>
      <Description>
        {experience.remote} ({links.skydreamer}, {links.androidiani}) {experience.onSite} ({links.brainwise}).
      </Description>
      <hr />
      <InfoContext.Consumer>
        {renderOpportunities}
      </InfoContext.Consumer>
    </Section>
  );
};
