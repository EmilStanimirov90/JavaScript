const registerView = document.getElementById('register-view')
const loginView = document.getElementById('login-view')
const homeView = document.getElementById('home-view')
const sections = document.getElementById('views')
const mainElement = document.getElementById('main')

const userButtons = document.getElementById('user')
const guestButtons = document.getElementById('guest')

const loginlink = document.getElementById('login')
const homeLink = document.getElementById('home')
const logoutLink = document.getElementById('logout')
const registerLink = document.getElementById('register')


sections.style.display = 'none'
mainElement.appendChild(homeView)


loginlink.addEventListener('click', () =>{
    
    loginView.style.display = 'block'

})


function hideSections(){
    registerView.style.display = 'none'
    loginView.style.display = 'none'
    homeView.style.display = 'none'

}