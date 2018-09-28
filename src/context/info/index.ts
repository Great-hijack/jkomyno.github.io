import * as React from 'react';

export interface InfoContextType {
	author: string;
	authorEmail: string;
	authorUrl: string;
	nickname: string;
	onResumeDownloaded: () => void;
	repository: string;
	resumeUrl: string;
  techStack: string[];
};

export const InfoContext: React.Context<InfoContextType|{}> = React.createContext({});
