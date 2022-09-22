enum HistoriesAttributes {
    username = 'username',
    userpic = 'userpic',

    username2 = 'username2',
    userpic2 = 'userpic2',

    username3 = 'username3',
    userpic3 = 'userpic3',
 
    username4 = 'username4',
    userpic4 = 'userpic4',
 
    username5 = 'username5',
    userpic5 = 'userpic5',
    
    username6 = 'username6',
    userpic6 = 'userpic6',

    username7 = 'username7',
    userpic7 = 'userpic7',

    username8 = 'username8',
    userpic8 = 'userpic8',
}

class Histories extends HTMLElement {
    
    username = '';
    userpic = '';

    username2 = '';
    userpic2 = '';

    username3 = '';
    userpic3 = '';

    username4 = '';
    userpic4 = '';

    username5 = '';
    userpic5 = '';

    username6 = '';
    userpic6 = '';

    username7 = '';
    userpic7 = '';

    username8 = '';
    userpic8 = '';

    static get observedAttributes(): HistoriesAttributes[]{
        return Object.keys(HistoriesAttributes) as HistoriesAttributes[];
    }

    attributeChangedCallback(prop: HistoriesAttributes, _: string, newValue: string): void {
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
