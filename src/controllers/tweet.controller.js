import Tweet from "../models/Tweet";

export const createTweet = async (req, res) => {
  const { username, id_user, comment } = req.body;

  try {
    const newTweet = new Tweet({ username, id_user, comment });
    const tweetSaved = await newTweet.save();
    res.status(201).json(tweetSaved);
  } catch (error) {
    return res.status(401).json({ message: "Incomplete data" });
  }
};

export const getTweets = async (req, res) => {
  const tweet = await tweet.find();
  res.status(201).json(tweet);
};

export const getTweetByID = async (req, res) => {
  const tweet = await Tweet.findById(req.params.TweetId);
  res.status(200).json(tweet);
};

export const getTweetByUser = async (req, res) => {
  const  id_user = req.params.id_user;
  //Agregar proximamente validacion: solo el usuario puede obtener sus tweets
  const tweet = await Tweet.find({ id_user: id_user });
  res.status(200).json(tweet);
};

export const updateTweetByID = async (req, res) => {
  const updateTweet = await Tweet.findByIdAndUpdate(
    req.params.TweetId,
    req.body,
    { new: true }
  );
  res.status(200).json(updateTweet);
};

export const deleteTweetByID = async (req, res) => {
  const deleteTweet = await Tweet.findByIdAndDelete(req.params.TweetId);
  res.status(204).json(deleteTweet);
};
