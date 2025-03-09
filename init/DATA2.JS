
const database2 = require('../config/mongoose');
const sampleListingsdata = [
  {
    Facillity_Title: "Community Garden A",
    Facillity_Category: "Gardening",
    Facillity_Description: "Shared gardening space for urban residents.",
    Facillity_Adderess: "123 Greenway Blvd, Springfield",
    Facillity_Latitude: 40.7128,
    Facillity_Longitude: -74.006,
    facillity_Postcode: 10001,
    Facillity_Status: "Available",
    Facillity_Image: "https://images.unsplash.com/photo-1521736233907-c1ab12e557bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvbW11bml0eSUyMEdhcmRlbiUyMEF8ZW58MHx8MHx8fDA%3D"
  },
  {
    Facillity_Title: "Solar Charging Station B",
    Facillity_Category: "Energy",
    Facillity_Description: "Solar-powered charging station for electric vehicles.",
    Facillity_Adderess: "89 Solar Street, San Diego",
    Facillity_Latitude: 32.7157,
    Facillity_Longitude: -117.1611,
    facillity_Postcode: 92101,
    Facillity_Status: "Available",
    Facillity_Image: "https://plus.unsplash.com/premium_photo-1680262688255-7679523821b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29sYXIlMjBDaGFyZ2luZyUyMFN0YXRpb24lMjBCfGVufDB8fDB8fHww"
  },
  {
    Facillity_Title: "Biking Trail C",
    Facillity_Category: "Recreation",
    Facillity_Description: "Scenic biking trail surrounded by nature.",
    Facillity_Adderess: "456 Cycle Lane, Boulder",
    Facillity_Latitude: 40.015,
    Facillity_Longitude: -105.2705,
    facillity_Postcode: 80302,
    Facillity_Status: "Available",
    Facillity_Image: "https://plus.unsplash.com/premium_photo-1684274186180-026782ae24ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlraW5nJTIwVHJhaWwlMjBDfGVufDB8fDB8fHww"
  },
  {
    Facillity_Title: "Rainwater Harvesting Unit D",
    Facillity_Category: "Water Conservation",
    Facillity_Description: "Facility for rainwater collection and storage.",
    Facillity_Adderess: "67 Rain Alley, Austin",
    Facillity_Latitude: 30.2672,
    Facillity_Longitude: -97.7431,
    facillity_Postcode: 73301,
    Facillity_Status: "Under Maintenance",
    Facillity_Image: "https://media.istockphoto.com/id/1040905734/photo/underground-rainwater-storage-tanks.webp?a=1&b=1&s=612x612&w=0&k=20&c=zc9LhWS1FhkOaB0HzfO9t-yBxw5nvN8m6srcRt9RuNg="
  },
  {
    Facillity_Title: "Eco Park E",
    Facillity_Category: "Recreation",
    Facillity_Description: "Park with eco-friendly amenities and green spaces.",
    Facillity_Adderess: "234 Greenfield Ave, Portland",
    Facillity_Latitude: 45.5051,
    Facillity_Longitude: -122.675,
    facillity_Postcode: 97201,
    Facillity_Status: "Available",
    Facillity_Image: "https://media.istockphoto.com/id/2185029526/photo/aerial-view-of-urban-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q2xc_dUw-tUg_dPvIiGfcSq5QhBqXIflvbhOU_nePx4="
  },
  {
    Facillity_Title: "Recycling Center F",
    Facillity_Category: "Recycling",
    Facillity_Description: "Drop-off facility for recyclable materials.",
    Facillity_Adderess: "98 Waste-Free Drive, Seattle",
    Facillity_Latitude: 47.6062,
    Facillity_Longitude: -122.3321,
    facillity_Postcode: 98101,
    Facillity_Status: "Available",
    Facillity_Image: "https://media.istockphoto.com/id/97577772/photo/industrial-hamilton-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=VvqcR6EFwS44UYeC74EjtgKZnqYUzqKwah4ucR_8ZpI="
  },
  {
    Facillity_Title: "Composting Hub G",
    Facillity_Category: "Waste Management",
    Facillity_Description: "Community composting facility for organic waste.",
    Facillity_Adderess: "876 Compost Ave, Chicago",
    Facillity_Latitude: 41.8781,
    Facillity_Longitude: -87.6298,
    facillity_Postcode: 60605,
    Facillity_Status: "Available",
    Facillity_Image: "https://media.istockphoto.com/id/1353948217/photo/raking-and-turning-a-pile-of-compost.webp?a=1&b=1&s=612x612&w=0&k=20&c=uKyx5wSnQcCc2ZUyquPkWuFqwoE244LobDRkIGqHQrg="
  },
  {
    Facillity_Title: "Wildlife Sanctuary H",
    Facillity_Category: "Conservation",
    Facillity_Description: "Sanctuary for endangered wildlife species.",
    Facillity_Adderess: "12 Sanctuary Lane, Phoenix",
    Facillity_Latitude: 33.4484,
    Facillity_Longitude: -112.074,
    facillity_Postcode: 85001,
    Facillity_Status: "Closed",
    Facillity_Image: "https://media.istockphoto.com/id/526707655/photo/heron.webp?a=1&b=1&s=612x612&w=0&k=20&c=YSl7qv0vFIIDom8wQkZE6wS6l0YH0VkvlOKuD35i_0Y="
  },
  {
    Facillity_Title: "Urban Forest I",
    Facillity_Category: "Forestation",
    Facillity_Description: "Rehabilitated forest area in the heart of the city.",
    Facillity_Adderess: "45 Leafy Way, Los Angeles",
    Facillity_Latitude: 34.0522,
    Facillity_Longitude: -118.2437,
    facillity_Postcode: 90012,
    Facillity_Status: "Available",
    Facillity_Image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VXJiYW4lMjBGb3Jlc3QlMjBJfGVufDB8fDB8fHww"
  },
  {
    Facillity_Title: "Eco-Friendly Workshop J",
    Facillity_Category: "Education",
    Facillity_Description: "Learn eco-friendly practices and sustainable living.",
    Facillity_Adderess: "789 Knowledge Blvd, Boston, MA, 02110",
    Facillity_Latitude: 42.3601,
    Facillity_Longitude: -71.0589,
    facillity_Postcode: 60655,
    Facillity_Status: "Available",
    Facillity_Image: "https://plus.unsplash.com/premium_photo-1682309652843-ed4eb60d473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVjbyUyMEZyaWVuZGx5JTIwV29ya3Nob3AlMjBKfGVufDB8fDB8fHww"
  },
  {
    Facillity_Title: "Organic Farmers' Market K",
    Facillity_Category: "Organic Produce",
    Facillity_Description: "Market offering locally grown organic fruits and vegetables.",
    Facillity_Adderess: "123 Orchard Road, San Francisco",
    Facillity_Latitude: 37.7749,
    Facillity_Longitude: -122.4194,
    facillity_Postcode: 94103,
    Facillity_Status: "Available",
    Facillity_Image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE9yZ2FuaWMlMjBGYXJtZXJzJyUyME1hcmtldCUyMEt8ZW58MHx8MHx8fDA%3D"
  }
]
module.exports = sampleListingsdata;