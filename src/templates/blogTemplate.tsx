import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';
import '../assets/css/blogpost.css';
import Layout from '../components/Layout';

type IBlogPost = {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        banner: {
          childImageSharp: {
            fluid: object | [object] | undefined;
          };
        };
        date: string;
        slug: string;
        title: string;
      };
    };
  };
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: IBlogPost): JSX.Element {
  const {mdx} = data; // data.markdownRemark holds your post data
  const {frontmatter, body} = mdx;
  return (
    <Layout>
      <div className="blog-post-container">
        {frontmatter.banner && (
          <Img
            fluid={frontmatter.banner.childImageSharp.fluid}
            alt={frontmatter.banner.childImageSharp.fluid.originalName}
            className="banner-image"
          />
        )}
        <div className="blog-post">
          <div className="info">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </div>
          <div className="body">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          {/* <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} /> */}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        banner {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
