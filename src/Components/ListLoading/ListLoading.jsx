import { Divider, Skeleton } from "@mui/material";
import React from "react";
import "../ListLoading/listloading.css";
const ListLoading = (loadingConfig = {}) => {
  const { isLoading = true, loadingItems = 8 } = loadingConfig;

  const renderLoadingItems = () => {
    const items = [];
    for (let i = 0; i < loadingItems; i++) {
      items.push(
        <>
          <div key={i} className="skeleton_body">
            <Skeleton variant="circular" width={50} height={50} />
            <div className="Personal_information">
              <Skeleton animation="wave" className="profile_Name" />
              <Skeleton animation="wave" className="relation" />
            </div>
          </div>
          <Divider light />
        </>
      );
    }
    return items;
  };

  return <>{isLoading ? renderLoadingItems() : null}</>;
};

export default ListLoading;
