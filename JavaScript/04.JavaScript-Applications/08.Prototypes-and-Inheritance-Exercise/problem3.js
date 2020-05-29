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

        toString() {
            let output = [`Post: ${this.title}`, `Content: ${this.content}`, `Rating: ${this.likes - this.dislikes}`];

            if (this.comments.length > 0) {
                output.push('Comments:');
                this.comments.forEach((el) => {
                    output.push(` * ${el}`);
                });
            }

            return output.join('\n');
        }
    }

    class BlogPost extends Post {
        views;
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return [`Post: ${this.title}`, `Content: ${this.content}`, `Views: ${this.views}`].join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };

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

    let test = new BlogPost('TestTitle', 'TestContent', 5);
    test.view().view().view();
    console.log(test.toString());
}
solve();
