"use strict"
let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let now = `${year}${month}${date}`;

// 서울 60 127
function weather(x, y, tm, reh, location) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + x + "&ny=" + y, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let sky = arr.response.body.items.item[18].category;
  let skyvalue = arr.response.body.items.item[18].fcstValue;
  let pty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById(tm).innerHTML = `${t1hvalue}℃`;
  document.getElementById(reh).innerHTML = `${rehvalue}%`;

  if (pty == 0) {
    if (skyvalue == 1) {
      location.setAttribute('class', 'sun');
    } else if (skyvalue == 3) {
      location.setAttribute('class', 'cloud');
    } else {
      location.setAttribute('class', 'blur');
    }
  } else if (pty == 1 || pty == 2 || pty == 5 || pty == 6) {
    location.setAttribute('class', 'rain');
  } else {
    location.setAttribute('class', 'snow');
  }
};
// 서울 60 127
weather(60, 127, 'setm', 'sereh', seim);

// 인천 55 124
weather(55, 124, 'incheontm', 'incheonreh', incheonim);

// 춘천 73 134
weather(73, 134, 'chuncheontm', 'chuncheonreh', chuncheonim);

// 대전 67 100
weather(67, 100, 'daejeontm', 'daejeonreh', daejeonim);

// 대구 89 90
weather(89, 90, 'daegutm', 'daegureh', daeguim);

// 부산 98 76
weather(89, 90, 'busantm', 'busanreh', busanim);

// 광주 68 76
weather(68, 76, 'gwangjutm', 'gwangjureh', gwangjuim);