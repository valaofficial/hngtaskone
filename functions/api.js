const express = require('express');
const serverless = require('serverless-http')

const app = express();
const router = express.Router();

router.get('/api', (req, res) =>{
    res.setHeader('Content-Type', 'application/json');

    const slack_name = req.query.slack_name;
    const track = req.query.track;

    const date = new Date;
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let current_day = weekdays[date.getDay()];
    var utc_time = date.toUTCString()
    const github_file_url = 'https://github.com/valaofficial/hngtaskone/blob/main/server.js';
    const github_repo_url = 'https://github.com/valaofficial/hngtaskone';

    res.json({
        slack_name,
        track,
        current_day,
        utc_time,
        github_file_url,
        github_repo_url,
        status_code: 200
    })
});

app.use('/.netlify/functions/api', router)

// app.listen(3000);

module.exports.handler = serverless(app);