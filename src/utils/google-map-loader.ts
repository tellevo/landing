import { Loader } from '@googlemaps/js-api-loader';

let loaderInstance: Loader | null = null;

export const getGoogleMapsLoader = () => {
  if (!loaderInstance) {
    loaderInstance = new Loader({
      apiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places', 'routes'], // Include all required libraries
    });
  }
  return loaderInstance;
};