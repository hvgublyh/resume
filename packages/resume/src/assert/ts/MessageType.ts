export interface TypeExperience {
  startTime: string;
  endTime: string;
  company: string;
  position: string;
  project: TypeProject[];
}

export interface TypeProject {
  name: string;
  tech: string[];
  introduce: string;
  duty: string;
}

export interface TypeEducation {
  startTime: string;
  endTime: string;
  school: string;
}

export interface TypeHeader {
  name: string;
  messages: string[];
}

export interface TypeMessage {
  header: TypeHeader;
  educations: TypeEducation[];
  skills: string[];
  experiences: TypeExperience[];
}

