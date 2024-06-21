class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add("opened");
  }

  close() {
    this.popup.classList.remove("opened");
  }
}

const suggestNewsTriggers = document.querySelectorAll("[suggest-news]");
const suggestNewsCloseTrigger = document.querySelector("#suggest-news [close]");
const suggestNewsPopup = new Popup(document.getElementById("suggest-news"));

suggestNewsTriggers.forEach(item => item.onclick = () => suggestNewsPopup.open());
suggestNewsCloseTrigger.onclick = () => suggestNewsPopup.close();



const headerDrawerTriggers = document.querySelectorAll("[mobile-drawer]");
const headerDrawerCloseTrigger = document.querySelector("#header-drawer [close]");
const headerDrawerPopup = new Popup(document.getElementById("header-drawer"));

headerDrawerTriggers.forEach(item => item.onclick = () => headerDrawerPopup.open())
headerDrawerCloseTrigger.onclick = () => headerDrawerPopup.close();