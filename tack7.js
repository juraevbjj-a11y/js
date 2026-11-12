/* 
    Ф-ция addFlight(flightNumber, destination, departureTime, capacity) - добавляет новый рейс с указанными параметрами.
    Ф-ция cancelFlight(flightNumber) - отменяет рейс с указанным номером.
    Ф-ция registerPassenger(flightNumber, passengerName) - регистрирует пассажира на рейс с указанным номером.
    Ф-ция findFlightByNumber(flightNumber) - ищет рейс по номеру и выводит его информацию.
    Ф-ция showAllFlights() - выводит список всех рейсов.
    Ф-ция showFlightPassengers(flightNumber) - выводит список пассажиров на рейсе с указанным номером.
*/


function addFlight(flightNumber, destination, departureTime, capacity){
    let arrFligh = [];
    arrFligh.push(flightNumber, destination, departureTime, capacity)
    for(i=0; i<arrFligh.length; i++){
        console.log(arrFligh[i]);
    }
}

/* function cancelFlight(flightNumber){

}

function registerPassenger(flightNumber, passengerName){

}

function findFlightByNumber(flightNumber){

}

function showAllFlights(){

}

function showFlightPassengers(flightNumber){

} */

addFlight(12, 13, 14, 15);