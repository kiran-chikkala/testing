import React, { useEffect, useState } from "react";
import { USER_API } from "../utiles/Api";
import axios from "axios";

const useUsers = () => {
  const [User, setUsers] = useState([]);
  useEffect(() => {
    axios.get(USER_API).then((res) => {
      setUsers(res?.data?.users);
    });
  }, []);
  return User;
};

export default useUsers;
