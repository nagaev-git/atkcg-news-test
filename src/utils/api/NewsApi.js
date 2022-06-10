class NewsApi {
  constructor({ url }) {
    this._url = url;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getNews() {
    return fetch(this._url, {
      method: "GET",
    }).then(this._handleResponse);
  }
}

export default new NewsApi({
  url: "https://inshorts.deta.dev/news?category=technology",
});
