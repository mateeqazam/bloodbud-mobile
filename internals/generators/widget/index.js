/**
 * Widget Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const widgetExists = componentExists.widgetExists;

module.exports = {
  description: 'Add a widget in components directory',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of widget',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return widgetExists(value)
            ? 'A widget with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and styles.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './templates/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './templates/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './templates/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './templates/es6.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/components/widgets/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/widgets/{{properCase name}}/styles.js',
        templateFile: './templates/styles.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
