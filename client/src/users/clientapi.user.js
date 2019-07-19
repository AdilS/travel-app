const create = (url,postData) => {
  //alert(data.email);
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then((response) => {
        response: JSON.Response();
    })
    .catch((err) => {
      console.log(err);
    });
};
export {
  create
  
}