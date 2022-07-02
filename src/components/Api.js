class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
////////////////////////////////////
  getUserMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });
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
  });
  }
//////////////////////////////
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards `, {
      headers: this._headers
    });
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
    });
  }
/////////////////////////////////////
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    });
  }
///////////////////////////////
  pullOffLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
//////////////////////////
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
/////////////////////////////
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar `, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: avatar
    })
  });
  }
}


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '556c5b87-238d-4c2c-8407-688a4bc72429',
    'Content-Type': 'application/json'
  }
});

