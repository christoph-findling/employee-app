import EmployeesCollectionView from "./employees.js";
import employeesCollection from "../collections/employees.js";

const DashboardView = Marionette.View.extend({
    tagName: "div",
    template: _.template(`
        <div class="main__container__header">My Employees</div><div id="employees__container"></div>
        
    `),
    regions: {
        header: "#header",
        employeeContainer: "#employees__container"
    },
    initialize() {
        //this.listenTo(employeesCollection, 'change', this.render);
    },
    onRender() {
        this.showChildView(
            "employeeContainer",
            new EmployeesCollectionView({ collection: employeesCollection })
        );
    }
});

export default DashboardView;
