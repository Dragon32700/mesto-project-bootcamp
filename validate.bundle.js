(()=>{var t=function(t,e){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.setAttribute("disabled",!0),e.classList+=" _disabled"):(e.removeAttribute("disabled"),e.classList.remove("_disabled"))};Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),Array.from(e.querySelectorAll(".popup__set")).forEach((function(e){!function(e){var r=Array.from(e.querySelectorAll(".popup__input")),o=e.querySelector(".popup__submit");t(r,o),r.forEach((function(i){i.addEventListener("input",(function(){!function(t,e){e.validity.valid?function(t,e){var r=t.querySelector(".".concat(e.id,"_error"));e.classList.remove("popup__input_type_error"),r.classList.remove("popup__input_error_active"),r.textContent=""}(t,e):function(t,e,r){var o=t.querySelector(".".concat(e.id,"_error"));e.classList.add("popup__input_type_error"),o.textContent=r,o.classList.add("popup__input_error_active")}(t,e,e.validationMessage)}(e,i),t(r,o)}))}))}(e)}))}))})();