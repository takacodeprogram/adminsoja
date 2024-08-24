import logo from "./extensions/logo.png";
import dashboard from "./extensions/dashboard.png"

const config = {
  auth: {
    logo: logo,
  },

  head: {
    favicon: dashboard,
  },

  menu: {
    logo: dashboard,
  },

  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: "#e6f7e6", // Vert très clair
        primary200: "#b3e6b3", // Vert clair
        primary500: "#66cc66", // Vert moyen
        primary600: "#4db84d", // Vert plus soutenu
        primary700: "#339933", // Vert foncé
        danger700: "#b72b1a", // Couleur de danger inchangée
      },
    },
  },

  tutorials: false,

  notifications: { releases: false },

  locales: ["en", "fr"],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
