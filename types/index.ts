export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
}

export interface ProjectComponent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string;
}

export interface Technology {
  name: string;
  image: string;
}

export interface AnimationVariant {
  initial: object;
  animate: object;
  transition?: object;
}
