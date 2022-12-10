import '../styles/index.css';
const kirill1 = new URL('../image/kirill-pershin-1088404-unsplash.png', import.meta.url);
const kirill2 = new URL('../image/kirill-pershin-1404681-unsplash.png', import.meta.url);
const kirill3 = new URL('../image/kirill-pershin-1556355-unsplash.png', import.meta.url);

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
const elements = page.querySelector('.elements');
const image = page.querySelectorAll('.buttonImage')
const fullImage = page.querySelector('.fullImage');
const FormAdd = document.forms.FormAdd;
const nameAdd = page.querySelector(".AddName");
const descriptionAdd = page.querySelector(".AddDescription");
const FormEdit = document.forms.FormEdit;
const nameEdit = page.querySelector(".editName");
const descriptionEdit = page.querySelector(".editDescription");

createElements();

profileEditButton.addEventListener('click', function () {
    OpenedPopup(editForm);
})

editCloseButton.addEventListener('click', function () {
    ClosePopup(editForm);
})

addButton.addEventListener('click', function () {
    OpenedPopup(AddForm);
})

AddCloseButton.addEventListener('click', function () {
    ClosePopup(AddForm);
})

FormEdit.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile()
});

function ClosePopup(popup) {
    popup.classList.remove("popup__opened")
    overlay.classList.remove("_opened")
}

function OpenedPopup(popup) {
    overlay.classList += " _opened"
    popup.classList += " popup__opened"
}

page.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
        ClosePopup(AddForm);
        FormAdd.reset();
        AddsetSubmitButtonState(false);

        ClosePopup(editForm);
        FormEdit.reset();
        EditsetSubmitButtonState(false);

        closeImageForm();
    }
})

function editProfile() {
    const name = page.querySelector('.editName');
    const description = page.querySelector('.editDescription');
    const title = page.querySelector('.profile__title')
    const subtitle = page.querySelector('.profile__subtitle')
    title.textContent = name.value;
    subtitle.textContent = description.value;

    FormEdit.reset();
    EditsetSubmitButtonState(false);
    ClosePopup(editForm);
}

FormAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const name = page.querySelector('.AddName');
    const description = page.querySelector('.AddDescription');

    addProfile(name.value, description.value);

    FormAdd.reset();
    AddsetSubmitButtonState(false);
})

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
        element.addEventListener('click', function() {
            openImageForm(element);
        });
    })
    elements.prepend(elementEl);
    ClosePopup(AddForm);
}

imageCloseButton.addEventListener('click', closeImageForm)

function closeImageForm() {
    overlay.classList.remove('_opened');
    fullImage.classList.remove('_opened');
}

function openImageForm(element) {
    const titleName = element.querySelector('.element__title').textContent;
    const image = element.querySelector('.element__image').src;
    overlay.classList.toggle('_opened');
    fullImage.classList.toggle('_opened');
    const imageFull = page.querySelector('.imageFull');
    const title = page.querySelector('.titleFull');

    title.textContent = titleName;
    imageFull.src = image;
    imageFull.alt = "всарвленная пользователем";
}

FormAdd.addEventListener('input', function (evt) {
    if (nameAdd.value.length > 0 && descriptionAdd.value.length > 0) {
        if (nameAdd.validity.valid && descriptionAdd.validity.valid) {
            AddsetSubmitButtonState(true)
        } else {
            AddsetSubmitButtonState(false)
        }
    } else {
        AddsetSubmitButtonState(false)
    }
});

FormEdit.addEventListener('input', function (evt) {
    if (nameEdit.value.length > 0 && descriptionEdit.value.length > 0) {
        if (nameEdit.validity.valid && descriptionEdit.validity.valid) {
            EditsetSubmitButtonState(true)
        } else {
            EditsetSubmitButtonState(false)
        }
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

Array.from(heartButtons).forEach(function (element) {
    element.addEventListener('click', likeElement);
});

function likeElement(event) {
    if (event.target.classList.contains('element__heart')) {
        event.currentTarget.classList.toggle('_active');
    }
}

function createElements() {
    let nameCreate = "";
    let srcCreate = "";
    for (let i = 1; i < 7; i++) {
        const elementTamplate = page.querySelector('.element-template').content;
        const elementEl = elementTamplate.querySelector('.element').cloneNode(true);
        if (i % 3 === 1) {
            nameCreate = "Карачаевск";
            srcCreate = kirill1;
        }
        if (i % 3 === 2) {
            nameCreate = "Гора Эльбрус";
            srcCreate = kirill2;
        }
        if (i % 3 === 0) {
            nameCreate = "Домбай";
            srcCreate = kirill3;
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
            openImageForm(element.path[1]);
        })
        elements.prepend(elementEl);
    }
}