const table = document.getElementById("download-table")



data.forEach(([version, dev, created, href])=>{

        table.innerHTML += `<tr>

        

        <td>${version}</td>

        <td>${dev}</td>

        <td>${created}</td>

        <td><button><a href="${href}" download>Download</a></button></td>

        

        </tr>`;



    }

)

