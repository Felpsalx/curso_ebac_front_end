let foto = document.querySelector('#foto')
let nome = document.querySelector('#nome')
let nomeUser = document.querySelector('#nomeDeUsuario')
let repo = document.querySelector('#repo')
let seg = document.querySelector('#seg')
let seguindo = document.querySelector('#seguindo')
let link = document.querySelector('#link')


fetch('https://api.github.com/users/Felpsalx').then(response=>{
    return response.json()
}).then(res=>{
    nomeUser.innerHTML = res.login 
    foto.src = res.avatar_url
    seg.innerHTML = res.followers
    repo.innerHTML = res.public_repos 
    seguindo.innerHTML= res.following
    link.href= res.html_url
}).catch(error=>{
    console.log("erro: " + error)
})
    
