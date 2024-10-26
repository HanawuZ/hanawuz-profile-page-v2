type Theme = {
  light: Record<string, string>,
  dark: Record<string, string>,
}

const themes: Theme = {
  dark: {
    background: "#252525",
    sheetBackground: "#3c3c3c",
    primaryText: "#FFFFFF",
    secondaryText: "#ececec",
    mobileMenuBackground: "#252525",
    loadingScreenBackground: "rgba(0, 0, 0, 0.5)",
  },
  light: {
    background: "#FFFFFF",
    sheetBackground: "#FFFFFF",
    primaryText: "#000000",
    secondaryText: "#262626",
    mobileMenuBackground: "#d9d9d9",
    loadingScreenBackground: "rgba(255, 255, 255, 0.5)",
  },
};

export default themes;
