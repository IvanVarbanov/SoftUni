class Article {
    #comments = [];
    #likes = {
        num: 0,
        users: [],
    };

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.num === 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.num === 1) {
            return `${this.#likes.users[0]} likes this article!`;
        } else {
            return `${this.#likes.users[0]} and ${this.#likes.num - 1} others like this article!`;
        }
    }

    isExist(username) {
        let isExist = false;
        for (const user of this.#likes.users) {
            if (username === user) {
                isExist = true;
                break;
            }
        }

        return isExist;
    }

    like(username) {
        if (this.isExist(username)) {
            throw Error("You can't like the same article twice!");
        }

        if (username === this.creator) {
            throw Error("You can't like your own articles!");
        }

        ++this.#likes.num;

        this.#likes.users.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this.isExist(username) === false) {
            throw Error("You can't dislike this article!");
        }

        --this.#likes.num;
        this.#likes.users = this.#likes.users.filter((user) => user !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let isExistId = false;
        for (const comment of this.#comments) {
            if (comment.id === id) {
                isExistId = true;
                comment.replies.push({
                    id: `${comment.id}.${comment.replies.length + 1}`,
                    username,
                    content,
                });
                return 'You replied successfully';
            }
        }

        if (id === undefined || isExistId === false) {
            this.#comments.push({
                id: this.#comments.length + 1,
                username,
                content,
                replies: [],
            });
            return `${username} commented on ${this.title}`;
        }
    }

    toString(sortType) {
        if (sortType === 'desc') {
            for (const comment of this.#comments) {
                comment.replies.reverse();
            }
            this.#comments.reverse();
        } else if (sortType === 'username') {
            for (const comment of this.#comments) {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            }
            this.#comments.sort((a, b) => a.username.localeCompare(b.username));
        }

        let output = [
            [`Title: ${this.title}`],
            [`Creator: ${this.creator}`],
            [`Likes: ${this.#likes.num}`],
            ['Comments:'],
        ];

        for (const comment of this.#comments) {
            output.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            if (comment.replies.length > 0) {
                for (const rep of comment.replies) {
                    output.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`);
                }
            }
        }

        return output.join('\n');
    }

    show() {
        return this.#comments;
    }
}

let art = new Article('My Article', 'Anny');

art.like('John');
console.log(art.likes);
art.dislike('John');
console.log(art.likes);

art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));

console.log(art.show());

art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));

console.log(art.show());

console.log();
console.log(art.toString('username'));

console.log();
art.like('Zane');
console.log(art.toString('desc'));
