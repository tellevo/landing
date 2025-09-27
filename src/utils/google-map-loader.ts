import { Loader } from '@googlemaps/js-api-loader';

let loaderInstance: Loader | null = null;

export const isMapsApiKeyPresent = (): boolean => {
  const key = (import.meta as any).env?.PUBLIC_GOOGLE_MAPS_API_KEY as string | undefined;
  return !!key && key.trim().length > 0;
};

export const getGoogleMapsLoader = () => {
  if (!loaderInstance) {
    if (!isMapsApiKeyPresent()) {
      throw new Error('Missing PUBLIC_GOOGLE_MAPS_API_KEY in environment variables');
    }
    loaderInstance = new Loader({
      apiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places', 'routes'], // Include all required libraries
    });
  }
  return loaderInstance;
};