import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const ghost = new GhostContentAPI({
    url: 'https://ryotarohada.ghost.io',
    key: '7d660b12a28e4caff2f7ebe8dc',
    version: "v3"
  });

  export async function getPosts() {
    return await ghost.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }