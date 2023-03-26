let btn = document.querySelector('#check')
btn.addEventListener('click', check)

function check() {
  const day = (document.querySelector('#day').value).toLowerCase()
  if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "It's da Weekend! Baby."
  }
  else if (day === 'friday') {
    document.querySelector('#placeToSee').innerText = "I'll be bored today."
  }
}

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    btn.click()
  }
})
























// let btn = document.querySelector('#check')

// btn.addEventListener('click', check)

// function check() {

//   const day = (document.querySelector('#day').value).toLowerCase()

//   if (day === "saturday" || day === "sunday") {
//     document.querySelector("#placeToSee").innerText = "It's da weekend!!! 😄"
//   }
//   else if (day === "tuesday" || day === "thursday") {
//     document.querySelector('#placeToSee').innerText = "I have class today."
//   }
//   else {
//     document.querySelector('#placeToSee').innerText = "Looks like I'll be bored today. ☹️"
//   }
// }

