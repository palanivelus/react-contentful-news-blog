import React from "react";
import marked from "marked";

const Post = ({ article }) => {
  console.log(article);
  const {
    title,
    featuredImage,
    description,
    publishedDate,
    author,
    mediaName,
    mediaImage,
  } = article.fields;
  const postDescription = marked(description);
  return (
    // <div className='post'>
    //     <h2 className='title'>{name}</h2>
    //     {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
    //     <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    // </div>

    <div className="post">
      <h2 className="title">{title}</h2>
      <div className="shortBy">Short by {author} | {mediaName} |  {publishedDate}</div>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={title}
          title={title}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};

export default Post;
