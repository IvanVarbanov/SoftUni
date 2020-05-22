function tickets(ticketsArr = [], sortCriterion) {
    let ticketsList = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    ticketsArr.forEach((ticket) => {
        let [destination, price, status] = ticket.split('|');
        ticketsList.push(new Ticket(destination, price, status));
    });

    let sortedList = sortList(ticketsList, sortCriterion);

    console.log(ticketsList);
    function sortList(list = [], criterion) {
        if (criterion === 'destination') {
            return list.sort((a, b) => a.destination.localeCompare(b.destination));
        } else if (criterion === 'price') {
            return list.sort((a, b) => a.price - b.price);
        } else if (criterion === 'status') {
            return list.sort((a, b) => a.status.localeCompare(b.status));
        }
    }
}

tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed',
    ],
    'destination'
);
console.log();
tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed',
    ],
    'status'
);
