import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7083/tellevoapp/contacto';

export interface RegistroFormData {
  nombre: string;
  email: string;
  interes: string;
  motivo?: string;
}

export const enviarRegistro = async (formData: RegistroFormData): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/landing`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al enviar el registro:', error);
    throw new Error('No se pudo enviar el registro. Por favor, intenta nuevamente.');
  }
};
