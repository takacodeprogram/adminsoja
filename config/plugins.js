module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000, // Limite de taille en bytes (facultatif)
      },
      actionOptions: {
        upload: {
          folder: './public/uploads', // Chemin personnalisé pour les fichiers
        },
        delete: {},
      },
    },
  },
});
