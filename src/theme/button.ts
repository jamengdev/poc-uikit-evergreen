//@ts-nocheck

export const button = {
  appearances: {
    highEmphasis: {
      backgroundColor: (theme, props) => `${theme.colors.brandOne}`,
      color: "#ffffff",
      _hover: {
        backgroundImage: " linear-gradient(to right, #23B4C3, #19838C)",
        _disabled: {
          backgroundColor: (theme, props) => `${theme.colors.brandOne}`,
        },
      },
    },
    midEmphasis: {
      backgroundColor: (theme, props) => `${theme.colors.brandTwo}`,
      color: "#373737",
      _hover: {
        backgroundColor: (theme, props) => `${theme.colors.brandTwo}`,
        backgroundImage:
          "linear-gradient(to right, rgba(222, 246, 252, 0.8), rgba(123, 210, 219, 0.8))",
        _disabled: {
          backgroundColor: (theme, props) => `${theme.colors.brandTwo}`,
        },
      },
    },
    lowEmphasis: {
      backgroundColor: "#FFFFFF",
      border: "2px solid",
      borderColor: (theme, props) => `${theme.colors.brandOne}`,
      color: (theme, props) => `${theme.colors.brandOne}`,
      _hover: {
        backgroundColor: "#FFFFFF",
        backgroundImage: "linear-gradient(to right, #DEF6FC, #7BD2DB)",
        _disabled: {
          backgroundColor: (theme, props) => `${theme.colors.brandTwo}`,
        },
      },
    },
  },
  baseStyle: {
    color: "white",
    paddingX: 12,
    paddingY: 8,
    borderRadius: 5,
    backgroundColor: "indianred",
    border: "0",
    _hover: {
      //   backgroundColor: "firebrick",
    },
    _active: {
      //   backgroundColor: "darkred",
    },
    _focus: {
      //   boxShadow: "0 0 0 2px lightcoral",
    },
    _disabled: {
      opacity: 0.4,
    },
  },
  sizes: {
    small: {
      fontSize: "fontSizes.1",
      minWidth: 56,
    },
    medium: {
      fontSize: "fontSizes.3",
      minWidth: 80,
    },
    large: {
      fontSize: "fontSizes.3",
      minWidth: 96,
    },
  },
};
