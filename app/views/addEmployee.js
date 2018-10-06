import employeesCollection from '../collections/employees.js';

const AddEmployeeView = Marionette.View.extend({
    template: _.template(`
    <div class="main__container__header">Add Employee</div>
    <div class="add__employee__container">
      <div class="add__employee__form">
        <label>First Name</label>
        <input id="employee_first_name" type="text" name="employee_first_name">
        <label>Last Name</label>
        <input id="employee_last_name" type="text" name="employee_last_name">
        <label>Age</label>
        <input id="employee_age" type="text" name="employee_age">
        <label>Position</label>
        <input id="employee_position" type="text" name="employee_position">
        <button id="submit" value="Add Employee">Add Employee</button>
       </div>
    </div>`),
    events: {
        "click #submit": "addEmployee"
    },
    callback(collection, response) {
        //handle response
        // $('#employee_first_name').val('');
        // $('#employee_last_name').val('');
        // $('#employee_position').val('');
        // $('#employee_age').val('');
        // Backbone.history.navigate('/employees', true);
    },
    addEmployee(e) {
        e.preventDefault();
        const firstName = $('#employee_first_name').val().trim();
        if (!firstName) {
            $('#employee_first_name').addClass('error');
        } else {
            $('#employee_first_name').removeClass('error');
        }
        const lastName = $('#employee_last_name').val().trim();
        if (!lastName) {
            $('#employee_last_name').addClass('error');
        } else {
            $('#employee_last_name').removeClass('error');
        }
        const position = $('#employee_position').val().trim();
        if (!position) {
            $('#employee_position').addClass('error');
        } else {
            $('#employee_position').removeClass('error');
        }
        const age = $('#employee_age').val().trim();
        if (!age) {
            $('#employee_age').addClass('error');
        } else {
            $('#employee_age').removeClass('error');
        }
        if (firstName && lastName && age && position && age) {

            employeesCollection.create({
                firstName,
                lastName,
                position,
                age
            }, { wait: true, success: this.callback });

            $('#employee_first_name').val('');
            $('#employee_last_name').val('');
            $('#employee_position').val('');
            $('#employee_age').val('');
            Backbone.history.navigate('/employees', true);

        } else {
            console.log('cannot save');
        }
    }
});
export default AddEmployeeView;