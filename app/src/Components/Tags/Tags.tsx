import React from 'react';
import './Tags.css';


interface TagsProps {
  onClick: (tag:string) => void;
  shuffledTags: Array<string>;
}

const Tags = (props: TagsProps) => {

  const tags = props.shuffledTags.map((tag) => {
    const size = Math.ceil(Math.random() * 5);
    return (<div className={`tag size${size}`} key={tag} onClick={() => props.onClick(tag)}>#{tag}</div>)
  });

  return (
    <div className='Tags'>
      {tags}
    </div>
  )
}

export default Tags
