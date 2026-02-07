function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("comment data fetched")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const postData = await fetchPostData()
        // const commentData = await fetchCommentData()
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(postData);
        console.log(commentData);
        
    } catch (error) {
        console.error("Error fetching data", error)
    }
}

getBlogData()