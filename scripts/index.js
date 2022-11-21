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

AddSaveButton.addEventListener('click', function () {
    const name = document.getElementById('AddName');
    const description = document.getElementById('AddDescription');

    add_profile(name.value, description.value);

    name.value = "";
    description.value = "";
})

function openAddForm(state = false) {
    if (state) {
        overlay.classList += " _visible"
        Add_form.classList += " _visible"
    } else {
        overlay.classList.remove("_visible")
        Add_form.classList.remove("_visible")
    }
}

function add_profile(nameValue, descriptionValue) {
    const elementTamplate = document.getElementById('element-template').content;
    const elementEl = elementTamplate.querySelector('.element').cloneNode(true);

    elementEl.querySelector('.element__title').textContent = nameValue;
    elementEl.querySelector('.element__image').src = descriptionValue;
    elements.prepend(elementEl);
}

Array.from(element).forEach(function (element) {
    element.addEventListener('click', removeElement);
});

function removeElement(event) {
    if (event.target.classList.contains('element__bin')) {
        event.currentTarget.remove();
    }
}

Array.from(heartButton).forEach(function (element) {
    element.addEventListener('click', likeElement);
});

function likeElement(event) {
    if (event.target.classList.contains('element__heart')) {
        event.currentTarget.classList += " _active";
    } else {
        event.currentTarget.classList.remove("_active");
    }
}