export default function selectCity(city) {
    return {
      type: 'CITY_SELECTED',
      payload: city
    };
  }