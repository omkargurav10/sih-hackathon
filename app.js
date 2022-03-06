import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.render('index',{title: 'Home'})
})

app.get('/login',(req,res) => {
    res.render('login',{title: 'Login'})
})

app.get('/signup',(req,res) => {
    res.render('signup',{title: 'Sign Up'})
})

app.get('/posts',(req,res) => {
    res.render('posts',{title: 'Posts'})
})

app.get('/profile',(req,res) => {
    res.render('profile',{title: 'Profile'})
})

app.get('/posts/create',(req,res) => {
    res.render('post-create',{title: 'Host'})
})

app.get('/posts/post',(req,res) => {
    res.render('post-page',{title: 'Post'})
})

app.use((req,res) => {
    res.render('404.ejs', {title: '404'})
})

app.listen(PORT, () => console.log(`Server running on https://localhost:3000`))