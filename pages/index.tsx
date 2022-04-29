import React, { useState, useEffect, useRef } from "react";
import Login from "../components/Login";
import SignedIn from "../components/SignedIn";
import ProtonSDK from "../service/proton";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const Main = (): JSX.Element => {
  const [error, setError] = useState("");
  const [auth, setAuth] = useState("");
  const [permission, setPermission] = useState("");
  const [accountData, setAccountData] = useState({});

  const prevError = usePrevious(error);
  useEffect(() => {
    if (prevError) {
      setError("");
    }
  }, [prevError]);

  useEffect(() => {
    async function checkIfLoggedIn() {
      const { user, error }: any = await ProtonSDK.restoreSession();
      if (error) {
        setError(error);
        return;
      }
      if (user.actor && user.permission) {
        setAuth(user.actor);
        setPermission(user.permission);
        setAccountData(user);
      }
    }

    checkIfLoggedIn();
    document.addEventListener("backToSelector", () => {
      generateLoginRequest();
    });
  }, []);

  const generateLoginRequest = async () => {
    const { user, error }: any = await ProtonSDK.login();

    if (error) {
      setError(error);
      return;
    }

    setAuth(user.actor);
    setPermission(user.permission);
    setAccountData(user);
  };

  const logout = async () => {
    await ProtonSDK.logout();
    setAuth("");
    setPermission("");
    setAccountData({});
  };

  if (auth && permission && accountData) {
    return <SignedIn accountData={accountData} logout={logout} error={error}/>;
  } else {
    return <Login login={generateLoginRequest} error={error} />;
  }
};

export default Main;
