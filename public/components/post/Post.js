var PostAttributes;
(function (PostAttributes) {
    PostAttributes["username"] = "username";
    PostAttributes["userpic"] = "userpic";
    PostAttributes["userpostpic"] = "userpostpic";
    PostAttributes["location"] = "location";
    PostAttributes["likes"] = "likes";
    PostAttributes["postcaption"] = "postcaption";
    PostAttributes["commentuser"] = "commentuser";
    PostAttributes["comment"] = "comment";
    PostAttributes["posttime"] = "posttime";
})(PostAttributes || (PostAttributes = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.userpic = '';
        this.userpostpic = '';
        this.location = '';
        this.likes = '';
        this.postcaption = '';
        this.commentuser = '';
        this.comment = '';
        this.posttime = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(PostAttributes);
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
        <link rel="stylesheet" href="/components/post/post.css"
       
        <section>
    
                <div class="post">
                    <div class="postheader">
                        <div class="userpost">
                            <div class="profilepic"><img src="${this.userpic}"></div>
                            <p class="username"><b>${this.username}</b></p>
                        </div>
                    </div>
                    <img src="${this.userpostpic}" class="imagepost">
                    <div class="postelements">
                        <div class="interactionicons">
                            <img src="images/post/likeicon.png" class="icon">
                            <img src="images/post/commentsicon.png" class="icon">
                            <img src="images/post/sendicon.png" class="icon">
                            <img src="images/post/saveicon.png" class="icon">
                        </div>
                        <p class="likes">${this.likes} likes</p>
                        <p class="description"> <b> ${this.username} </b>  ${this.postcaption}</p>
                        <p class="comments"> <b> ${this.commentuser} </b>  ${this.comment}</p>
                        <p class="posttime">${this.posttime} minutes ago </p>
                    </div>
                </div>
    </section>
        `;
    }
}
customElements.define('my-post', Post);
export default Post;
