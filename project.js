

const form = document.getElementById("car-form")
const titleElement = document.getElementById("title")
const priceElement = document.getElementById("price")
const urlElement = document.getElementById("url")


const ui = new UI()
const storage = new Storage()

eventListeners()

function eventListeners() {
    form.addEventListener("submit", addCar)
    document.addEventListener("DOMContentLoaded", () => {
        let cars = storage.getCarsFromStorage()
        ui.loadAllCars(cars)
    })
}


function addCar(e) {
    const title = titleElement.value
    const price = priceElement.value
    const url = urlElement.value

    if (title === "" || price === "" || url === "") {
        // alert("Lütfen bütün değerleri giriniz")
        ui.displayMessage("Lütfen değerleri doğru giriniz", "danger")
    }
    else {
        const newCar = new Car(title, price, url)

        ui.addCarToUI(newCar)

        storage.addCarToStorage(newCar)

        ui.displayMessage("Araç başarıyla eklendi", "success")
    }

    ui.clearInputs(titleElement, urlElement, priceElement)

    e.preventDefault()
}