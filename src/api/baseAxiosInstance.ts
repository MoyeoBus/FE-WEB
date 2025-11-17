import axios from 'axios';

const baseAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAxiosInstance.interceptors.response.use(
  res => res,
  error => {
    console.error(error);

    // 네트워크 오류 처리 응답이 없는 경우
    if (!error.response) {
      alert('네트워크 오류가 발생했습니다.');
    }

    // 컴포넌트에서도 에러를 처리할 수 있게 보낸다.
    return Promise.reject(error);
  }
);

export default baseAxiosInstance;
