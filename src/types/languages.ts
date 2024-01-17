export interface Project {
  name: string;
}

export interface Level {
  name: string;
  projects?: Project[];
}

export interface Framework {
  name: string;
  levels?: Level[];
}

export interface Language {
  name: string;
  frameworks: Framework[];
}

export interface LanguagesData {
  languages: Language[];
}
