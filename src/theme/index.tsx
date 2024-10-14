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
  },
  light: {
    background: "#FFFFFF",
    sheetBackground: "",
    primaryText: "#000000",
    secondaryText: "#262626"
  },
};

export default themes;
