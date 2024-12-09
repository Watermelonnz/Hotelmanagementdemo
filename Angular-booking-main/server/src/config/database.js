const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.DB_URI; // Load DB URI from environment variables
    if (!uri) {
      throw new Error('MongoDB URI is missing in the environment variables');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; // Export the function
