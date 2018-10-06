import SingleEmployeeCollection from '../collections/singleEmployee.js';
import EmployeeSingleCollectionView from '../views/employeeSingleCollection.js';

import { URL } from '../../config.js';

const EmployeeSingleViewContainer = Marionette.View.extend({
    tagName: "div",
    template: _.template(`
        <div class="main__container__header">My Employees</div><div id="employee__single__container"></div>
        <div class="back__button__container"><a href="${URL}/#employees"><div class="back__button"><i class="fas fa-caret-left"></i>Back</div></a></div>
    `),
    regions: {
        employeeContainer: "#employee__single__container"
    },
    initialize: function (options) {
        this.Employee = new SingleEmployeeCollection();
        this.Employee.id = options.id;
        this.Employee.fetch();
    },
    onRender() {
        this.showChildView(
            "employeeContainer",
            new EmployeeSingleCollectionView({ collection: this.Employee })
        );
    }
});

export default EmployeeSingleViewContainer;