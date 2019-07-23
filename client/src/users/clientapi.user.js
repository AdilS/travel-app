//var  config = require('./../../../config/config');
const create = (user) => {
  // const jsonData= {
  //   'name' : 'AAAAAAAA',
  //   'email' : 'adil@g.com',
  //   'password' : 'AAAAAA'
  // }
  //alert(user.name);
  return fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}


export {
  create
  
}

