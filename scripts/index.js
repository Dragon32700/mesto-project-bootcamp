const page = document.querySelector('.page');
const button = page.querySelector('.profile__button');
const addButton = page.querySelector('.profile__add-button');
const overlay = page.querySelector('.overlay');
const edit_form = document.getElementById('editForm');
const editCloseButton = document.getElementById('editFormClose');
const editSaveButton = document.getElementById('editFormSave');
const Add_form = document.getElementById('AddForm');
const AddCloseButton = document.getElementById('AddFormClose');
const AddSaveButton = document.getElementById('AddFormSave');
const heartButton = page.querySelectorAll('.element__heart');
const trashButton = page.querySelectorAll('.element__bin')
const profile_info = page.querySelector('.profile__info');
const elements = page.querySelector('.elements');
const element = page.querySelectorAll('.element');

button.addEventListener('click', function () {
    openEditForm(true)
})

editCloseButton.addEventListener('click', function () {
    openEditForm(false)
})

editSaveButton.addEventListener('click', edit_profile)

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
    const name = document.getElementById('editName');
    const description = document.getElementById('editDescription');
    const title = document.querySelector('.profile__title')
    const subtitle = document.querySelector('.profile__subtitle')
    title.remove();
    subtitle.remove();

    profile_info.insertAdjacentHTML('afterbegin', `
    <p class="profile__title">${name.value}</p>
    <p class="profile__subtitle">${description.value}</p>
  `);

    name.value = "";
    description.value = "";
}

addButton.addEventListener('click', function () {
    openAddForm(true)
})

AddCloseButton.addEventListener('click', function () {
    openAddForm(false)
})

AddSaveButton.addEventListener('click', add_profile)

function openAddForm(state = false) {
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    if (state) {
        overlay.classList += " _visible"
        Add_form.classList += " _visible"
    } else {
        overlay.classList.remove("_visible")
        Add_form.classList.remove("_visible")
    }
}

function add_profile() {
    const name = document.getElementById('AddName');
    const description = document.getElementById('AddDescription');
    elements.insertAdjacentHTML('afterbegin', `
    <article class="element">
    <img alt="добавленная пользователем" class="element__image" src="${description.value}">
    <button class="element__bin" type="reset"></button>
    <h2 class="element__title">${name.value}</h2>
    <button class="element__heart" type="button"></button>
    </article>`);
    
    name.value = "";
    description.value = "";
}

trashButton.target.addEventListener('click', removeElement);

function removeElement() {
    removeElement(trashButton)
}