var SuggestionAttributes;
(function (SuggestionAttributes) {
    SuggestionAttributes["suggestionusername"] = "suggestionusername";
    SuggestionAttributes["suggestionuserpic"] = "suggestionuserpic";
})(SuggestionAttributes || (SuggestionAttributes = {}));
class Suggestion extends HTMLElement {
    constructor() {
        super();
        this.suggestionusername = '';
        this.suggestionuserpic = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(SuggestionAttributes);
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
        <section>
        </section>
        `;
    }
}
customElements.define('my-suggestion', Suggestion);
export default Suggestion;
