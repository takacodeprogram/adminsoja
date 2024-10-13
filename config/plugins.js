module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000, // Limite de taille en octets
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
