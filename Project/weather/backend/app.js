// express 라이브러리 로딩하기
const { response } = require('express');
const express = require('express');

// HTTP 요청을 다루는 라이브러리 로딩하기
const request = require('request');


// POST 요청으로 보낸 payload 를 분석하는 라이브러리 로딩하기
 //const bodyParser = require('body-parser')


const port = 3000; // 웹 서버 포트번호

// express()를 호출하여 웹서버를 준비한다.
const app = express();


// POST 요청으로 보낸 payload 데이터를 분석할 객체를 지정하기
// => Content-Type : application/x-www-form-urlencoded 형식으로 된 경우 payload 처리
//    예) name=hong&age=20
// let options = new Object();
// options.extended = true;
// app.use(express.urlencoded(options));
////////////////////////////////////////////
app.use(express.urlencoded({extended : true}));



















app.get('/proxy2', (req, res) => {  
  
  
  res.set('Access-Control-Allow-Origin', '*');       
  res.set('Content-Type', 'application/json; charset=UTF-8')        
  


  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?" + 
                    "serviceKey=GN3GrekCPJXFO51J%2FL9XqEtmqktvtGPnvO520lp5THphUo06%2F7xf98JtZYGBRNlBcs7q%2BA5c74X8oFGHAjoCjQ%3D%3D" +
                    "&pageNo=1" +
                    "&numOfRows=1000" +
                    "&dataType=JSON" +
                    "&base_date="+req.query.base_date +
                    "&base_time=0600" +
                    "&nx="+req.query.nx +
                    "&ny="+req.query.ny;

  request.get({
    url : openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });       

}); 














// 웹서버 실행하기
app.listen(
  3000,             // 포트 번호 지정
  () => {           // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
    console.log(`${port}번 포트에서 서버 시작했음!`);
  } 
);

console.log("서버 시작했음!");