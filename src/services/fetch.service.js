import API_ROUTES from 'src/shared/api.routes';

class FetchService {
  _getRoute = (route) => `${API_ROUTES.root}${route}`;
  _headers = () => {
    return {
      'content-type': 'application/json',
      Accept: 'application/json',
    };
  };

  _successCallback = (resolve, reject) => async (response) => {
    const data = await response.json();
    if (response.ok) {
      resolve(data);
    }
    if (response.status === 400) {
      reject(data ?? 'Bad request');
    } else if (response.status === 401) {
      reject(data ?? 'Unauthorized');
    } else if (response.status === 403) {
      reject(data ?? 'Forbiden');
    } else if (response.status === 404) {
      reject(data ?? 'Not Found');
    } else if (response.status === 500) {
      reject(data ?? 'Internal server error');
    }
    reject(data);
  };
  _rejectCallback = (reject) => (err) => reject(err);

  _getParams = (options) => {
    if (options) {
      return Object.keys(options)
        .map((option) => `&${option}=${options[option]}`)
        .join('');
    } else {
      return '';
    }
  };

  get = (route) =>
    new Promise((resolve, reject) =>
      fetch(this._getRoute(route), { headers: this._headers() }).then(this._successCallback(resolve, reject), reject)
    );

  post = (route, body) =>
    new Promise((resolve, reject) =>
      fetch(this._getRoute(route), { method: 'POST', headers: this._headers(), body: JSON.stringify(body) }).then(
        this._successCallback(resolve, reject),
        reject
      )
    );
}

const fetchService = new FetchService();
export default fetchService;
