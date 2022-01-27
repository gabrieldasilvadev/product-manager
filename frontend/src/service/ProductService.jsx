import Service from "./Service"

function getAll() {
  return new Promise((resolve, reject) => {
    return Service.get('/produtos')
    .then(response => resolve(response))
    .catch(error => reject(error));
  })
}

export default {
  getAll
}
