export default class UserInfo {
  constructor ({name, about, avatar}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo () {
    const dataUser = {};
    dataUser.name = this._name.textContent;
    dataUser.about = this._about.textContent;
    return dataUser;
  }

  setUserInfo (userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }

}
