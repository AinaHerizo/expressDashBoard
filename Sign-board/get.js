document.addEventListener("DOMContentLoaded", async ()=>{
    const tableBody = document.querySelector("#tableCR tbody")

    try {
        const response = await fetch("http://localhost:3000/user")
        const users = await response.json()

        users.forEach(user => {
            const row = document.createElement("tr");
            
            row.dataset.id = user._id
            row.innerHTML = `
                <th>${user._id}</th>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td><button class="updateButton">Modifier</button><button class="deleteButton">Supprimer</button></td>
            `

            tableBody.appendChild(row)
        });
    } 
    catch (error) {
        console.error(error);
    }
})