import 'dotenv/config'
import connectDB from './config/dbMongo.js'
import { createApp } from './app.js'
import { MovieModel } from './models/mongo/movies.js'

connectDB()
createApp({ movieModel: MovieModel })