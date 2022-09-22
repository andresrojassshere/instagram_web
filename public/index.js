console.log("funcionando ando");
import "./components/index.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `

        <my-header username="andresrojassshere"> </my-header>

        <my-histories userpic="./images/histories/historie1.png"
        username="marto_kane"
        
        userpic2="./images/histories/historie2.png"
        username2="isabella_02"
        
        userpic3="./images/histories/historie3.png"
        username3="isa_salazar0910"
        
        userpic4="./images/histories/historie4.png"
        username4="danaaa_gc"
        
        userpic5="./images/histories/historie5.png"
        username5="pipe_lenisf"
        
        userpic6="./images/histories/historie6.png"
        username6="marianaao_o"
        
        userpic7="./images/histories/historie7.png"
        username7="sohpie_nxz"
        
        userpic8="./images/histories/historie8.png"
        username8="zia_karent"> </my-histories>
        
        
        <my-post username="andresrojassshere"
        location="neiva-huila"
        userpic="./images/post/profilepic.png"
        userpostpic="./images/post/post.png"
        likes=707
        postcaption="cool pic of silva"
        commentuser="isabella_02"
        comment="thankx for the pic"
        posttime="3"> </my-post>

        <my-post username="marto_kane"
        location="neiva-huila"
        userpic="./images/post/profilepic2.png"
        userpostpic="./images/post/post2.png"
        likes=504
        postcaption="lol"
        
        commentuser="andresrojassshere"
        comment="i hate u :("
        posttime="54"> </my-post>

        <my-post username="andresrojassshere"
        location="neiva-huila"
        userpic="./images/post/profilepic.png"
        userpostpic="./images/post/post3.png"
        likes=231
        postcaption="lol x2"
        commentuser="marto_kane"
        comment="xd"
        posttime="59"> </my-post>

        <my-suggestion  suggestionusername = "estebanperez_07" 
        suggestionfollowtoo="sophie_nyu and 12 others"
        suggestionuserpic="./images/suggestions/profile1.png"

        suggestionusername2 = "juanrojas_uwu" 
        suggestionfollowtoo2 ="mariana_ocampo and 25 others"
        suggestionuserpic2="./images/suggestions/profile2.png"

        suggestionusername3 = "juan_davidmar" 
        suggestionfollowtoo3 ="mariana_ocampo and 46 others"
        suggestionuserpic3="./images/suggestions/profile3.png"

        suggestionusername4 = "mer_mercado" 
        suggestionfollowtoo4 ="sophie_nyu and 3 others"
        suggestionuserpic4="./images/suggestions/profile4.png"

        suggestionusername5 = "upa_cholupa_neiva" 
        suggestionfollowtoo5 ="isabellasilva_02"
        suggestionuserpic5="./images/suggestions/profile5.png"> </my-suggestion>
        
        `;
    }
}
customElements.define("app-container", AppContainer);
