const signin = (user) => {
    // alert(user.email);
    // alert(user.password);
// alert(JSON.stringify(user));
    return fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const signout = () => {
    return fetch('http://localhost:5000/auth/signout', {
      method: 'GET',
    }).then(response => {
      //alert(response.json());
        return response.json()
    }).catch((err) => console.log(err))
  }
  
  const sendEmail = (emailData) => {
   // alert(JSON.stringify(checkEmail(emailData)));
    if(checkEmail(emailData).then(data => {
      return data.json()
    }));
  }
  const checkEmail = (emailData) => {
    return fetch('http://localhost:5000/auth/checkemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  export {
    signin,
    signout,
    checkEmail,
    sendEmail
  }
  