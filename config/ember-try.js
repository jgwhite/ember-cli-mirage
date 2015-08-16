module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-1.13.2',
      dependencies: {
        'ember': '1.13.2',
        'ember-data': '1.13.2'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release',
        'ember-data': 'v2.0.0-beta.2'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
