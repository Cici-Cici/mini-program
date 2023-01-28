import Taro from '@tarojs/taro';

const authorizeInterceptor = function authorizeInterceptor(chain) {
  const { requestParams } = chain;
  const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNywic3ViIjoiYWRtaW4iLCJhdWQiOiJ1c2VyIiwidGN0IjoxNjY5NzM3NjAwfQ.4zYZRh5yCapP36KqYAPLe9l342fKGy_2m-zY7MMyTkc'
  const contentType = {
    'content-type': 'application/json'
  }
  requestParams.header = { ...requestParams, ...contentType};
    // : { ...requestParams};
 requestParams.header = { ...requestParams.header, authorization: Token }
 
  return chain.proceed(requestParams).then((res) => {
    return res;
  });
};


function createTaroRequest() {
  Taro.addInterceptor(authorizeInterceptor);
  return Taro.request;
}

export default createTaroRequest();
