import axios from 'axios';
import { useState } from 'react';

import { fetchInstance } from '@/api/instance';

interface RegisterRequest {
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const register = async (email: string, password: string) => {
    setLoading(true);
    setRegisterError(null);

    try {
      const requestPayload: RegisterRequest = { email, password };
      const response = await fetchInstance.post('/members/register', requestPayload);

      const result: RegisterResponse = response.data;
      localStorage.setItem('token', result.token);

      return { success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setRegisterError('회원가입 실패');
      } else {
        setRegisterError('회원가입 처리 중 오류가 발생했습니다.');
      }
      console.error(error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, registerError };
};
