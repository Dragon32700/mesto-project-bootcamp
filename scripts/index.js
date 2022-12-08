const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__button');
const addButton = page.querySelector('.profile__add-button');
const overlay = page.querySelector('.overlay');
const editForm = page.querySelector('.editForm');
const editCloseButton = page.querySelector('.editFormClose');
const editSaveButton = page.querySelector('.editFormSave');
const AddForm = page.querySelector('.AddForm');
const AddCloseButton = page.querySelector('.AddFormClose');
const AddSaveButton = page.querySelector('.AddFormSave');
const imageCloseButton = page.querySelector('.imageFormClose')
const heartButtons = page.querySelectorAll('.element__heart');
const trashButton = page.querySelectorAll('.element__bin')
const profile_info = page.querySelector('.profile__info');
const elements = page.querySelector('.elements');
const element = page.querySelectorAll('.element');
const image = page.querySelectorAll('.buttonImage')
const fullImage = page.querySelector('.fullImage');
const FormAdd = document.forms.FormAdd;
const nameAdd = page.querySelector(".AddName");
const descriptionAdd = page.querySelector(".AddDescription");
const FormEdit = document.forms.FormEdit;
const nameEdit = page.querySelector(".editName");
const descriptionEdit = page.querySelector(".editDescription");
const inputAdd = page.querySelector('.popup__input');
const errorMessage = page.querySelectorAll(`.popup__input_error`);

createElements();

profileEditButton.addEventListener('click', openEditForm)

editCloseButton.addEventListener('click', closeEditForm)

FormEdit.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile()
});

function openEditForm() {
    overlay.classList += " _opened"
    editForm.classList += " popup__opened"
}

function closeEditForm() {
    overlay.classList.remove("_opened")
    editForm.classList.remove("popup__opened")
}

function editProfile() {
    const name = page.querySelector('.editName');
    const description = page.querySelector('.editDescription');
    const title = page.querySelector('.profile__title')
    const subtitle = page.querySelector('.profile__subtitle')
    title.textContent = name.value;
    subtitle.textContent = description.value;
    FormEdit.reset();
    EditsetSubmitButtonState(false);
}

addButton.addEventListener('click', openAddForm)

AddCloseButton.addEventListener('click', closeAddForm)

FormAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const name = page.querySelector('.AddName');
    const description = page.querySelector('.AddDescription');

    addProfile(name.value, description.value);

    FormAdd.reset();
    AddsetSubmitButtonState(false);
})

function openAddForm() {
    overlay.classList += " _opened"
    AddForm.classList += " popup__opened"
}

function closeAddForm() {
    overlay.classList.remove("_opened")
    AddForm.classList.remove("popup__opened")
}

function addProfile(nameValue, descriptionValue) {
    const elementTamplate = page.querySelector('.element-template').content;
    const elementEl = elementTamplate.querySelector('.element').cloneNode(true);

    elementEl.querySelector('.element__title').textContent = nameValue;
    elementEl.querySelector('.element__image').src = descriptionValue;
    elementEl.querySelector('.element__image').alt = "вставленная пользователем"
    elementEl.querySelector('.element__heart').addEventListener('click', function (element) {
        element.target.classList.toggle('_active')
    });
    elementEl.querySelector('.element__bin').addEventListener('click', function (element) {
        element.target.parentNode.remove();
    });
    Array.from(image).forEach(function (element) {
        element.addEventListener('click', openImageForm);
    })
    elements.prepend(elementEl);
}

FormAdd.addEventListener('input', function (evt) {
    if (nameAdd.value.length > 0 && descriptionAdd.value.length > 0) 
    {
        AddsetSubmitButtonState(true)
    } else {
        AddsetSubmitButtonState(false)
    }
});

FormEdit.addEventListener('input', function (evt) {
    if (nameEdit.value.length > 0 && descriptionEdit.value.length > 0) {
        EditsetSubmitButtonState(true)
    } else {
        EditsetSubmitButtonState(false)
    }
});

function AddsetSubmitButtonState(isFormValid) {
    if (isFormValid) {
        AddSaveButton.removeAttribute('disabled');
        AddSaveButton.classList.remove('_disabled');
    } else {
        AddSaveButton.setAttribute('disabled', true);
        AddSaveButton.classList += ' _disabled';
    }
}

function EditsetSubmitButtonState(isFormValid) {
    if (isFormValid) {
        editSaveButton.removeAttribute('disabled');
        editSaveButton.classList.remove('_disabled');
    } else {
        editSaveButton.setAttribute('disabled', true);
        editSaveButton.classList += ' _disabled';
    }
}

function removeElement(event) {
    if (event.target.classList.contains('element__bin')) {
        event.currentTarget.remove();
    }
}

Array.from(heartButtons).forEach(function (element) {
    element.addEventListener('click', likeElement);
});

function likeElement(event) {
    if (event.target.classList.contains('element__heart')) {
        event.currentTarget.classList.toggle('_active');
    }
}

imageCloseButton.addEventListener('click', openImageForm)

function openImageForm() {
    const titleName = page.querySelector('.element__title').textContent;
    overlay.classList.toggle('_opened');
    fullImage.classList.toggle('_opened');
    const imageFull = page.querySelector('.imageFull');
    const title = page.querySelector('.titleFull');

    title.textContent = titleName;
    imageFull.src = image;
    imageFull.alt = "всарвленная пользователем";
}

function createElements() {
    let nameCreate = "";
    let srcCreate = "";
    for (let i = 1; i < 7; i++) {
        const elementTamplate = page.querySelector('.element-template').content;
        const elementEl = elementTamplate.querySelector('.element').cloneNode(true);
        if (i % 3 === 1) {
            nameCreate = "Карачаевск";
            srcCreate = "./image/kirill-pershin-1088404-unsplash.png";
        }
        if (i % 3 === 2) {
            nameCreate = "Гора Эльбрус";
            srcCreate = "./image/kirill-pershin-1404681-unsplash.png";
        }
        if (i % 3 === 0) {
            nameCreate = "Домбай";
            srcCreate = "./image/kirill-pershin-1556355-unsplash.png";
        }
        elementEl.querySelector('.element__title').textContent = nameCreate;
        elementEl.querySelector('.element__image').src = srcCreate;
        elementEl.querySelector('.element__image').alt = "вставленная пользователем"
        elementEl.querySelector('.element__heart').addEventListener('click', function (element) {
            element.target.classList.toggle('_active')
        });
        elementEl.querySelector('.element__bin').addEventListener('click', function (element) {
            element.target.parentNode.remove();
        });
        elementEl.querySelector('.element__image').addEventListener('click', function (element) {
            element.target.addEventListener('click', openImageForm);
        })
        elements.prepend(elementEl);
    }
}