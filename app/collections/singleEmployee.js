import Employee from '../models/employee.js';

const SingleEmployeeCollection = Backbone.Collection.extend({
    id: '',
    model: Employee,
    url: function () {
        return 'http://localhost:3000/employees/' + this.id;
    },
    parse: function (response) {
        return response;
    }
})
export default SingleEmployeeCollection;