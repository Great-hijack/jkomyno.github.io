import * as React from 'react';
import * as ReactGA from 'react-ga';
import { AnimatedWrapper } from '../components/AnimatedWrapper';
import { LayoutShell } from '../components/LayoutShell';
import { InfoContext, InfoContextType } from '../context';
import { buildEmailAddress } from '../helpers';
import { About, Hero, Profiles, Skills } from '../pages';
import { ProfileLink } from '../pages/Profiles';

ReactGA.initialize('UA-126612593-1');

export class App extends React.PureComponent {

  public componentDidMount() {
    ReactGA.pageview('/home');
  }

  public render() {
    return (
      <InfoContext.Provider value={this.info}>
        <LayoutShell color="#34AAFF" headerElement={this.headerElement!}>
          <AnimatedWrapper>
            <Hero />
            <About />
            <Skills
              leftSkills={this.leftSkills}
              rightSkills={this.rightSkills}
            />
          </AnimatedWrapper>
          <Profiles links={this.profileLinks} />
        </LayoutShell>
      </InfoContext.Provider>
    );
  }

  private onResumeDownloaded() {
    ReactGA.event({
      action: 'Downloaded Resume',
      category: 'Promotion',
    });
  }

  private get headerElement() {
    return document.getElementById('header-root');
  }

  private get info(): InfoContextType {
    const author = 'Alberto Schiabel';
    const nickname = 'jkomyno';
    const authorUrl = `https://github.com/${nickname}`;
    const repository = `${authorUrl}/jkomyno.github.io`;
    const resumeUrl = `${repository}/raw/master/resume.pdf`

    return {
      author,
      authorEmail: buildEmailAddress(author, 'gmail.com'),
      authorUrl,
      nickname,
      onResumeDownloaded: this.onResumeDownloaded,
      repository,
      resumeUrl,
      techStack: [
        'ReactJS',
        'Bulma',
        'SCSS'
      ],
    };
  }

  private get leftSkills(): string[] {
    return [
      'ReactJS',
      'CSS3',
      'NodeJS',
      'TypeScript'
    ];
  }

  private get rightSkills(): string[] {
    return [
      'Golang',
      'C++14',
      'SQL',
      '(WIP) AWS'
    ];
  }

  private get profileLinks(): ProfileLink[] {
    return [
      {
        className: 'github',
        link: 'https://github.com/jkomyno',
        platformTitle: 'Github',
      },
      {
        className: 'medium',
        link: 'https://medium.com/@alberto.schiabel',
        platformTitle: 'Medium',
      },
      {
        className: 'stackoverflow',
        link: 'https://stackoverflow.com/users/6174476/alberto-schiabel',
        platformTitle: 'StackOverflow',
      },
      {
        className: 'linkedin',
        link: 'https://www.linkedin.com/in/alberto-schiabel-a21262132/',
        platformTitle: 'Linkedin',
      },
      {
        className: 'npm',
        link: 'https://www.npmjs.com/~jkomyno',
        platformTitle: 'Npm',
      },
      {
        className: 'codepen',
        link: 'https://codepen.io/jkomyno',
        platformTitle: 'Codepen',
      }
    ];
  }
}
