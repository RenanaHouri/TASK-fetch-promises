// Exercise 9: Fetch Post, Then Comments Count
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Step 1: Fetch post by ID
 * Step 2: Fetch comments for that post
 * Show: "Post has <N> comments"
 *
 * Example output:
 *   Post has 5 comments
 *
 * @param {number} postId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function getPostCommentsCount(postId) {
  let responsePost=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  let post=await responsePost.json()
  let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  let comments= await response.json();
  let count =comments.length
  console.log(`Post has ${count} comments`)

  
}

module.exports = { getPostCommentsCount };
