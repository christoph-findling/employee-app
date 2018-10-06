import RootView from "./views/root.js";
import HomeView from "./views/home.js";
import AddEmployeeView from "./views/addEmployee.js";
import EmployeeDashboardView from "./views/employeeDashboard.js";
import EmployeeSingleViewContainer from "./views/employeeSingleViewContainer.js";

let MainRouter = Backbone.Router.extend({
    routes: {
        "/#": "employeesRoute",
        "home": "employeesRoute",
        "employees": "employeesRoute",
        "employee/:id": "employeeRoute",
        "add-employee": "addEmployeeRoute",
        "*actions": "defaultRoute"
    },
    initialize() {
        this.rootView = new RootView({ el: $("#mainregion") });
        this.rootView.render();
    },
    employeeRoute(id) {
        this.employeeSingleView = new EmployeeSingleViewContainer({ el: $('#main'), id });
        this.employeeSingleView.render();
    },
    employeesRoute: function () {
        this.employeeDashboardView = new EmployeeDashboardView({ el: $('#main') });
        this.employeeDashboardView.render();
    },
    addEmployeeRoute: function () {
        this.addEmployeeView = new AddEmployeeView({ el: $("#main") });
        this.addEmployeeView.render();
    },
    homeRoute: function () {
        this.homeView = new HomeView({ el: $("#main") });
        this.homeView.render();
    }
});

export default MainRouter;
