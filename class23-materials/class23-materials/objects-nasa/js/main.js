//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
fetch("https://api.nasa.gov/planetary/apod?api_key=sQXHkO8Swtuc6XGltxOpAGICuJDKrKfgOfaHLf3T")
    .then(res => res.json())
    .then(data => {
        console.table(data)
        let name = data.title
        let date = data.date
        let description = data.explanation
        let img = data.hdurl
        document.querySelector('img').src = img
        document.querySelector('h2').innerText = name
        document.querySelector('h3').innerText = description
    })