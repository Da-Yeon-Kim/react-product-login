import { useState } from 'react';

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
      const response = await fetch('/api/members/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload),
      });

      if (response.ok) {
        const result: LoginResponse = await response.json();
        localStorage.setItem('token', result.token);
        return { success: true, email: result.email };
      } else {
        let errorMessage = '로그인 실패';

        if (response.status === 401) {
          errorMessage = '유효하지 않은 인증 정보';
        } else if (response.status === 403) {
          errorMessage = '잘못된 로그인 시도';
        }

        const errorResult: ErrorResponse = await response.json();
        setLoginError(errorResult.message || errorMessage);
        return { success: false };
      }
    } catch (error) {
      setLoginError('로그인 처리 중 오류가 발생했습니다.');
      console.error(error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, loginError };
};
