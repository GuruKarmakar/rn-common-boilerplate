import NetInfo from "@react-native-community/netinfo";
import { base_url } from "../utils/constants";

//THIS CODE IS FOR DEBUGGIN NETWORK CALLES IN CHROME DEVTOOLS
//REMOVE THIS ON PRODUCTION BUILD
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

//Main method for network calls using axios
export const Network = (method, endpoint, headers, data = {}) => {
  return new Promise((resolve, reject) => {
    //cheking network connection
    NetInfo.fetch().then((state) => {
      // console.log(state);

      if (state.isConnected) {
        fetch(`${base_url}${endpoint}`, {
          method,
          headers: {
            Accept: "application/json",
            "Content-Type": headers || "application/json",
            "x-access-token": data.token,
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          });
      }
    });
  });
};
