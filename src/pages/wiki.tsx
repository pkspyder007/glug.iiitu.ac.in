import {graphql} from 'gatsby';
import React from 'react';
import '../assets/css/blog.css';
import Layout from '../components/Layout';
import PostLink from '../components/post-link';
import {Tdata, Tedge} from '../types.ts/index';

const BlogPage = ({
  data: {
    allMdx: {edges},
  },
}: Tdata): JSX.Element => {
  const Posts = edges
    .filter((edge: Tedge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: Tedge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <div className="posts">{Posts}</div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
            tags
          }
        }
      }
    }
  }
`;
