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
  },
  light: {
    background: "#FFFFFF",
    sheetBackground: "",
    primaryText: "#000000",
    secondaryText: "#262626",
    mobileMenuBackground: "#d9d9d9",
  },
};

export default themes;
