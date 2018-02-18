import React from "react";

const Story = ({ item, formattedDate, textShortened }) => {
  // const { item, formattedDate, textShortened } = props;
  //I like that you destructed the props here! you could pass them that way!

  return (
    <div className="story" key={item.id}>
      <h2>{item.title} </h2>
      <h3 className="dateAdded">
        Date Added: {formattedDate}
        {item.thumbnail.includes(".jpg") ? (
          <img
            alt="image from reddit"
            className="funnyImage"
            src={item.thumbnail}
          />
        ) : null}
      </h3>
      <p>By: {item.author}</p>
      <span className="upvotes text-center">{item.ups}</span>
      <p>{textShortened}</p>
      <a href={item.url} target="blank">
        Click for full story
      </a>
    </div>
  );
};
export default Story;

//You have a nice comment from react in the console! Your alt tag is great, it just doesn't need to say image becuase the screenreader knows that
