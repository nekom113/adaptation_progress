const { response } = require("express");

function failSingin(singinForm) {
  singinForm.username.setCustomValidity('Неверное имя пользователя и/или пароль');
  singinForm.username.reportValidity();
}

document.forms.singinForm?addEventListener('submit', async (event)=>{
    event.preventDefault()
    const {method, action} = event.target
    let response
    try{
        response =await fetch (action, {
            method,
            headers: {
                'Content-Type':'application/json',
            }
            body: JSON.stringify({
                username: event.target.username.value,
                password: event.target.password.value,

            }),
        })
    } catch (err){
        return failSingin(event.target)
    }
    if (response.status !== 200){
        return failSingin(event.target)
    }
    return window.location.assign('/private')
})
