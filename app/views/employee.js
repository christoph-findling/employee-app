import { URL } from '../../config.js';

const EmployeeView = Marionette.View.extend({
  className: 'employee__container',
  template: _.template(`
  <div class="show__employee__delete"><i class="fas fa-times"></i></div>
  <a href="${URL}/#employee/<%- id %>">
  <div class="employee__clickable">
  <div class="employee__image"><i class="fas fa-user"></i></div>
  <div class="employee__id">id: <%- id %></div><div class="employee__name">
  <%- firstName %> <%- lastName %>, <%- age %>
  <div class="employee__position"><%- position %></div>
  </div>
  </a>
  <div class="delete__prompt__blur" id="<%- id %>"  >
  <div class="delete__prompt">
  <div class="text">Are you sure you want to delete <%- firstName %> <%- lastName %>?
  </div>
  <button class="delete__employee">Delete Employee</button>
  <button class="close__prompt">No</button>
  </div></div>
  `),
  events: {
    'click .show__employee__delete': 'showDeletePrompt',
    'click .delete__employee': 'deleteEmployee',
    'click .close__prompt': 'closePrompt'
  },
  showDeletePrompt: function (employee) {
    $('.delete__prompt__blur#' + this.model.id + '').addClass('show');
  },
  deleteEmployee: function () {
    this.model.destroy();
    $('.delete__prompt__blur#' + this.model.id + '').removeClass('show');
  },
  closePrompt: function () {
    $('.delete__prompt__blur#' + this.model.id + '').removeClass('show');
  }
});

export default EmployeeView;