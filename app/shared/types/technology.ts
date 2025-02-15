export type Technologycategory =
  | 'frameworks'
  | 'styles'
  | 'state'
  | 'api'
  | 'ui_libraries'
  | 'animations'
  | 'databases'
  | 'orms';

export type Technology = {
  title: string;
  color: string;
  category?: Technologycategory;
};

export type Technologies = {
  front_end: {
    frameworks: Record<string, Technology>;
    styles: Record<string, Technology>;
    state: Record<string, Technology>;
    api: Record<string, Technology>;
    ui_libraries: Record<string, Technology>;
    animations: Record<string, Technology>;
  };
  back_end: {
    frameworks: Record<string, Technology>;
    databases: Record<string, Technology>;
    orms: Record<string, Technology>;
  };
};
