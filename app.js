import express, {json} from 'express'
import { movieRouter } from './routes/movies.js'

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(json())
  
  app.use('/movies', movieRouter({ movieModel }))
  
  const PORT = process.env.PORT ?? 3000
  
  app.listen(PORT, () =>{
      console.log(`server listening in PORT: ${PORT}`)
  })
}