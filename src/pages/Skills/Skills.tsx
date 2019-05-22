import * as React from 'react';
import { Section } from '../../components/Section';
import './Skills.css';

interface Props {
  leftSkills: string[],
  rightSkills: string[]
};

export class Skills extends React.PureComponent<Props> {
  renderLeftSkills = () => (
    this.props.leftSkills.map(leftSkill => (
      <div key={leftSkill} className="skill-row is-flex has-text-centered">
        <div className="left text">{leftSkill}</div>
        <div className="rect"/>
      </div>
    ))
  );

  renderRightSkills = () => (
    this.props.rightSkills.map(rightSkill => (
      <div key={rightSkill} className="skill-row is-flex has-text-centered">
        <div className="rect"/>
        <div className="right text">{rightSkill}</div>
      </div>
    ))
  );
  
  render() {
    return (
      <Section section="Skills" className="skills">
        <div className="card">
          <div className="card-content">
            {this.renderLeftSkills()}
            {this.renderRightSkills()}
          </div>
        </div>
      </Section>
    );
  }
};
