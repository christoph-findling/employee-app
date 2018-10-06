import employeesCollection from '../collections/employees.js';

const EmployeeSingleView = Marionette.View.extend({
    className: 'employee__single',
    template: _.template(`
 
    <div class="employee__image"><i class="fas fa-user"></i></div>
    <table>
        <tbody>
            <tr>
                <td>id:</td><td id="table-id" value="<%- id %>"> <%- id %></td>
            </tr>
            <tr>
                <td>First Name:</td>
                <td id="firstName-col" ><div id="firstName" ><%- firstName %></div><input id="firstName-input" class="hide" name="firstName" value="<%- firstName %>"/></td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td id="lastName-col"><div id="lastName" ><%- lastName %></div><input id="lastName-input" class="hide" name="lastName" value="<%- lastName %>"/></td></td>
            </tr>
            <tr>
                 <td>Age:</td>
                 <td id="age-col"><div id="age" ><%- age %></div><input id="age-input" class="hide" name="age" value="<%- age %>"/></td></td>
                 </tr>
            <tr>
                <td>Position:</td>
                <td id="position-col"><div id="position" ><%- position %></div><input id="position-input" class="hide" name="position" value="<%- position %>"/></td></td>
            </tr>
    </tbody>
    </table>
 `),
    events: {
        'click .employee__delete': 'deleteEmployee',
        'click #firstName': 'toggleInput',
        'click #lastName': 'toggleInput',
        'click #age': 'toggleInput',
        'click #position': 'toggleInput'
    },
    deleteEmployee: function (employee) {
        this.model.destroy({
            success: function (model, response) {
                Backbone.history.navigate('/employees', true);
            }
        });
    },
    toggleInput: function (e) {
        let el = e.target.id;
        $('#' + el).addClass('hide');
        $('#' + el + '-input').removeClass('hide').focus();
        $('#' + el + '-input').blur(function () {
            checkInput(el);
        });
        $('#' + el + '-input').on('keyup', function (e) {
            if (e.keyCode == 13) {
                checkInput(el);
            }
        });

        const checkInput = function (el) {
            let value = $('#' + el + '-input').val().trim();
            let currentValue = $('#' + el).text();
            if (value !== '') {
                $('#' + el).text(value);
                $('#' + el).removeClass('hide');
                $('#' + el + '-input').addClass('hide');
                if (value !== currentValue) {
                    let val = parseInt($('#table-id').attr('value').trim());
                    let model = employeesCollection.findWhere({ id: val });
                    model.set({ [el]: value });
                    employeesCollection.sync("update", model);
                }
            } else {
            }
        }
    }
});

export default EmployeeSingleView;