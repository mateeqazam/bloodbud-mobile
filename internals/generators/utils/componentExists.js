/**
 * componentExists
 *
 * Check whether the given component exists in corresponding directory
 */

const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const views = fs.readdirSync(path.join(__dirname, '../../../app/components/views'));
const widgets = fs.readdirSync(path.join(__dirname, '../../../app/components/widgets'));
const containers = fs.readdirSync(path.join(__dirname, '../../../app/containers'));

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

function viewExists(comp) {
  return views.indexOf(comp) >= 0;
}

function widgetExists(comp) {
  return widgets.indexOf(comp) >= 0;
}

function containerExists(comp) {
  return containers.indexOf(comp) >= 0;
}

module.exports = {
  componentExists,
  viewExists,
  widgetExists,
  containerExists,
};
