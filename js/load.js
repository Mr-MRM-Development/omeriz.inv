const table = document.getElementById("download-table")

<<<<<<< HEAD


data.forEach(([version, dev, created, href])=>{

        table.innerHTML += `<tr>

        

        <td>${version}</td>

        <td>${dev}</td>

        <td>${created}</td>

        <td><button><a href="${href}" download>Download</a></button></td>

        

        </tr>`;



    }

)

=======
data.forEach(([version, dev, created, href])=>{
        table.innerHTML += `<tr>
        
        <td>${version}</td>
        <td>${dev}</td>
        <td>${created}</td>
        <td><button><a href="${href}" download>Download</a></button></td>
        
        </tr>`;

    }
)
>>>>>>> 1e0a7e5 (first commit)
