document.getElementById('addSong').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/songs', {
    title: document.getElementById('song').value
  })
    .then(() => {
      let songElem = document.createElement('li')
      songElem.textContent = document.getElementById('song').value
      document.getElementById('songList').append(songElem)
      document.getElementById('song').textContent = ''
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteSong') {
    axios.delete(`/api/songs/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})
