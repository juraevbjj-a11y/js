/* 
    Ф-ция addFlight(flightNumber, destination, departureTime, capacity) - добавляет новый рейс с указанными параметрами.
    Ф-ция cancelFlight(flightNumber) - отменяет рейс с указанным номером.
    Ф-ция registerPassenger(flightNumber, passengerName) - регистрирует пассажира на рейс с указанным номером.
    Ф-ция findFlightByNumber(flightNumber) - ищет рейс по номеру и выводит его информацию.
    Ф-ция showAllFlights() - выводит список всех рейсов.
    Ф-ция showFlightPassengers(flightNumber) - выводит список пассажиров на рейсе с указанным номером.
*/

let arr = {};
function s(flightNumber, destination, departureTime){
    arr[flightNumber] = {Destonation: destination, DepartureTime: departureTime} 
}

s('T332f', 1, 2);
s('T332f', 3, 4);
console.log(arr)
