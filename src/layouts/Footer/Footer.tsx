import * as React from 'react';
import { Link } from '../../components/Link';
import { Overview } from '../../components/Text';
import { joinAnd } from '../../helpers';
import './Footer.css';

interface Props {
	author: string;
	techStack: string[];
	url: string;
}

export const Footer: React.SFC<Props> = ({ author, techStack, url }) => {
	const TechStackElements = techStack!.map((techName) => (
		<strong key={techName}>{techName}</strong>
	));
	const joinedTechStackElements = joinAnd(TechStackElements, ', ', 'and');

	return (
	  <footer className="footer">
			<div className="content has-text-centered">
				<Overview>
					{
						[
							'Built using ',
							...joinedTechStackElements,
							' by ',
							<Link
								key={author}
								newTab
								url={url}
								label={author!}
							/>
						]
					}
				</Overview>
				<Overview>
					Copyright 2018
				</Overview>
			</div>
		</footer>	
	);
};
