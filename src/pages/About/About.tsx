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
    autoencoders: <Link newTab label="convolutional Autoencoders"
                    url="https://colab.research.google.com/drive/1VUeii7JAw11bRAXwhtpWDc0DoXhwzdGF"
                  />,
  }
  const experience = {
    onSite: `as well as on-site`,
    remote: `I have experience in working with remote-only teams`,
  };
  const study = `I'm a Master's student graduating in Computer Science at the University of
                Padova. I graduated with a Bachelor's Degree in Computer Science in 2019.`;

  const self = `I'm curious and passionate about functional programming,
                NP-hard algorithms approximations and software engineering best practices.`;

  const ai = `I'm currently studying and strengthening my skills in Machine Learning.
              I'm particularly interested in`;

  const renderOpportunities = ({ authorEmail }: InfoContextType) => (
    <Opportunities email={authorEmail} />
  );

  return (
    <Section section="About" className="about">
      <Description spaceBottom="small">{study}</Description>
      <Description>{self}</Description>
      <Description spaceBottom="small">
        {experience.remote} ({links.skydreamer}, {links.androidiani}) {experience.onSite} ({links.brainwise}).
      </Description>

      <Description>
        {ai} {links.autoencoders} {'.'}
      </Description>

      <hr />
      <InfoContext.Consumer>
        {renderOpportunities}
      </InfoContext.Consumer>
    </Section>
  );
};
