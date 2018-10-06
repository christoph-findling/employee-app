import { URL_DB } from '../../config.js';

const Employee = Backbone.Model.extend({
  urlRoot: URL_DB + '/employees'
});

export default Employee;
