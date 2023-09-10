const express = require('express');

const app = express();
const router = express.Router();
const PORT = 9001;

router.get('/api', (req, res) =>{
    res.setHeader('Content-Type', 'application/json');

    const slack_name = req.query.slack_name;
    const track = req.query.track;


    const date = new Date;
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let current_day = weekdays[date.getDay()];
    let year = date.getFullYear()
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let mins = String(date.getMinutes()).padStart(2, '0');
    let secs = String(date.getSeconds()).padStart(2, '0');
    var utc_time = `${year}-${month}-${day}T${hours}:${mins}:${secs}Z`


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

app.use('/', router)

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))