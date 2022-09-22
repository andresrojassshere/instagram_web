var SuggestionAttributes;
(function (SuggestionAttributes) {
    SuggestionAttributes["suggestionusername"] = "suggestionusername";
    SuggestionAttributes["suggestionfollowtoo"] = "suggestionfollowtoo";
    SuggestionAttributes["suggestionuserpic"] = "suggestionuserpic";
    SuggestionAttributes["suggestionusername2"] = "suggestionusername2";
    SuggestionAttributes["suggestionfollowtoo2"] = "suggestionfollowtoo2";
    SuggestionAttributes["suggestionuserpic2"] = "suggestionuserpic2";
    SuggestionAttributes["suggestionusername3"] = "suggestionusername3";
    SuggestionAttributes["suggestionfollowtoo3"] = "suggestionfollowtoo3";
    SuggestionAttributes["suggestionuserpic3"] = "suggestionuserpic3";
    SuggestionAttributes["suggestionusername4"] = "suggestionusername4";
    SuggestionAttributes["suggestionfollowtoo4"] = "suggestionfollowtoo4";
    SuggestionAttributes["suggestionuserpic4"] = "suggestionuserpic4";
    SuggestionAttributes["suggestionusername5"] = "suggestionusername5";
    SuggestionAttributes["suggestionfollowtoo5"] = "suggestionfollowtoo5";
    SuggestionAttributes["suggestionuserpic5"] = "suggestionuserpic5";
})(SuggestionAttributes || (SuggestionAttributes = {}));
class Suggestion extends HTMLElement {
    constructor() {
        super();
        this.suggestionusername = '';
        this.suggestionfollowtoo = '';
        this.suggestionuserpic = '';
        this.suggestionusername2 = '';
        this.suggestionfollowtoo2 = '';
        this.suggestionuserpic2 = '';
        this.suggestionusername3 = '';
        this.suggestionfollowtoo3 = '';
        this.suggestionuserpic3 = '';
        this.suggestionusername4 = '';
        this.suggestionfollowtoo4 = '';
        this.suggestionuserpic4 = '';
        this.suggestionusername5 = '';
        this.suggestionfollowtoo5 = '';
        this.suggestionuserpic5 = '';
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
        <link rel="stylesheet" href="/components/suggestion/suggestion.css">
        
        <div class="container"> 
            <div class="followersuggestions"> 

            <p class="suggestiontittle"> Suggestions for you </p>

                <div class="suggestion1">
                    <img src="${this.suggestionuserpic}" class="fotodeperfil">
                    <p> <b>${this.suggestionusername}</b> ${this.suggestionfollowtoo} </p>
                </div>

                <div class="suggestion2">
                    <img src="${this.suggestionuserpic2}" class="fotodeperfil">
                    <p> <b>${this.suggestionusername2}</b> ${this.suggestionfollowtoo2} </p>
                </div>

                <div class="suggestion3">
                    <img src="${this.suggestionuserpic3}" class="fotodeperfil">
                    <p> <b>${this.suggestionusername3}</b> ${this.suggestionfollowtoo3} </p>
                </div>

                <div class="suggestion4">
                    <img src="${this.suggestionuserpic4}" class="fotodeperfil">
                    <p> <b>${this.suggestionusername4}</b> ${this.suggestionfollowtoo4} </p>
                </div>

                <div class="suggestion5">
                    <img src="${this.suggestionuserpic5}" class="fotodeperfil">
                    <p> <b>${this.suggestionusername5}</b> ${this.suggestionfollowtoo5} </p>
                </div>



            </div>
        </div>
        </section>
        `;
    }
}
customElements.define('my-suggestion', Suggestion);
export default Suggestion;
