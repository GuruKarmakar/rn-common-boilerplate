import { Network } from "./network";
export default class Apis {
  static MobileRegister = (data) => {
    return Network("POST", "/register", "", data);
  };
  static VerifyMobileNumber = (data) => {
    return Network("POST", "/verify-account", "", data);
  };
  static Register = (data) => {
    return Network("POST", "/add-profile", "", data);
  };
  static EditProfile = (data) => {
    return Network("POST", "/edit-profile", "", data);
  };
  static Login = (data) => {
    return Network("POST", "/login", "", data);
  };
  static ViewProfile = (data) => {
    return Network("POST", "/view-profile", "", data);
  };
  static EditImage = (data) => {
    return Network(
      "POST",
      "/edit-profileImage",
      "application/x-www-form-urlencoded",
      data
    );
  };
  static ForgetPassword = (data) => {
    return Network("POST", "/forgot-password", "", data);
  };
  static ResetPassword = (data) => {
    return Network("POST", "/reset-password", "", data);
  };
}
