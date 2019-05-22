import * as React from 'react';
import { ActionButton } from '../../components/ActionButton';
import { Matrix } from '../../components/Matrix';
import { Section } from '../../components/Section';
import { SubTitle, Title } from '../../components/Text';
import { InfoContext, InfoContextType } from '../../context';

export const Hero: React.SFC<{}> = () => {
  const salute = `Hi, my name is`;
  const subtitle = `and I'm a`;
  const matrixText = `Software engineer`;

  const standup = `I like tackling problems with creative solutions,
  crafting testable code for front-end and back-end.`;

  const renderAuthorInfo = ({ author, nickname }: InfoContextType ) => (
    <>
      <Title big>{author}</Title>
      <SubTitle code>{`/* @${nickname} */`}</SubTitle>
    </>
  );

  const AuthorInfoComponent = (
    <InfoContext.Consumer>
      {renderAuthorInfo}        
    </InfoContext.Consumer>
  );

  const renderActionButton = ({ resumeUrl, onResumeDownloaded }: InfoContextType) => (
    <ActionButton
      message="Get my resume"
      onClick={onResumeDownloaded}
      url={resumeUrl}
    />
  );

  const ActionButtonComponent = (
    <InfoContext.Consumer>
      {renderActionButton}
    </InfoContext.Consumer>
  )

  return (
    <Section hideTitle section="Hero" className="hero">
      <div className="has-text-centered">
        <SubTitle big>{salute}</SubTitle>
        {AuthorInfoComponent}
        <SubTitle>{subtitle}</SubTitle>
      </div>
      <Matrix
        columns={4}
        sentence={matrixText}
      />
      <Title center={true}>{standup}</Title>
      {ActionButtonComponent}
    </Section>
  );
};
