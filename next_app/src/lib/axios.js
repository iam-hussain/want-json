import axios from 'axios';

export default async function axiosCall(URL, METHOD, DATA) {
  return await axios({
    method: METHOD,
    url: `http://localhost:4040/web/${URL}`,
    data: DATA,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      return {
        success: false,
        message: [
          { param: 'server', msg: 'Unexpeted response status on axios call' },
        ],
      };
    })
    .catch((error) => {
      console.log('Axios error=', error);
      return {
        success: false,
        message: [{ param: 'server', msg: 'Unexpeted error on axios call' }],
      };
    });
}
