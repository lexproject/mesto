export default class UserInfo {
  constructor ({name, about, avatar, nameInput, aboutInput}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._nameInput = document.querySelector(nameInput);
    this._aboutInput = document.querySelector(aboutInput);
  }

  getUserInfo () {
    const dataUser = {};
    dataUser.name = this._name.textContent;
    dataUser.about = this._about.textContent;
    return dataUser;
  }

  setUserInfo (userData) {
    this._name.textContent = userData.name;
    this._name.id = userData._id;
    this._about.textContent = userData.about;
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }

}
