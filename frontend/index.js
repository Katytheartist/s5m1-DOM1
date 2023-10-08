function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const divNames = document.querySelectorAll('div')
 
 //console.log(divNames)
 divNames.forEach((divName, i) => {
  divName.classList.add('widget')
  
  divName.setAttribute('tabindex', i + 1 + '')
 })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randoIdx = Math.floor(Math.random()*quotes.length)
  //console.log(randoIdx)
  const randoQuote = quotes[randoIdx]
  //console.log(randoQuote)

  const quote = document.createElement('div')
  const quoteText = randoQuote.quote 
  quote.textContent = quoteText
  //console.log(quote)
  const widget1 = document.querySelector('.quoteoftheday')
  //console.log(widget1)
  widget1.appendChild(quote)
  //const quote = document.querySelector('.quoteoftheday')
  // console.log(quote)
  const authorDate = document.createElement('div')
  const {author, date} = randoQuote
  authorDate.textContent = `${author} in ${date || 'an unknown time'}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget

  const randomVerbs1 = verbs[Math.floor(Math.random()*verbs.length)]
  const randomVerbs2 = verbs[Math.floor(Math.random()*verbs.length)]

  const randomAdverbs1 = adverbs[Math.floor(Math.random()*adverbs.length)]
  const randomAdverbs2 = adverbs[Math.floor(Math.random()*adverbs.length)]

  const randomNouns1 = nouns[Math.floor(Math.random()*nouns.length)]
  const randomNouns2 = nouns[Math.floor(Math.random()*nouns.length)]

  const corpParag = document.createElement('p')
  
  const corpText = `We need to ${randomVerbs1} our ${randomNouns1} ${randomAdverbs1} in order to ${randomVerbs2} our ${randomNouns2} ${randomAdverbs2}.`

corpParag.textContent = corpText  

  const widget2 = document.querySelector('.corporatespeak')
  widget2.appendChild(corpParag)

  // 👉 TASK 4 - Build a "Countdown" widget
 const countdowWidget = document.querySelector('.countdown')
 let count = 5
 const countdown = document.createElement('p')
 countdown.textContent = `T-minus ${count}...`
 countdowWidget.appendChild(countdown)

 const id = setInterval(() => {
  if(count === 1){
    countdown.textContent = "Liftoff! 🚀"
    clearInterval(id)
  } else {
    count--
    countdown.textContent = `T-minus ${count}...`
  }
 }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  const randomPerson = people[Math.floor(Math.random()*people.length)]
  //console.log(randomPerson)

  const friendswidget = document.querySelector('.friends')
  const friendsp = document.createElement('p')
  friendswidget.appendChild(friendsp)
  // const person = {fname, lname}
  // const birthYear = {dateOfBirth}[year]
  const year = randomPerson.dateOfBirth.split('-')[0]
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `

  if (!randomPerson.friends.length){
    sentence += 'has no friends.'
  } else {
    sentence += `is friends with `

    for(let i = 0; i < randomPerson.friends.length; i++){
    const friendsId = randomPerson.friends[i]
    //console.log(friendsId)
    const friend = people.find(p => p.id === friendsId)
    //console.log(friend)
    const fullName = `${friend.fname} ${friend.lname}`
    //console.log(fullName)

    let isLastI = i === randomPerson.friends.length -1
    let isNextToLastI = i === randomPerson.friends.length -2
    if (isLastI){
      sentence += `${fullName}.`
    } else if (isNextToLastI) {
      sentence += `${fullName} and `
    } else {
      sentence += `${fullName}, `
    }
  }
  } friendsp.textContent = sentence
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
