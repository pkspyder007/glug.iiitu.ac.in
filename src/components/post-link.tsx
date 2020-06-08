import {Link} from 'gatsby';
import React from 'react';
import {Tnode} from '../types.ts';

function PostLink({post}: {post: Tnode}): JSX.Element {
  return (
    <div className="single-post">
      <Link to={`/wiki/${post.frontmatter.slug}/`}>
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <p>{post.excerpt}</p>
      <Link to={`/wiki/${post.frontmatter.slug}/`}>
        <button>Read More ...</button>
      </Link>
      <p>
        <span>
          <small> by - {post.frontmatter.author || 'Anonymous'}, </small>
        </span>
        <span>
          <small>{post.timeToRead} min read</small>
        </span>
        <br />
        <small>
          Tags -
          {post.frontmatter.tags
            ? post.frontmatter.tags.map(t => <span key={t}>&nbsp;{t}, &nbsp;</span>)
            : ''}
        </small>
      </p>
    </div>
  );
}

export default PostLink;
