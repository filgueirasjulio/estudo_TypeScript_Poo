interface Location  {
    latitude: number,
    longitude: number,  
}

const getLocation = (location: Location): string => {
    return `${location.latitude} - ${location.longitude}`
} 

class LocationMap implements Location {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }
 
    getLocation(): string {
        return 'any';
    }
}

getLocation(new LocationMap(123, 321))

class LocationMapBR implements Location {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }
 
    getLocation(): string {
        return 'any';
    }
}

getLocation(new LocationMapBR(123, 321))

export {}