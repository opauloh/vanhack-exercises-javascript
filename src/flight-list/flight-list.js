//


const buildFlightItinerary = (flightList, startingPoint, itinerary) => {

    const findTravel = flightList.find(travel => travel.from === startingPoint);

    if (!findTravel) {
        return null;
    }


    itinerary.push(findTravel);

    flightList = flightList.filter(travel => travel !== findTravel);

    if (flightList.length === 0) {
        return itinerary;
    }

    return buildFlightItinerary(flightList, findTravel.to, itinerary);
}

const parseItinerary = (itineraryList) => {
    return [itineraryList[0].from].concat(itineraryList.map(value => value.to));
}

export const flightItinerary = (flightList, startingPoint) => {
    // const startingPoints = flightList.map(travel => travel[0]);
    // const endingPoints = flightList.map(travel => travel[1]);

    // console.log(startingPoints);
    // console.log(endingPoints);
    // console.log('----flightList----', flightList);

    let itinerary = [];

    const flightDictionary = flightList.map(travel => ({
        from: travel[0],
        to: travel[1]
    })).sort((a, b) => {
        if (a.to == b.to) return 0;
        return a.to > b.to ? 1 : -1;
    });

    const resultFlightItinerary = buildFlightItinerary(flightDictionary, startingPoint, itinerary);

    if (!resultFlightItinerary) return null;

    return parseItinerary(itinerary);

    /*
    const findStartingPoint = flightList.find(travel => travel[0] === startingPoint);
    if (flightList.length > 0 && !findStartingPoint) {
        return null;
    }

    itinerary.push(findStartingPoint);

    flightList = flightList.filter(travel => travel[0] !== findStartingPoint[0] && travel[1] !== findStartingPoint[1]);

    console.log('----flightList----', flightList);

    if (flightList.length === 0) {
        return itinerary;
    }

    return flightItinerary(flightList, findStartingPoint[0][1]);
    */
} 