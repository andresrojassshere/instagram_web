class Header extends HTMLElement {

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
        <link rel="stylesheet" href="/components/header/header.css"
        
        <section>

        <div class="navigationbar">
        <div class="header">
        <img src="images/header/instagramlogo.png" class="logo">
        <input type="text" class="searchbox" placeholder="search">
            <div class="headericons">
            <img src="images/header/homeicon.png" class="icons">
            <img src="images/header/messageicon.png" class="icons">
            <img src="images/header/addicon.png" class="icons">
            <img src="images/header/exploreicon.png" class="icons">
            <img src="images/header/likeicon.png" class="icons">
            <img src="images/header/profilepic.png" class="userprofile">
            </div>
            </div>
        </div>
        </div>
        
        
        </section>
        `;
    }
}

customElements.define('my-header', Header);
export default Header;
