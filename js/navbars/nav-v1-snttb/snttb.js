const NAVBAR_TOGGLER = document.querySelectorAll("[data-js-trigger='snttb-navbar-toggler']");
const DROPDOWN_MENU_CONTAINER = document.querySelectorAll("[data-js-trigger='snttb-dropdown-container']");

// navbarExpandTopToBottom


export const addFunctionalityToIgNavbarSnttb = () => {
  if (NAVBAR_TOGGLER.length > 0) {
    addOverflowYToExpandedNavbar();
  }

  if (DROPDOWN_MENU_CONTAINER.length > 0) {
    preventDefaultInDropdownAnchorTag();
  }
  if (NAVBAR_TOGGLER.length > 0) {
    makeNavbarAccessibleByKeystrokes();
  }
};

//////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////

const addOverflowYToExpandedNavbar = () => {
  const checkbox = document.querySelectorAll("[data-js-trigger='snttb-navbar-toggler-checkbox']").item(0);
  const navbarContainer = document.querySelectorAll("[data-js-trigger='snttb-navbar-container']").item(0);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      setTimeout(() => {
        navbarContainer.style.overflowY = "auto";
      }, 500);
    } else {
      navbarContainer.style.overflowY = "hidden";
    }
  });
};

const preventDefaultInDropdownAnchorTag = () => {
  const dropdownContainer = document.querySelectorAll("[data-js-trigger='snttb-dropdown-container']").item(0);
  const dropdownToggler = document.querySelectorAll("[data-js-trigger='snttb-dropdown-toggler']").item(0);
  dropdownContainer.setAttribute("aria-expanded", "true");
  dropdownToggler.addEventListener("click", (e) => e.preventDefault());
};

const makeNavbarAccessibleByKeystrokes = () => {
  var navbarTogglerCheckbox = document.querySelectorAll("[data-js-trigger='snttb-navbar-toggler-checkbox']").item(0);

  var enterKeyCode = 13;
  var spaceKeyCode = 32;

  NAVBAR_TOGGLER.item(0).addEventListener("keyup", function (event) {
    if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
      var menuOpen = navbarTogglerCheckbox.checked;

      if (menuOpen) {
        navbarTogglerCheckbox.checked = false;
      } else {
        navbarTogglerCheckbox.checked = true;
      }
    }
  });
};
