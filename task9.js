/* 
    Ф-ция addFlight(flightNumber, destination, departureTime, capacity) - добавляет новый рейс с указанными параметрами.
    Ф-ция cancelFlight(flightNumber) - отменяет рейс с указанным номером.
    Ф-ция registerPassenger(flightNumber, passengerName) - регистрирует пассажира на рейс с указанным номером.
    Ф-ция findFlightByNumber(flightNumber) - ищет рейс по номеру и выводит его информацию.
    Ф-ция showAllFlights() - выводит список всех рейсов.
    Ф-ция showFlightPassengers(flightNumber) - выводит список пассажиров на рейсе с указанным номером.
*/

let obj = {};
function addFlight(flightNumber, destination, departureTime, capacity){
    obj[flightNumber] = {Destination: destination, DepartureTime: departureTime, Capacity: capacity};
}

function cancelFlight(flightNumber){
    delete obj[flightNumber];
}

function registerPassenger(flightNumber, passengerName){
    obj[flightNumber].PassengerName = passengerName;
}

function findFlightByNumber(flightNumber){
    console.log(obj[flightNumber])
}

function showAllFlights(){
    console.log(obj);
}

function showFlightPassengers(flightNumber){
    console.log(obj[flightNumber].PassengerName);
}

addFlight('Рейс 231', 2, 3, 4);
addFlight('Рейс 222', 5, 6, 7);
// cancelFlight('Рейс 231');
registerPassenger('Рейс 222', 'Alisher');
// findFlightByNumber('Рейс 222');
showAllFlights();
showFlightPassengers('Рейс 222');