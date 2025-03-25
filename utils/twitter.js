// Helper function to get Twitter client
async function getClient() {
  try {
    const { TwitterApi } = await import('twitter-api-v2');
    return new TwitterApi(process.env.TWITTER_BEARER_TOKEN || '');
  } catch (error) {
    console.error('Error initializing Twitter client:', error);
    return null;
  }
}

// Convert a tweet to blog post format
function tweetToBlogPost(tweet) {
  return {
    title: tweet.text.split('\n')[0],
    date: new Date(tweet.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase(),
    content: tweet.text.split('\n').slice(1),
    slug: tweet.id,
    originalUrl: `https://twitter.com/cablechris/status/${tweet.id}`
  };
}

// Fetch tweets from a user
export async function fetchTweetsAsBlogPosts(username) {
  try {
    const client = await getClient();
    if (!client) return [];

    const user = await client.v2.userByUsername(username);
    if (!user.data) {
      console.error('User not found');
      return [];
    }

    const tweets = await client.v2.userTimeline(user.data.id, {
      exclude: ['replies', 'retweets'],
      max_results: 10,
      'tweet.fields': ['created_at', 'text']
    });

    return tweets.data.data.map(tweetToBlogPost);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return [];
  }
}

// Fetch a single tweet by ID
export async function fetchTweetAsBlogPost(tweetId) {
  try {
    const client = await getClient();
    if (!client) return null;

    const tweet = await client.v2.tweet(tweetId, {
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