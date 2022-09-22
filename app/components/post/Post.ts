enum PostAttributes {
    username = 'username',
    userpic = 'userpic',
    userpostpic = 'userpostpic',
    location = 'location',
    likes = 'likes',
    postcaption = 'postcaption',
    commentuser = 'commentuser',
    comment = 'comment',
    posttime = 'posttime'
}

class Post extends HTMLElement {
    username = '';
    userpic = '';
    userpostpic = '';
    location = '';
    likes = '';
    postcaption = '';
    commentuser ='';
    comment = '';
    posttime = '';

    static get observedAttributes(): PostAttributes[]{
        return Object.keys(PostAttributes) as PostAttributes[];
    }

    attributeChangedCallback(prop: PostAttributes, _: string, newValue: string): void {
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
