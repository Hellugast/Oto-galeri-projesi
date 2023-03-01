

function UI() {

}

UI.prototype.addCarToUI = function (newCar) {

    const carList = document.getElementById("cars")
    carList.innerHTML += `
    <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id="delete-car" class="btn btn-danger">Aracı Sil</a></td>
    </tr> 
    `

}


UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = ""
    element2.value = ""
    element3.value = ""
}

UI.prototype.displayMessage = function (message, type) {
    const cardBody = document.getElementById("cb1")

    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message

    cardBody.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000)
}