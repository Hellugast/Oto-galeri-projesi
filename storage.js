

function Storage() {
    Storage.prototype.addCarToStorage = (newCar) => {

        let cars = this.getCarsFromStorage()

        cars.push(newCar)

        localStorage.setItem("cars", JSON.stringify(cars))

    }


    Storage.prototype.getCarsFromStorage = () => {

        let cars;

        if (localStorage.getItem("cars") === null) {
            cars = []
        }
        else {
            cars = JSON.parse(localStorage.getItem("cars"))
        }
        return cars;
    }

    Storage.prototype.deleteCarFromStorage = (carTitle) => {
        let cars = this.getCarsFromStorage()
        cars.forEach((car, index) => {
            if (car.title === carTitle) {
                cars.splice(index, 1)
            }
            localStorage.setItem("cars", JSON.stringify(cars))
        })
    }

    Storage.prototype.deleteAllCars = () => {
        localStorage.removeItem("cars")
    }
}




