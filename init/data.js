const database = require('../config/mongoose');

const sampleListings1 = [
  {
    Facillity_Title: "Community Hall A",
    Facillity_Category: "Community",
    Facillity_Description: "A spacious hall for community events.",
    Facillity_Adderess: "123 Main Street, Springfield",
    Facillity_Latitude: 37.7749,
    Facillity_Longitude: -122.4194,
    facillity_Postcode: 94103,
    Facillity_Status: "Available",
    Facillity_Image: "https://cdn8.dissolve.com/p/D145_224_382/D145_224_382_1200.jpg"
  },
  {
    Facillity_Title: "Sports Complex B",
    Facillity_Category: "Sports",
    Facillity_Description: "State-of-the-art sports facilities.",
    Facillity_Adderess: "456 Elm Street, Riverdale",
    Facillity_Latitude: 40.7128,
    Facillity_Longitude: -74.0060,
    facillity_Postcode: 10001,
    Facillity_Status: "Under Maintenance",
    Facillity_Image: "https://media.istockphoto.com/id/2102472412/photo/public-high-school-sports-facilities-in-florida-american-football-stadium-tennis-courts-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=z3yaqDBP_XKryZMxxY-Gh3JvpYRmveiQGQQK2e5kKOM="
  },
  {
    Facillity_Title: "Library C",
    Facillity_Category: "Education",
    Facillity_Description: "Public library with extensive resources.",
    Facillity_Adderess: "789 Maple Avenue, Greenville",
    Facillity_Latitude: 34.0522,
    Facillity_Longitude: -118.2437,
    facillity_Postcode: 90012,
    Facillity_Status: "Available",
    Facillity_Image: "https://plus.unsplash.com/premium_photo-1703701579262-917f22239fe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlicmFyeSUyMEN8ZW58MHx8MHx8fDA%3D"
  },
  {
    Facillity_Title: "Health Center D",
    Facillity_Category: "Health",
    Facillity_Description: "A fully equipped health center.",
    Facillity_Adderess: "321 Oak Street, Metropolis",
    Facillity_Latitude: 41.8781,
    Facillity_Longitude: -87.6298,
    facillity_Postcode: 60616,
    Facillity_Status: "Closed",
    Facillity_Image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVhbHRoJTIwQ2VudGVyJTIwRHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    Facillity_Title: "Stadium E",
    Facillity_Category: "Sports",
    Facillity_Description: "Large stadium for various sports events.",
    Facillity_Adderess: "654 Pine Road, Bayside",
    Facillity_Latitude: 36.7783,
    Facillity_Longitude: -119.4179,
    facillity_Postcode: 93722,
    Facillity_Status: "Available",
    Facillity_Image: "https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RhZGl1bSUyMEV8ZW58MHx8MHx8fDA%3D"
  }
];


module.exports = sampleListings1;
