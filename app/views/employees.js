import EmployeeView from "./employee.js";
import EmptyView from "./empty.js";

const EmployeesCollectionView = Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'grid__container',
  childView: EmployeeView,
  emptyView: EmptyView
});

export default EmployeesCollectionView;
