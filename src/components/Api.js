class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
////////////////////////////////////
  getUserMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res=>this._getResponseData(res));
  }
////////////////////////////
  setUserMe(dataFormProfile) {
    return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: dataFormProfile.name,
      about: dataFormProfile.about
    })
  })
  .then(res=>this._getResponseData(res));
  }
//////////////////////////////
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards `, {
      headers: this._headers
    })
    .then(res=>this._getResponseData(res));
  }
////////////////////////////
  setNewCard(dataFormCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataFormCard.name,
        link: dataFormCard.link
      })
    })
    .then(res=>this._getResponseData(res));
  }
/////////////////////////////////////
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res=>this._getResponseData(res));
  }
///////////////////////////////
  pullOffLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res=>this._getResponseData(res));
  }
//////////////////////////
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res=>this._getResponseData(res));
  }
/////////////////////////////
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar `, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res=>this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

}


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '556c5b87-238d-4c2c-8407-688a4bc72429',
    'Content-Type': 'application/json'
  }
});

