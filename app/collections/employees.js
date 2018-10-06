import Employee from "../models/employee.js";
import { URL_DB } from '../../config.js';

const EmployeesCollection = Backbone.Collection.extend({
  model: Employee,
  url: URL_DB + '/employees',
  parse: function (response) {
    return response;
  }
});

const employeesCollection = new EmployeesCollection();
employeesCollection.fetch();
export default employeesCollection;
