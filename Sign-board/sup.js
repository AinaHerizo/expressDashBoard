document.addEventListener("DOMContentLoaded", () => {
    const tableTbody = document.querySelector("#tableCR tbody")
    let  currentId = null

    tableTbody.addEventListener("click", async (event) => {
        event.preventDefault
        if (event.target.classList.contains("deleteButton")) {
            const trClosest = event.target.closest("tr")
            currentId = trClosest.dataset.id


            if (confirm("Voulez-vous supprimer ce donnée DEFINITIVEMENT?")) {
                try {
                    const response = await fetch(`http://localhost:3000/delete/${currentId}`, {
                        method:"DELETE",
                    })
                    
                    const data = await response.json()
                    alert(data.message || data.error);

                    if (response.ok) {
                        trClosest.remove()
                    }
                    
                } catch (error) {
                    console.error("Erreur suppression :", error);
                }
            }
        } 
    })
})