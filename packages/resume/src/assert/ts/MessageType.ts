export type TypeEducation = {
  endTime: string;
  school: string;
  startTime: string;
}

export type TypeExperience = {
  company: string;
  endTime: string;
  position: string;
  project: TypeProject[];
  startTime: string;
}

export type TypeHeader = {
  messages: string[];
  name: string;
}

export type TypeMessage = {
  educations: TypeEducation[];
  experiences: TypeExperience[];
  header: TypeHeader;
  skills: string[];
}

export type TypeProject = {
  duty: string;
  introduce: string;
  name: string;
  tech: string[];
}

