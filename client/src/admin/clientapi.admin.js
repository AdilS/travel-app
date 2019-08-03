const checkcategory = () => {
  return fetch('http://localhost:5000/auth/signout', {
    method: 'GET',
  }).then(response => {
    //alert(response.json());
    return response.json()
  }).catch((err) => console.log(err))
}

const create = (category) => {
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

const listcategory = () => {
  return fetch('http://localhost:5000/admin/getcategory', {
    method: 'GET',
  }).then(response => {
    // alert(JSON.stringify(response.json()));
    return response.json()
  }).catch((err) => console.log(err))
}
const listcategorybyid = (params) => {
  // alert(params.catId);
  return fetch('http://localhost:5000/admin/getcategorybyId/' + params.catId, {
    method: 'GET',
  }).then(response => {
    //alert(JSON.stringify(response.json()));
    return response.json()
  }).catch((err) => console.log(err))
}
const updatecategorybyid = (categoryData, params) => {
  //alert(JSON.stringify(categoryData));
  return fetch('http://localhost:5000/admin/updatecategorybyid/' + params.catId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}
const updateamenitybyid = (amenityData, params) => {
  //alert(JSON.stringify(categoryData));
  return fetch('http://localhost:5000/admin/updateamenitybyid/' + params.amenityId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(amenityData)
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const listamenities = () => {
  return fetch('http://localhost:5000/admin/getamenities', {
    method: 'GET',
  }).then(response => {
    // alert(JSON.stringify(response.json()));
    return response.json()
  }).catch((err) => console.log(err))
}
const listhotel = () => {
  return fetch('http://localhost:5000/admin/gethotel', {
    method: 'GET',
  }).then(response => {
    // alert(JSON.stringify(response.json()));
    return response.json()
  }).catch((err) => console.log(err))
}

const createamenity = (amenity) => {
  return fetch('http://localhost:5000/admin/addamenity', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(amenity)
  })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}
const filterAmenities = (params) => { 
  return fetch('http://localhost:5000/admin/filteramenities', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    return err.json();
  });
}


const listamenitiesbyid = (params) => {
  // alert(params.catId);
  return fetch('http://localhost:5000/admin/getamenitybyId/' + params.amenityId, {
    method: 'GET',
  }).then(response => {
    //alert(JSON.stringify(response.json()));
    return response.json()
  }).catch((err) => console.log(err))
}
const createHotel = (hotelData) => {
  return fetch('http://localhost:5000/admin/addhotel', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hotelData)
  })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}
const filterHotels = (params) => { 
  return fetch('http://localhost:5000/admin/filterhotels', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    return err.json();
  });
}
export {
  checkcategory,
  create,
  listcategory,
  listcategorybyid,
  updatecategorybyid,
  listamenities,
  createamenity,
  filterAmenities,
  listamenitiesbyid,
  updateamenitybyid,
  createHotel,
  listhotel,
  filterHotels

}