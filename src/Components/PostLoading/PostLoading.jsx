import React from "react";
import { Skeleton } from "@mui/material";
import "./postLoading.css";

const PostLoading = ({ isLoading = true, loadingItems = 8 }) => {
  const generateLoadingItems = () => {
    const items = [];
    for (let i = 0; i < loadingItems; i++) {
      items.push(
        <div key={i} className="post-loading-item">
          <div className="user-info">
            <Skeleton variant="circular" width={50} height={50} />
            <div className="user-data">
              <Skeleton animation="wave" className="user_name" />
              <Skeleton animation="wave" />
            </div>
          </div>

          <Skeleton
            animation="wave"
            variant="rectangular"
            className=" user_post"
          />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="post-loading-container">
      {isLoading ? generateLoadingItems() : null}
    </div>
  );
};

export default PostLoading;
