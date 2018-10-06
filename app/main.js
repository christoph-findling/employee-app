import MainRouter from "./router.js";

const App = Marionette.Application.extend({

  initialize() {
    // console.log("init app");
  },
  onStart() {
    let router = new MainRouter();
    Backbone.history.start();
  }
});

const myApp = new App();
myApp.start();