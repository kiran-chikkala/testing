import "./App.css";
import ListComponent from "./Components/List/ListComponent";
import SearchBar from "./Components/Search/SearchBar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HorizontalTab from "./Components/Tab/HorizontalTab";
import CheckBoxComponent from "./Components/checkbox/CheckBoxComponent";
import AvatarComponent from "./Components/AvatarGroup/AvatarComponent";
import axios from "axios";
import { USER_API } from "./utiles/Api";
import PopOveComponent from "./Components/Popover/PopOverComponent";
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const initialCheckBoxList = [
  {
    id: 1,
    label: "Friend",
    disabled: true,
    countries: "hyderabed",
    checked: true,
  },
  {
    id: 2,
    label: "Classmate",
    disabled: false,
    countries: "delhi",
    checked: false,
  },
  { label: "Relative", disabled: false, countries: "mumbai", checked: false },
  {
    id: 3,
    label: "Officemate",
    disabled: false,
    countries: "chennai",
    checked: false,
  },
  { id: 4, label: "Party", disabled: false, countries: "goa", checked: false },
  { id: 5, label: "Org", disabled: false, countries: "jk", checked: false },
];
function App() {
  const [Friends, setFriends] = useState([]);
  const [userDataReceived, setUserDataReceived] = useState(false);
  const [checkBoxList, setCheckBoxList] = useState(initialCheckBoxList);
  // console.log(checkBoxList);
  const handleCheckChange = (updatedCheckBoxList) => {
    console.log(updatedCheckBoxList);
    setCheckBoxList(updatedCheckBoxList);
  };
  useEffect(() => {
    axios
      .get(USER_API)
      .then((res) => {
        setFriends(res?.data?.users);
        setUserDataReceived(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleActionBtnClick = () => {
    console.log("click");
  };

  const actionButtonConfig = {
    actionButtonEnable: false,
    actionButtonItem: [{ label: "add profile", value: "value" }],
    actionButtonCallbk: handleActionBtnClick,
  };
  return (
    <>
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
                <ListComponent
                  userArray={Friends}
                  flag={userDataReceived}
                  actionButtonConfig={actionButtonConfig}
                  handleClick={() => console.log("click")}
                  actionItems={[
                    { label: "Profile", value: "profile" },
                    { label: "Unfollow Profile", value: "unfollow" },
                  ]}
                />
              </StyledDiv>
            </>
          </div>
          <div label="Find Friend">
            <PopOveComponent />
            {/* <AvatarComponent totalAvatar={Friends} /> */}
          </div>
          <div label="Find Request">
            <CheckBoxComponent
              checkBoxList={checkBoxList}
              onCheckChange={handleCheckChange}
            />
          </div>
        </HorizontalTab>
      </div>
    </>
  );
}
export default App;
