document.getElementById('addMovie').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/films', {
    title: document.getElementById('title').value
  })
    .then(() => {
      let movieElem = document.createElement('li')
      movieElem.textContent = document.getElementById('title').value
      document.getElementById('movieList').append(movieElem)
      document.getElementById('title').innerHTML = ''
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteMovie') {
    axios.delete(`/api/films/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})
