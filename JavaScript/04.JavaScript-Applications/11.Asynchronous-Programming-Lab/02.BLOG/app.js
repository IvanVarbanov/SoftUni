function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const posts = document.getElementById('posts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postCommentsUl = document.getElementById('post-comments');

    btnLoadPosts.addEventListener('click', async () => {
        try {
            let res = await fetch('https://blog-apps-c12bf.firebaseio.com/posts/.json');

            if (res.status !== 200) {
                throw res;
            }

            let data = await res.json();
            posts.innerHTML = '';
            let dataArr = Object.entries(data).forEach((el) => {
                const option = document.createElement('option');
                option.value = el[0];
                option.textContent = el[1].title;
                posts.appendChild(option);
            });
        } catch (error) {
            alert(error);
        }
    });

    btnViewPost.addEventListener('click', async () => {
        const postsId = posts.value;
        // console.log(postsId);

        try {
            let res = await fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${postsId}/.json`);

            if (res.status !== 200) {
                throw res;
            }

            let data = await res.json();
            console.log(data);

            postTitle.textContent = data.title;
            postBody.textContent = data.body;

            let commentsRes = await fetch(`https://blog-apps-c12bf.firebaseio.com/comments/.json`);
            if (commentsRes.status !== 200) {
                throw commentsRes;
            }

            let commentsData = Object.entries(await commentsRes.json());
            console.log(commentsData);

            commentsData.forEach((el) => {
                if (postsId !== el[1].postId) {
                    let li = document.createElement('li');
                    li.textContent = el[1].text;
                    postCommentsUl.appendChild(li);
                }
            });
        } catch (error) {
            alert(error);
        }
    });
}

attachEvents();
