import { useState } from 'react';

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
      const response = await fetch('/api/members/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload),
      });

      const result: RegisterResponse = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        return { success: true };
      } else {
        setRegisterError('회원가입 실패');
        return { success: false };
      }
    } catch (error) {
      setRegisterError('회원가입 처리 중 오류가 발생했습니다.');
      console.error(error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, registerError };
};
