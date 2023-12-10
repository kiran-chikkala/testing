import { Button, IconButton } from "@mui/material";
import "./App.css";
import ListComponent from "./Components/List/ListComponent";
import RoundedSearch from "./Components/Search/RoundedSearch";
import useUsers from "./hooks/useUsers";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 1px 5px 9px 0px;
`;
function App() {
  const users = useUsers(); // api custom hook
  return (
    <div>
      <StyledDiv>
        <RoundedSearch width={"95%"} placeholder="Search" />

        {users.map((item) => (
          <ListComponent
            key={item.id}
            user={item}
            ActionMenu={IconButton}
            ActionButton={Button}
            handleClick={() => console.log("click")}
            actionItems={[
              { label: "Profile", value: "profile" },
              { label: "Unfollow Profile", value: "unfollow" },
            ]}
          />
        ))}
      </StyledDiv>
    </div>
  );
}
export default App;

// );
{
  /* <Stack
      sx={{
        bgcolor: "white",
        width: {
          xs: "100%",
          xl: "30%",
        },
        overflow: "scroll-y",
        boxShadow: "5",
        borderRadius: "15px",
      }}
    >
      {users.map((item) => (
        <ListComponent users={item} />
      ))}
    </Stack> */
}
// <Grid container spacing={2}>
//   {users.map((user) => (
//     <Grid item key={user.id} xs={12} md={4}>
//       <CardComponent userinfo={user} />
//     </Grid>
//   ))}
// </Grid>;
