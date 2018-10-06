const HeaderView = Marionette.View.extend({
  className: 'header',
  template: _.template(`<a href="http://127.0.0.1:5500/#home"><h1>employees</h1></a>
  <div class="spacer"/>
  <a href="http://127.0.0.1:5500/#employees"><i class="fas fa-user"></i></a>
  <a href="http://127.0.0.1:5500/#add-employee"><i class="fas fa-plus-circle"></i></a>`)
});

export default HeaderView;
