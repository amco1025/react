// 학생으로 로그인 하는지 선생님으로 로그인하는지 확인하여 각 페이지 보여주기

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import BackgroundImg from '../../assets/background.png';

const schema = yup.object().shape({
  id: yup.string().required('아이디는 필수입니다.'),
  password: yup.string().required('비밀번호는 필수입니다.'),
});

function Login(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // 선생님으로 로그인하는지 학생으로 로그인하는지 try쪽에서 보여주기
    try {
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white rounded-lg shadow-lg w-1/3 h-1/2 py-12 px-10 right-1/3 fixed top-1/4">
        <h2 className="text-2xl font-bold mb-12 text-black">로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="id"
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="아이디"
                className="block w-full mb-8 border-2 border-gray-200 p-2 rounded-md"
              />
            )}
          />
          <p>{errors.id?.message}</p>

          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="비밀번호"
                className="block w-full mb-8 border-2 border-gray-200 p-2 rounded-md"
              />
            )}
          />
          <p>{errors.password?.message}</p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
