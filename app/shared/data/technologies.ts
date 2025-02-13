type Technologycategory =
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

type Technologies = {
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

export const technologies: Technologies = {
  front_end: {
    frameworks: {
      react: {
        title: 'React',
        color: '#61DAFB',
        category: 'frameworks',
      },
      nextjs: {
        title: 'Next.js',
        color: '#000000',
        category: 'frameworks',
      },
    },
    styles: {
      css: {
        title: 'CSS',
        color: '#38B2AC',
      },

      tailwind: {
        title: 'TailwindCSS',
        color: '#38B2AC',
        category: 'styles',
      },
    },
    state: {
      redux: {
        title: 'Redux Toolkit',
        color: '#764ABC',
        category: 'state',
      },
    },
    api: {
      rtkquery: {
        title: 'RTK Query',
        color: '#764ABC',
        category: 'api',
      },
    },
    ui_libraries: {
      antd: {
        title: 'Ant Design',
        color: '#1890ff',
        category: 'ui_libraries',
      },
    },
    animations: {
      framer: {
        title: 'Framer Motion',
        color: '#ff0080',
        category: 'animations',
      },
    },
  },
  back_end: {
    frameworks: {
      nodejs: {
        title: 'Node.js',
        color: '#68A063',
        category: 'frameworks',
      },
      express: {
        title: 'Express',
        color: '#000000',
        category: 'frameworks',
      },
    },
    databases: {
      postgresql: {
        title: 'PostgreSQL',
        color: '#31648C',
        category: 'databases',
      },
      supabase: {
        title: 'Supabase',
        color: '#3ECF8E',
        category: 'databases',
      },
    },
    orms: {
      sequelize: {
        title: 'Sequelize',
        color: '#52B0E7',
        category: 'orms',
      },
    },
  },
};
