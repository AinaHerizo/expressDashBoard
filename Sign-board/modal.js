document.addEventListener("DOMContentLoaded", ()=>{
    const updateModal = document.querySelector("#updateModal")
    const closeModal = document.querySelector("#closeModal")
    const saveUpdate = document.querySelector("#saveUpdate")
    const tableTbody = document.querySelector("#tableCR tbody")
    const updateId = document.querySelector("#updateUserId")
    const updateName = document.querySelector("#updateUsername")
    const updatePassword = document.querySelector("#updatePassword")

    let currentId = null

        
    tableTbody.addEventListener("click", (event)=>{
        if (event.target.classList.contains("updateButton")) {
            updateModal.classList.remove("unsee")
            updateModal.classList.add("see")

            const trClosest = event.target.closest("tr");
            currentId = trClosest.dataset.id
            updateId.textContent = currentId
    
        } 
    })

    closeModal.addEventListener("click",()=>{
        updateModal.classList.remove("see")
        updateModal.classList.add("unsee")
        updateName.value = ""
        updatePassword.value = ""
    })

    saveUpdate.addEventListener("click", async (event) => {
        event.preventDefault()
        // selection les informations dans les inputs nouveau nom et password
        const newUserName = updateName.value
        const newUserPassword = updatePassword.value

        // FETCH pour l'envoyer dans le serveur pour la modification
        const response = await fetch(`http://localhost:3000/update/${currentId}`, {
            method : "PUT",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({username : newUserName, password : newUserPassword})
        })

        const data = await response.json()
        console.log(data);
        

        updateModal.classList.remove("see")
        updateModal.classList.add("unsee")

        updateName.value = ""
        updatePassword.value = ""
    })

})



// SEPARE EN TROIS LE MODAL