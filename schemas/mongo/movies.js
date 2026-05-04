import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        trim: true
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year must be after 1900'],
        max: [2026, 'Year must be before 2026']
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: [1, 'Duration must be at least 1 minute'],
    },
    poster: {
        type: String,
        required: true,
        match: [
            /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/,
            'Invalid poster URL'
        ]
    },
    genre: [{
        type: String,
        required: true,
        enum: {
            values: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Animation', 'Family', 'Fantasy', 'Romance', 'Adventure', 'Crime'],
            message: 'Genre must be one of the following: Action, Comedy, Drama, Horror, Sci-Fi, Thriller, Animation, Family, Fantasy, Romance, Adventure, Crime'
        }
    }]
}, { timestamps: true });

export const Movie = mongoose.model("Movie", movieSchema);