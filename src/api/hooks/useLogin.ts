import axios, { type AxiosError } from 'axios';
import { useState } from 'react';

import { fetchInstance } from '@/api/instance';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  token: string;
}

interface ErrorResponse {
  message: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setLoginError(null);

    try {
      const requestPayload: LoginRequest = { email, password };
      const response = await fetchInstance.post('/members/login', requestPayload);

      const result: LoginResponse = response.data;
      localStorage.setItem('token', result.token);

      return { success: true, email: result.email };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          const errorResult: ErrorResponse = axiosError.response.data;
          if (axiosError.response.status === 401) {
            setLoginError('유효하지 않은 인증 정보');
          } else if (axiosError.response.status === 403) {
            setLoginError('잘못된 로그인 시도');
          } else {
            setLoginError(errorResult.message || '로그인 실패');
          }
        } else {
          setLoginError('로그인 처리 중 오류가 발생했습니다.');
        }
      } else {
        setLoginError('로그인 처리 중 오류가 발생했습니다.');
      }
      console.error(error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, loginError };
};
