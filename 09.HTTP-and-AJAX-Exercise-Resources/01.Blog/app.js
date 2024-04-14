function attachEvents() {

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsUrl = 'http://localhost:3030/jsonstore//blog/comments'

    const loadPostsbutton = document.getElementById('btnLoadPosts')
    const selectButton = document.getElementById('posts');
    const viewButton = document.getElementById('btnViewPost')
    const postBodyElement = document.getElementById('post-body')
    const commentListElement = document.getElementById('post-comments')
    const postTitleElement = document.getElementById('post-title')

    loadPostsbutton.addEventListener('click', (e) => {
        selectButton.innerHTML = ''
        
        fetch(postsUrl)
        .then(response => response.json())
        .then(posts => {
            Object.values(posts)
                .forEach(post => {
                    const optionElement = document.createElement('option')
                    optionElement.value = post.id
                    optionElement.textContent = post.title

                    selectButton.appendChild(optionElement)


                })
        })
    })

    viewButton.addEventListener('click', async () =>{
        commentListElement.innerHTML = ''
        const selectedPostId = selectButton.value

        const responce = await fetch(`${postsUrl}/${selectedPostId}`)
        const selectedPost = await responce.json()

        postBodyElement.textContent = selectedPost.body
        postTitleElement.textContent = selectedPost.title
        
        const commentsResponse = await fetch(commentsUrl)
        const comments = await commentsResponse.json()
        const commentsFragment = document.createDocumentFragment()

        Object.values(comments)
            .filter(comment  => comment.postId === selectedPostId)
            .forEach(comment => {
                const liElement = document.createElement('li')
                liElement.id = comment.id
                liElement.textContent = comment.text
                
                commentsFragment.appendChild(liElement)
            })
        
        commentListElement.appendChild(commentsFragment)

    })

    }

    

attachEvents();