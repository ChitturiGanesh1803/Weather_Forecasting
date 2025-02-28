// // import config from '../config';

// // export const fetchWeatherByCoordinates = async (latitude, longitude) => {
// //   const url = `${config.API_URL}?lat=${latitude}&lon=${longitude}&appid=${config.API_KEY}&units=metric`;

// //   console.log("Fetching weather by coordinates:", url); // ✅ Debugging

// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();

// //     console.log("API Response:", data); // ✅ Check the API response

// //     if (!response.ok) {
// //       throw new Error(data.message || "Weather data not available");
// //     }

// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching weather:", error);
// //     throw error;
// //   }
// // };

// // export const fetchWeatherByZipCode = async (zipCode) => {
// //   const url = `${config.API_URL}?zip=${zipCode}&appid=${config.API_KEY}&units=metric`;

// //   console.log("Fetching weather by ZIP:", url); // ✅ Debugging

// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();

// //     console.log("API Response:", data); // ✅ Check the API response

// //     if (!response.ok) {
// //       throw new Error(data.message || "Weather data not available");
// //     }

// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching weather:", error);
// //     throw error;
// //   }
// // };
// import config from '../config';

// export const fetchWeatherByCoordinates = async (latitude, longitude) => {
//   const url = `${config.API_URL}?lat=${latitude}&lon=${longitude}&appid=${config.API_KEY}&units=metric`;

//   console.log("Fetching weather by coordinates:", url); // Debugging

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log("API Response:", data); // Debugging

//     if (!response.ok) {
//       throw new Error(data.message || "Weather data not available");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error fetching weather:", error);
//     throw error;
//   }
// };

// export const fetchWeatherByZipCode = async (zipCode) => {
//   const url = `${config.API_URL}?zip=${zipCode},IN&appid=${config.API_KEY}&units=metric`;

//   console.log("Fetching weather by ZIP:", url); // Debugging

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log("API Response:", data); // Debugging

//     if (!response.ok) {
//       throw new Error(data.message || "Weather data not available");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error fetching weather:", error);
//     throw error;
//   }
// };
import config from '../config';

export const fetchWeatherByCoordinates = async (latitude, longitude) => {
  const url = `${config.API_URL}?lat=${latitude}&lon=${longitude}&appid=${config.API_KEY}&units=metric`;

  console.log("Fetching weather by coordinates:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Weather data not available");
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export const fetchWeatherByZipCode = async (zipCode) => {
  const url = `${config.API_URL}?zip=${zipCode},IN&appid=${config.API_KEY}&units=metric`;

  console.log("Fetching weather by ZIP:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Weather data not available");
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

// ✅ NEW FUNCTION: Fetch Weather by City Name
export const fetchWeatherByCity = async (cityName) => {
  const url = `${config.API_URL}?q=${cityName},IN&appid=${config.API_KEY}&units=metric`;

  console.log("Fetching weather by city:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Weather data not available");
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};
