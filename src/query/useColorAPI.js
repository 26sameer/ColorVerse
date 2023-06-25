import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useColorAPI = (color, mode) => {
  const fetchScheme = () => {
    return axios.get(
      `https://www.thecolorapi.com/scheme?hex=${color.slice(
        1
      )}&format=json&mode=${mode}&count=4`
    );
  };

  return useQuery({
    queryKey: ['color'],
    queryFn: fetchScheme,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
