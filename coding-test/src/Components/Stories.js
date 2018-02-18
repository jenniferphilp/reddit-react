import React from "react";
import { truncate } from "lodash";
import Story from "./Story";

const Stories = props => {
  return props.redditItems.map(item => {
    const textShortened = truncate(item.selftext, { length: 500 });

    const convertToEST = item.created * 1000 - 18000;
    const formattedDate = truncate(new Date(convertToEST).toString(), {
      length: 25,
      omission: " "
    });
    return (
      <Story
        key={item.id}
        item={item}
        formattedDate={formattedDate}
        textShortened={textShortened}
      />
    );
  });
};
export default Stories;
