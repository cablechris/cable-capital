// Convert tweet to blog post format
function tweetToBlogPost(tweet) {
  return {
    title: tweet.text.split('\n')[0], // First line as title
    date: new Date(tweet.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase(),
    content: tweet.text.split('\n').slice(1), // Rest as content
    slug: tweet.id_str,
    originalUrl: `https://twitter.com/cablechris/status/${tweet.id_str}`
  };
}

// Helper function to get Twitter client
async function getClient() {
  const { TwitterApi } = await import('twitter-api-v2');
  return new TwitterApi(process.env.TWITTER_BEARER_TOKEN || '');
}

// Fetch tweets with a specific hashtag from a user
export async function fetchTweetsAsBlogPosts(username) {
  try {
    const client = await getClient();
    const tweets = await client.v2.userByUsername(username);
    if (!tweets.data) {
      console.error('No tweets found');
      return [];
    }

    const userTweets = await client.v2.userTimeline(tweets.data.id, {
      exclude: ['replies', 'retweets'],
      max_results: 10,
      'tweet.fields': ['created_at', 'text']
    });

    return userTweets.data.data.map(tweetToBlogPost);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return [];
  }
}

// Fetch a single tweet by ID
export async function fetchTweetAsBlogPost(tweetId) {
  try {
    const client = await getClient();
    const tweet = await client.v2.singleTweet(tweetId, {
      'tweet.fields': ['created_at', 'text']
    });
    
    if (!tweet.data) {
      console.error('Tweet not found');
      return null;
    }

    return tweetToBlogPost(tweet.data);
  } catch (error) {
    console.error('Error fetching tweet:', error);
    return null;
  }
} 