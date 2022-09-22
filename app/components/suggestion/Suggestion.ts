enum SuggestionAttributes {
    suggestionusername = 'suggestionusername',
    suggestionfollowtoo = 'suggestionfollowtoo',
    suggestionuserpic = 'suggestionuserpic',

    suggestionusername2 = 'suggestionusername2',
    suggestionfollowtoo2 = 'suggestionfollowtoo2',
    suggestionuserpic2 = 'suggestionuserpic2',

    suggestionusername3 = 'suggestionusername3',
    suggestionfollowtoo3 = 'suggestionfollowtoo3',
    suggestionuserpic3 = 'suggestionuserpic3',

    suggestionusername4 = 'suggestionusername4',
    suggestionfollowtoo4 = 'suggestionfollowtoo4',
    suggestionuserpic4 = 'suggestionuserpic4',

    suggestionusername5 = 'suggestionusername5',
    suggestionfollowtoo5 = 'suggestionfollowtoo5',
    suggestionuserpic5 = 'suggestionuserpic5',
}

class Suggestion extends HTMLElement {
    suggestionusername = '';
    suggestionfollowtoo = '';
    suggestionuserpic = '';

    suggestionusername2 = '';
    suggestionfollowtoo2 = '';
    suggestionuserpic2 = '';

    suggestionusername3 = '';
    suggestionfollowtoo3 = '';
    suggestionuserpic3 = '';

    suggestionusername4 = '';
    suggestionfollowtoo4 = '';
    suggestionuserpic4 = '';

    suggestionusername5 = '';
    suggestionfollowtoo5 = '';
    suggestionuserpic5 = '';

    static get observedAttributes(): SuggestionAttributes[]{
        return Object.keys(SuggestionAttributes) as SuggestionAttributes[];
    }

    attributeChangedCallback(prop: SuggestionAttributes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(): void{
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) return;
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
