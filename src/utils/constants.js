import { Dimensions, PermissionsAndroid, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

export const FONT_FAMILY = {
  RUBIK_REGULAR: "Rubik-Regular",
  RUBIK_LIGHT: "Rubik-Light",
  RUBIK_MEDIUM: "Rubik-Medium",
};

export const FONT_SIZE = {
  MICRO: 12,
  SMALL: 14,
  MEDIUM: 16,
  LARGE: 18,
  BIG: 20,
};

export const HEIGHT = {
  FULL_SCREEN: height,
  HALF_SCREEN: height / 2,
  ONE_FOURTH_SCREEN: height / 4,
  ONE_SIX_SCREEN: height / 6,
};

export const COLORS = {
  PRIMARY: "#3255B1",
  SECENDARY: "#6569CD",
  TARTIARY: "#002060",
  WHITE: "#FFF",
  Common:"#0060A6",
  GRAY: "gray",
  BLACK: "#000",
  GRAY_LIGHT: "#dedddc",
};

export const STYLES = {
  LIGHT_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_LIGHT,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  NORMAL_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_NORMAL,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  BOLD_TEXT: {
    fontFamily: FONT_FAMILY.OXYGEN_BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
};

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};

export const PADDING = {
  SMALL: 5,
  MEDIUM: 10,
  LARGE: 15,
};

export const base_url = "https://nodeserver.mydevfactory.com:1441/api";
export const base_url_img = "http://localhost:3002";

export const APP_TYPE = Platform.OS === "ios" ? "IOS" : "ANDROID";

export const defaultImg = "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
