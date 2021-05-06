var logo = document.getElementById('logo-startwars')

function Clicavel(){
    alert('Test')
}


const formularioDeContato = document.getElementById('contact-form')

formularioDeContato.addEventListener('submit', function(e){
    e.preventDefault()
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    fetch('https://webhook.site/6f8ceda4-299a-47ef-8bbd-6fc0633eb8e9', {
        method: 'POST',
        body: JSON.stringify({
            name: nome,
            email: email
        })
    }).then( response => {
            alert('Mensagem enviada')
    })

})
