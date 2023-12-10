const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('DB_STRING:', process.env.DB_STRING);

        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
