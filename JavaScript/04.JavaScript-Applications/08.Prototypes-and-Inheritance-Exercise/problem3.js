function solve() {
    class Post {
        title;
        content;
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [`Post: ${this.title}`, `Content: ${this.content}`].join('\n');
        }
    }

    class SocialMediaPost extends Post {
        likes;
        dislikes;
        comments = [];
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment(comment) {
            this.comments.push(comment);
        }
    }

    let post = new Post('Post', 'Content');

    console.log(post.toString());

    // Post: Post
    // Content: Content

    let scm = new SocialMediaPost('TestTitle', 'TestContent', 25, 30);

    scm.addComment('Good post');
    scm.addComment('Very good post');
    scm.addComment('Wow!');

    console.log(scm.toString());

    // Post: TestTitle
    // Content: TestContent
    // Rating: -5
    // Comments:
    //  * Good post
    //  * Very good post
    //  * Wow!
}
solve();
