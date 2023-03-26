//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const book = document.querySelector('#book').value
  const chapter = document.querySelector('#chapter').value
  const verse = document.querySelector('#verse').value
  const url = `https://bible-api.com/${book}${chapter}:${verse}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(url)
      console.log(data)
      document.querySelector('#reference').innerText = data.reference
      document.querySelector('#verse_text').innerText = data.text
      document.querySelector('#translation').innerText = `-${data.translation_name}`
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

