import HeaderView from "../views/header.js";
import FooterView from "../views/footer.js";
import HomeView from "../views/home.js";

const RootView = Marionette.View.extend({
    tagName: "div",
    className: "root",
    template: _.template(
        '<header id="header">header</header><div class="main__container"><div id="main">First region</div></div><footer id="footer">First region</footer>'
    ),

    regions: {
        header: "#header",
        main: "#main",
        footer: "#footer"
    },

    onRender() {
        this.showChildView("header", new HeaderView());
        this.showChildView(
            "main",
            new HomeView()
        );
        this.showChildView("footer", new FooterView());
    }
});

export default RootView;