import 'dotenv/config';
export default {
  expo: {
    name: "Noctune",
    slug: "Noctune",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.krishnanx.Noctune"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.krishnanx.Noctune"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      SERVER: process.env.SERVER,
      WEBSOC: process.env.WEBSOC

    }
  }
};
