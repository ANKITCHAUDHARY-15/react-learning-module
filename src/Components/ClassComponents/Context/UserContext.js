import React from "react";

const UserContext = React.createContext("DEFAULT_USER_CONTEXT_VALUE");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
