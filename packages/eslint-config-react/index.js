module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
