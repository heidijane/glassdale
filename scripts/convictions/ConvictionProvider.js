let convictions = [];

//gets a copy of hte convictions array for us to use
export const useConvictions = () => {
    return convictions.slice()
}

//create a fetch request to get the remote data from the API
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                convictions = parsedConvictions
            }
        )
}