const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect('mongodb+srv://admin1234:admin1234@cluster0.xrl0q.mongodb.net/google-auth?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;