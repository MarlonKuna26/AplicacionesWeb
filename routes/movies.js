import {Router} from 'express'
import {MovieController} from '../controllers/movies.js'
import { MovieModel } from '../models/local/movies.js'

export const movieRouter = ({MovieModel}) => {
    const moviesRouter = Router()
    const MovieController = new MovieController({MovieModel})

    moviesRouter.get('/'.MovieController.getAll)
    moviesRouter.get('/:id', MovieController.getById)
    moviesRouter.post('/', MovieController.create)
    moviesRouter.delete('/:id', MovieController.delete)
    movieRouter.patch('/:id', MovieController.update)
}