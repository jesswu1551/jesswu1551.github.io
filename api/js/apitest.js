import { apiUserLogin } from "./api.js";

apiUserLogin({
  title: "Castle in the Sky",
  rt_score: "95"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  var app = document.getElementById('root');
  var container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      var h1 = document.createElement('h1');
      h1.textContent = movie.title + movie.rt_score;
      container.appendChild(card);
      card.appendChild(h1);
    });
  } else {
    var errorMessage = document.createElement('marquee');
    errorMessage.textContent = "Gah, it's not working";
    app.appendChild(errorMessage);
  }
}

request.send();


/*
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
  } else {
    console.log('error');
  }
};
*/


/*
axios.get('https://api.github.com/users/johnson4932', {
})
  .then(function (response) {
    // Success
    console.log(response.status);
    console.table(response.data);
  })
  .catch(function (error) {
    // Error
    console.log(error);

    // Error 的詳細資訊
    console.log(error.response);
  })
*/


/*
function get(url) {
  return new Promise((resolve, reject) => {

    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
      if (req.status == 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(new Error(req))
      }
    };
    req.send();
  });
}

get('https://ghibliapi.herokuapp.com/films')
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.error(res)
  })
*/


/*
function promise(num) {
  return new Promise((resolve, reject) => {
    if(num > 1){
      resolve('ok');
    } else {
      reject('failed');
    }
  });
}
 Promise.all([promise('1.2'), promise('0.2'), promise('3')])
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
*/


/*
function funcGet(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json'
    })
      .done(resolve)
      .fail(reject)
  })
}

funcGet()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })

Promise.all([funcGet('https://ghibliapi.herokuapp.com/films'), funcGet('https://ghim/films')])
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
*/


/*
function createPromise(url) {
  let xhr = new XMLHttpRequest()
  return new Promise(function (resolve, reject) {
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject()
        }
      }
    }
    xhr.send()
  })
}

Promise.all([
  createPromise('https://ghibliapi.herokuapp.com/films'),
  createPromise('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
]).then((data) => {
  console.log('成功了')
  console.log(data)
}, () => {
  console.log('至少有一个失败了')
})
*/


/*
function funcB() {
  $.ajax({
    type: 'GET',
    url: 'https://ghibliapi.heuapp.comms',
    dataType: 'json',
  });
}

Promise.all([funcA(),funcB()])
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })

function geturl(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: 'https://ghibliapi.herokuapp.com/films',
      dataType: 'json',
      success: resolve(function(response){
        const charge = [];
        charge.push(...response);
        createDomElement(charge);
      }),
      error: reject(function (thrownError) {
        console.log(thrownError);
      })
    })
  });
}

geturl('https://ghibliapi.herokuapp.com/films')
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
*/


/*
Promise.all([geturl('https://ghibliapi.herokuapp.com/films'), promise('0.2'), promise('3')])
.then(res => {
  console.log(res);
})
.catch(error => {
  console.log(error);
})
*/


/*
$.ajax({
  type: 'GET',
  url: 'https://ghibliapi.herokuapp.com/films',
  dataType: 'json',
  success: function (response) {
    const charge = [];
    charge.push(...response);
    createDomElement(charge);
  },
  error: function (thrownError) {
    console.log(thrownError);
  },
});

function createDomElement(charge) {
  var app = document.getElementById('root');
  var container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  const domElements = charge.map(movie => {
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    var h1 = document.createElement('h1');
    h1.textContent = movie.title;
    var p = document.createElement('p');
    movie.description = movie.description.substring(0, 300);
    p.textContent = movie.description + '...';
    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);

    return

  }).join('');
}
*/
