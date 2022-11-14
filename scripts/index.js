const page = document.querySelector('.page');
const button = page.querySelector('.profile__button');
const overlay = page.querySelector('.overlay');
const edit_form = page.querySelector('.edit-form');
const close_button = page.querySelector('.edit-form__close');
const save_button = page.querySelector('.edit-form__save');
const heart = page.querySelectorAll('.element__heart');
const profile_info = page.querySelector('.profile__info');

button.addEventListener('click', function () {
    openEditForm(true)
})

close_button.addEventListener('click', function () {
    openEditForm(false)
})

save_button.addEventListener('click', edit_profile)

function openEditForm(state = false) {
    if (state) {
        overlay.classList += " _visible"
        edit_form.classList += " _visible"
    } else {
        overlay.classList.remove("_visible")
        edit_form.classList.remove("_visible")
    }
}

function edit_profile() {
    let name = document.querySelector('.edit-form__field_type_name');
    let description = document.querySelector('.edit-form__field_type_description');

    profile_info.insertAdjacentHTML('afterbegin', `
    <p class="profile__title">${name.value}</p>
    <p class="profile__subtitle">${description.value}</p>
  `);

    name.value = "";
    description.value = "";
}