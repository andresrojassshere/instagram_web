var HistoriesAttributes;
(function (HistoriesAttributes) {
    HistoriesAttributes["username"] = "username";
    HistoriesAttributes["userpic"] = "userpic";
    HistoriesAttributes["username2"] = "username2";
    HistoriesAttributes["userpic2"] = "userpic2";
    HistoriesAttributes["username3"] = "username3";
    HistoriesAttributes["userpic3"] = "userpic3";
    HistoriesAttributes["username4"] = "username4";
    HistoriesAttributes["userpic4"] = "userpic4";
    HistoriesAttributes["username5"] = "username5";
    HistoriesAttributes["userpic5"] = "userpic5";
    HistoriesAttributes["username6"] = "username6";
    HistoriesAttributes["userpic6"] = "userpic6";
    HistoriesAttributes["username7"] = "username7";
    HistoriesAttributes["userpic7"] = "userpic7";
    HistoriesAttributes["username8"] = "username8";
    HistoriesAttributes["userpic8"] = "userpic8";
})(HistoriesAttributes || (HistoriesAttributes = {}));
class Histories extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.userpic = '';
        this.username2 = '';
        this.userpic2 = '';
        this.username3 = '';
        this.userpic3 = '';
        this.username4 = '';
        this.userpic4 = '';
        this.username5 = '';
        this.userpic5 = '';
        this.username6 = '';
        this.userpic6 = '';
        this.username7 = '';
        this.userpic7 = '';
        this.username8 = '';
        this.userpic8 = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(HistoriesAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/histories/histories.css"

        <section>
        <section class="main">
            <div class="historiesbar">
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic}"></div>
                    <p class="username">${this.username}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic2}"></div>
                    <p class="username">${this.username2}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic3}"></div>
                    <p class="username">${this.username3}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic4}"></div>
                    <p class="username">${this.username4}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic5}"></div>
                    <p class="username">${this.username5}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic6}"></div>
                    <p class="username">${this.username6}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic7}"></div>
                    <p class="username">${this.username7}</p>
                </div>
                <div class="histories">
                    <div class="profilepic"><img src="${this.userpic8}"></div>
                    <p class="username">${this.username8}</p>
                </div>
</section>
        </section>
        `;
    }
}
customElements.define('my-histories', Histories);
export default Histories;
