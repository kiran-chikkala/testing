import { Button, IconButton } from "@mui/material";
import "./App.css";
import ListComponent from "./Components/List/ListComponent";
import SearchBar from "./Components/Search/SearchBar";
import useUsers from "./hooks/useUsers";
import React from "react";
import styled from "styled-components";
import HorizontalTab from "./Components/Tab/HorizontalTab";
import BackGroundImage from "./Components/image/BackGroundImage";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function App() {
  const users = useUsers(); // api custom hook

  const handleActionBtnClick = () => {
    console.log("click");
  };

  const actionButtonConfig = {
    actionButtonEnable: false,
    actionButtonItem: [{ label: "add profile", value: "value" }],
    actionButtonCallbk: handleActionBtnClick,
  };
  return (
    <div>
      {/* <BackGroundImage description="Warning" content="No post yet" /> */}
      <HorizontalTab
        tablist={[
          { label: "Friend" },
          { label: "Find Friend" },
          { label: "Find Request" },
        ]}
      >
        <div label="Friend">
          <>
            <SearchBar
              width={"100%"}
              placeholder="Search..."
              updateChange={(val) => console.log(val)}
              searchInputValue=""
            />
            <StyledDiv>
              {users.map((item) => (
                <ListComponent
                  key={item.id}
                  user={item}
                  actionButtonConfig={actionButtonConfig}
                  handleClick={() => console.log("click")}
                  actionItems={[
                    { label: "Profile", value: "profile" },
                    { label: "Unfollow Profile", value: "unfollow" },
                  ]}
                />
              ))}
            </StyledDiv>
          </>
        </div>
        <div label="Find Friend">Find Friend</div>
        <div label="Find Request"> Find Request</div>
      </HorizontalTab>
    </div>
  );
}
export default App;

// <Grid container spacing={2}>
//   {users.map((user) => (
//     <Grid item key={user.id} xs={12} md={4}>
//       <CardComponent userinfo={user} />
//     </Grid>
//   ))}
// </Grid>;
