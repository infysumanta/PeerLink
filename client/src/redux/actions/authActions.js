import { authTypes } from "./../types/authTypes";
import authApi from "../../api/authApi";
import constant from "../../util/constant";

// export const getAuthAction = (dispatch) => {
//   return {
//     login: (params, navigate, toast) =>
//       dispatch(login(params, navigate, toast)),
//   };
// };

export const login = (params, navigate, toast, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      const res = await authApi.login(params);
      toast({
        title: "Login Successfully!",
        description: `Welcome back, ${res.user.firstName}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem(constant.TOKEN_NAME, res.user.token);
      // dispatch(setUserDetails(res.user));
      navigate("/");
    } catch (error) {
      toast({
        title: "Error Login",
        description: "Invalid Credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};
export const signup = (params, navigate, toast, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      await authApi.signup(params);
      toast({
        title: "Account created!",
        description: "Account is created, Login Now",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error creating account!",
        description: "Something Went Wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

const setUserDetails = (data) => {
  return {
    type: authTypes.SET_USER_DETAILS,
    payload: data,
  };
};

const deleteUserDetails = () => {
  return {
    type: authTypes.LOG_OUT,
  };
};
