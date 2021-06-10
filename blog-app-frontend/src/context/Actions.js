// To check the scenarios after user logged in 
// scenario1 : user logged in successfully and the user initial state will be replaced by his data
// scenario2: user credentials are wrong and in this case user initial state will remain null and will give an error
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START", //Action name
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS", // Action name
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  export const Logout = () => ({
    type: "LOGOUT",
  });
  
  export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
  });
  
  export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
  });