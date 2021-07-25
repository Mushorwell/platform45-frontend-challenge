// (~/~) Show and hide the extra content

const accessElementObject = (id) => document.getElementById(id);

const toggleBtn = accessElementObject('arrow');

toggleBtn.addEventListener('click', () => {
    checkDeviceScreenSize();
});

// First check screen size then use method depending on that
const checkDeviceScreenSize = (event) => {
    const deviceScreen = window.screen;
    deviceScreen.availWidth > 1000 ? handleDesktopAnimation() : handleMobileAnimation();
}

// Method for handling the mobile UI
const handleMobileAnimation = () => {
    const toggleSection = accessElementObject('extra-content-mobile');
    const extraInfo = accessElementObject('extraInfo-mobile');
    const toggleFormContent = accessElementObject('form-content');
    extraInfo.classList.contains('hide-content') ?
        showExtraMobileContent( toggleSection, extraInfo, toggleFormContent) :
        hideExtraMobileContent(toggleSection, extraInfo, toggleFormContent);
}

// Method for handling the desktop UI
const handleDesktopAnimation = () => {
    const toggleSection = accessElementObject('extra-content');
    const info = accessElementObject('extraInfo');
    toggleSection.style.width === '0px' ?
        showExtraDesktopContent(toggleSection, info) :
        hideExtraDesktopContent(toggleSection, info);
}

// Methods to animate content on desktop
const showExtraDesktopContent = (hiddenSection, hiddenSectionContent) => {
    hiddenSection.style.width = '60%';
    hiddenSectionContent.classList.remove('hide-content');
    hiddenSectionContent.classList.add('slide-out');
    toggleBtn.classList.add('hide-section');
}

const hideExtraDesktopContent = (hiddenSection, hiddenSectionContent) => {
    hiddenSection.style.width = '0px';
    hiddenSectionContent.classList.remove('slide-out');
    hiddenSectionContent.classList.add('hide-content');
    toggleBtn.classList.remove('hide-section');
}

// Methods to animate the content on mobile
const showExtraMobileContent = ( hiddenSection, hiddenSectionContent, sectionToggle) => {
    hiddenSectionContent.classList.remove('hide-content');
    hiddenSection.style.height = '100%';
    sectionToggle.classList.add('hide-content');
    toggleBtn.classList.add('hide-section');
    scrollToSection(hiddenSectionContent);
}

const hideExtraMobileContent = (hiddenSection, hiddenSectionContent, sectionToggle) => {
    hiddenSectionContent.classList.add('hide-content');
    hiddenSection.style.height = '0px';
    sectionToggle.classList.remove('hide-content');
    toggleBtn.classList.remove('hide-section');
    scrollToSection(sectionToggle);
}

// Function for smooth scrolling
const scrollToSection = (section) => {

    setTimeout(() => {
        const href = `#${section.id}`;
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }, 500);

};


/* (X) Clear all form inputs */

// Select the cancel button from the form
const clearBtn = document.getElementById('cancel-btn');

// arrays for the form input types holding their ids
const formInputFieldElements = ['name', 'date-of-birth', 'email-address', 'mobile-number', 'customer-id'];
const formRadioBtns = ['female', 'male', 'classic', 'silver', 'gold'];

// Event listener for the cancel button
clearBtn.addEventListener('click', () => {
    clearFields(formInputFieldElements, formRadioBtns);
});

// clearing radio buttons {male, female, classic, silver, gold}
const clearRadioBtn = elementId => {
    document.getElementById(elementId).checked = false;
};

// clearing input fields {text, email, phone, dateOfBirth, customerId}
const clearInputField = elementId => {
    document.getElementById(elementId).value = '';
};

// method for clearing the field inputs
const clearFields = (fieldsArray, radioBtnsArray) => {
    fieldsArray.forEach(field => clearInputField(field));
    radioBtnsArray.forEach(radioBtn => clearRadioBtn(radioBtn));
};

