const express = require('express');

const app = express();

app.get('/api', (req, res) =>{
    res.setHeader('Content-Type', 'application/json');

    const slack_name = req.query.slack_name;
    const track = req.query.track;

    const date = new Date;
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let current_day = weekdays[date.getDay()];
    var utc_time = date.toUTCString()
    github_file_url = ''
    github_repo_url = 'https://github.com/valaofficial/hngtaskone';
    res.send(current_day)
});

app.listen(3000);