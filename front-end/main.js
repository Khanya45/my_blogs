function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}


fetch("https://damp-reef-26653.herokuapp.com/user-registration/")
.then(status)
.then(res => res.json())
.then(response => {
	// console.log(response.status);})
.catch(err => {
	console.error(err);
});
