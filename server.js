const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : '1',
            'img' : 'http://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '910326' ,
            'gender': '남',
            'job' : '대학생' 
            },
            {
            'id' : '2',
            'img' : 'http://placeimg.com/64/64/2',
            'name' : '임꺽정',
            'birthday' : '920408' ,
            'gender': '남',
            'job' : '프로그레머' 
            },
            {
              'id' : '3',
              'img' : 'http://placeimg.com/64/64/3',
              'name' : '아무개',
              'birthday' : '961010' ,
              'gender': '남',
              'job' : '디자이너' 
            }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));