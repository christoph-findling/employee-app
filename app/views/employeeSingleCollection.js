import EmployeeSingleView from "./employeeSingleView.js";

const EmployeeSingleCollectionView = Marionette.CollectionView.extend({
    tagName: 'div',
    childView: EmployeeSingleView
});

export default EmployeeSingleCollectionView;