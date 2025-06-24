export type ProjectContent = {
  title?: string;
  children?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Project = {
  id: string;
  contents: ProjectContent[];
};

export type ProjectsList = {
  [key: string]: Project[];
};
