/*Проверка ответа и отклонение промиса в случае ошибки*/
export const checkResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(
          new Error(`Ошибка ${response.status}: ${response.statusText}`)
        );
};

export const BASE_URL = 'https://api.mesto.nikrais.nomoredomainsrocks.ru'