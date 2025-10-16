function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post comment data fetched")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...")
        // const PostData = await fetchPostData()
        // const CommentData = await fetchCommentData()

        // better
        const [PostData, CommentData] = await Promise.all([fetchPostData(), fetchCommentData()])

        console.log(PostData)
        console.log(CommentData)
        console.log("Fetching blog data successfully")


    } catch (error) {
        console.error("error fetching data ", error)
    }
}
getBlogData()

