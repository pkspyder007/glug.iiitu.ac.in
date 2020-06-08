export type Tnode = {
  excerpt: string;
  timeToRead: string;
  frontmatter: {
    date: string;
    slug: string;
    title: string;
    author: string;
    tags: [string];
  };
  id: string;
  html: string;
};

export type Tedge = {
  node: Tnode;
};

export type Tdata = {
  data: {
    allMdx: {
      edges: [Tedge];
    };
  };
};
