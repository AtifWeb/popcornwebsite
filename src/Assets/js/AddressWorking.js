let ResultWrapper = false;

export const HandleSecondStepOnFocuse = (e) => {
  e.target.nextElementSibling.style.borderBottomLeftRadius = 0;
  e.target.nextElementSibling.style.borderBottomRightRadius = 0;
  document.querySelector(".result-wrapper").style.display = "block";

  document
    .querySelector(".result-wrapper")
    .addEventListener("mouseenter", (e) => {
      ResultWrapper = true;
      console.log("enter");
    });
  document
    .querySelector(".result-wrapper")
    .addEventListener("mouseleave", (e) => {
      ResultWrapper = false;
      console.log("leave");
    });

  document.querySelector(".address-error").style.display = "none";

  document.querySelector(".country-select").classList.add("active");
};

export const HandleSecondStepOnBlur = (e) => {
  let label = e.target.parentNode.previousElementSibling;
  let BorderElement = e.target.nextElementSibling;
  let Address = document.querySelector("#address");
  let Addresslabel = Address.parentNode.previousElementSibling;
  let AddressBorderElement = Address.nextElementSibling;

  if (e.target.id == "address") {
    document.querySelector(".country-select").classList.remove("active");
    if (ResultWrapper == false) {
      document.querySelector(".address-error").style.display = "block";
      Addresslabel.style.color = "red ";
      AddressBorderElement.style.borderColor = "red ";
      document.querySelector(".result-wrapper").style.display = "none";

      e.target.nextElementSibling.style.borderBottomLeftRadius = "5px";
      e.target.nextElementSibling.style.borderBottomRightRadius = "5px";
    }
    if (e.target.value.length > 0) {
      // label.style.color = "#000";
      // BorderElement.style.borderColor = "#000";
      // document.querySelector(".expand-address").classList.add("active")
    } else {
      Addresslabel.style.color = "red ";
      AddressBorderElement.style.borderColor = "red ";
    }
  }
};
