
    var contactsLink = document.querySelector(".button-contacts");
    var contactsPopup = document.querySelector(".write-to-us");
    var contactsClose = contactsPopup.querySelector(".close");
    var form = contactsPopup.querySelector(".write");
    var userName = contactsPopup.querySelector("[name=user-name]");
    var eml = contactsPopup.querySelector("[name=eml]");
    contactsLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactsPopup.classList.add("modal-show");
      userName.focus();
    });
    contactsClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    });
    form.addEventListener("submit", function (evt) {
      if (!userName.value || !eml.value) {
        evt.preventDefault();
        contactsPopup.classList.remove("modal-error");
        contactsPopup.offsetWidth = contactsPopup.offsetWidth;
        contactsPopup.classList.add("modal-error");
      }
    });
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (contactsPopup.classList.contains("modal-show")) {
          contactsPopup.classList.remove("modal-show");
          contactsPopup.classList.remove("modal-error");
        }
      }
    });
    var mapLink = document.querySelector(".button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".close");
    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
      }
    });
    var buyLink = document.querySelectorAll(".button-buy");
    var buyPopup = document.querySelector(".modal-catalog");
    var buyClose = buyPopup.querySelector(".close");
    for (var i = 0; i < buyLink.length; i++) {
      buyLink[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        buyPopup.classList.add("modal-show");
      });
    }
    buyClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (buyPopup.classList.contains("modal-show")) {
            buyPopup.classList.remove("modal-show");
        }
      }
    });

