const express = require('express')
const app = express()

let spaceData = {
    planets: [
        {
            name: "Mercury",
            distance_from_sun_km: 57900000,
            diameter_km: 4879,
            moons: []
        },
        {
            name: "Venus",
            distance_from_sun_km: 108200000,
            diameter_km: 12104,
            moons: []
        },
        {
            name: "Earth",
            distance_from_sun_km: 149600000,
            diameter_km: 12742,
            moons: [
                {
                    name: "Moon",
                    diameter_km: 3474
                }
            ]
        },
        {
            name: "Mars",
            distance_from_sun_km: 227900000,
            diameter_km: 6779,
            moons: [
                {
                    name: "Phobos",
                    diameter_km: 22.4
                },
                {
                    name: "Deimos",
                    diameter_km: 12.4
                }
            ]
        },
        {
            name: "Jupiter",
            distance_from_sun_km: 778500000,
            diameter_km: 139820,
            moons: [
                {
                    name: "Io",
                    diameter_km: 3643
                },
                {
                    name: "Europa",
                    diameter_km: 3122
                }
            ]
        },
        {
            name: "Saturn",
            distance_from_sun_km: 1433000000,
            diameter_km: 116460,
            moons: [
                {
                    name: "Titan",
                    diameter_km: 5152
                },
                {
                    name: "Enceladus",
                    diameter_km: 504
                }
            ]
        },
        {
            name: "Uranus",
            distance_from_sun_km: 2871000000,
            diameter_km: 50724,
            moons: [
                {
                    name: "Titania",
                    diameter_km: 1578
                },
                {
                    name: "Oberon",
                    diameter_km: 1523
                }
            ]
        },
        {
            name: "Neptune",
            distance_from_sun_km: 4495000000,
            diameter_km: 49244,
            moons: [
                {
                    name: "Triton",
                    diameter_km: 2706
                }
            ]
        }
    ],
    stations: {
        ISS: {
            astronauts: [
                {
                    name: "Sunita Williams",
                    nationality: "American",
                    missions: 2
                },
                {
                    name: "Barry Wilmore",
                    nationality: "American",
                    missions: 2
                },
                {
                    name: "Donald Pettit",
                    nationality: "American",
                    missions: 3
                },
                {
                    name: "Alexey Ovchinin",
                    nationality: "Russian",
                    missions: 3
                },
                {
                    name: "Ivan Vagner",
                    nationality: "Russian",
                    missions: 1
                },
                {
                    name: "Aleksandr Gorbunov",
                    nationality: "Russian",
                    missions: 1
                },
                {
                    name: "Tyler Hague",
                    nationality: "American",
                    missions: 1
                }
            ]
        },
        "Tiangong Space Station": {
            astronauts: [
                {
                    name: "Cai Xuzhe",
                    nationality: "Chinese",
                    missions: 1
                },
                {
                    name: "Song Lingdong",
                    nationality: "Chinese",
                    missions: 1
                },
                {
                    name: "Wang Haoze",
                    nationality: "Chinese",
                    missions: 1
                }
            ]
        },
    }
}

app.use((req, res, next) => {
  console.log(req.method + req.url)
  next()
})


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Space API</h1>")
})

// Coding Exercises
// 1. Set up the /planets path that sends back the entire planets array


// 2. Set up the /planets/{id} path that sends back the planet object based on index
// e.g. /planets/0 sends back Mercury's object



// 3. Set up /planets/{id}/moons path that sends back just the moons of the planet
// e.g. /planets/3/moons sends back Mars's moons array



// 4. Set up the /ISS/{id} path that sends back the astronaut object based on index
// e.g. /ISS/2 sends back Donald Pettit's object



app.use((req, res, next) => {
  res.send("404 Not Found)
  next()
})

app.listen(3000, () => {
    console.log("Server running")
})
