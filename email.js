const express = require('express')
const {config} = require('dotenv')
const cors = require('cors')
const axios = require('axios')
config({
    path: '.env'
})

const app = express()
const port  = 3001

app.use(cors());
app.use(express.json())

app.post('/', (req,res) =>{
    try{
        sendEmail(req.body)
        res.send(200)
    }
    catch(e){
        res.send(400)
    }
})

const sendEmail = (form) => {
    console.log(process.env.service," ", process.env.template, " ", process.env.public)
    const data = {
        service_id: process.env.service,
        template_id: process.env.template,
        user_id: process.env.public,
        accessToken: process.env.private,
        template_params: {
            'name': form.name,
            'email': form.email,
            'message': form.message
        }
    };
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

