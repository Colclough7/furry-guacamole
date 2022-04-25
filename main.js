const nasaTitle = document.querySelector('#title>h3')
const nasaDate = document.querySelector('#date')
const cardImage = document.querySelector('#card-image')
const description = document.querySelector('#description')
const visit = document.querySelector('#visit')
const like = document.querySelector('#like')
const api = `https://api.nasa.gov/planetary/apod?api_key=60IIO84owab7M6CDopOMqwf9cLSgz9fFmDuJsR66`

async function fetchNasa(){
    try{
        const response = await fetch(api)
        const data = await response.json()
        const {date,explanation,url,title,hdurl} = data
        nasaTitle.innerHTML = title
        nasaDate.textContent = date
        cardImage.style.backgroundImage = `url(${url})`
        description.textContent = explanation
        visit.href = hdurl
    }catch(error){
        console.log(error)
    }


}
function liked(){
    this.classList.toggle('red')
    }
    
like.addEventListener('click',liked)













fetchNasa()