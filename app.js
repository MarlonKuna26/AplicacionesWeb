import express, {json} from 'express'
import { movieRouter } from './routes/movies'

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(json())
app.use('/movies', movieRouter({MovieModel}))

app.listen(PORT, () =>{
    console.log('server listening in PORT: ${PORT}')
})