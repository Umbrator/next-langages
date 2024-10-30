// /src/app/api/locations/route.jsx

export async function GET(req) {
    const locations = [
      {
        name: "San Francisco Office",
        address: "123 Market St, San Francisco, CA",
        lat: 37.7749,
        lng: -122.4194,
      },
      {
        name: "New York Office",
        address: "456 Broadway, New York, NY",
        lat: 40.7128,
        lng: -74.0060,
      },
      {
        name: "Los Angeles Office",
        address: "789 Hollywood Blvd, Los Angeles, CA",
        lat: 34.0522,
        lng: -118.2437,
      },
    ];
  
    return new Response(JSON.stringify(locations), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  