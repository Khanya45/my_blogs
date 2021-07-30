function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}


const token = 'YOUR_TOKEN_HERE';
fetch('https://damp-reef-26653.herokuapp.com/user-registration/', {
  headers: {
    Authorization: jwt ${token}
  }
})
.then(status)
.then(res => res.json())
.then(response => {
	 console.log(response);})
.catch(err => {
	console.error(err);
});

fetch('https://damp-reef-26653.herokuapp.com/auth', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": "gjones67", "password": "jones67"})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt_token", res["access_token"]);
   });
