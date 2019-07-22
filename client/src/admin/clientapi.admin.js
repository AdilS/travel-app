const checkcategory = () => {
    return fetch('http://localhost:5000/auth/signout', {
      method: 'GET',
    }).then(response => {
      //alert(response.json());
        return response.json()
    }).catch((err) => console.log(err))
  }

  const create= (category)=>{
   return fetch('http://localhost:5000/admin/addcategory', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  export {
    checkcategory,
    create
  }