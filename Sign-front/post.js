document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector("#sign-form")

    form.addEventListener("submit", async (event)=>{
        event.preventDefault()

        const username = document.querySelector("#userName").value
        const password = document.querySelector("#userPassword").value

        const response = await fetch("http://localhost:3000/signup", {
            method:"POST",
            headers:{
                "Content-type":"application/JSON",
            },
            body: JSON.stringify({username,password})
        })

        const data = await response.json()
        // console.log("ResponseMessage: "+ data.message || data.error);

        if (!response.ok) {
            alert(data.error)
        } else {
            alert(data.message)
        }
        form.reset()
    })
})