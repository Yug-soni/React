import React from "react";

////////////////////////////////
// A default value can be provided
// to the context while creating it.
// const def = React.createContext('default Value')
// This 'default Value' is consumed by the consumer.
////////////////////////////////

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
