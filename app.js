const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// 라우트 객체 생성
const mainRouter = require('./routes/main_route');
const airRouter = require('./routes/air_route');

// 라우트 설정
app.use('/', mainRouter);      // ip:8080/c
app.use('/air', airRouter);    // ip:8080/air


const PORT = 8080;
app.listen(PORT, function(){
    console.log('Listening on port : ', PORT);
});