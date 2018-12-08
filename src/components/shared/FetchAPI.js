
// Each FetchAPI property is a function that fetches data from a specific API endpoint,
//   returning a modified version of the JSON object it recieved.
// Each of them also take an optional callback function, which returns the
//   modified JSON object as an argument for the callback function.

const FetchAPI = {
    films: (callback = null) => {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then((res) => res.json())
        .then((obj) => {
            console.log(obj)
            let modifiedResult = obj.map((val, index) => {
                return {
                    key: index,
                    id: val.id,
                    title: val.title,
                    description: val.description,
                    director: val.director,
                    producer: val.producer,
                    release_date: val.release_date,
                    rt_score: val.rt_score,
                    people: val.people,
                    species: val.species,
                    locations: val.locations,
                    vehicles: val.vehicles,
                    url: val.url
                };
            })
            console.log(modifiedResult);
            return modifiedResult;
        })
        .then((result) => callback ? callback(result) : result) // if a callback is specified, then return the result as an argument of that callback function
    },
    people: (callback = null) => {
        fetch("https://ghibliapi.herokuapp.com/people/")
        .then((res) => res.json())
        .then((obj) => {
            let modifiedResult = obj.map((val, index) => {
                return {
                    key: index,
                    id: val.id,
                    name: val.name,
                    gender: val.gender,
                    age: val.age,
                    eye_color: val.eye_color,
                    hair_color: val.hair_color,
                    films: val.films,
                    species: val.species,
                    url: val.url
                };
            })
            return modifiedResult;
        })
        .then((result) => callback ? callback(result) : result)
    },
}
export default FetchAPI;