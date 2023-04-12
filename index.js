const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");

const birthdate = document.getElementById("birthdate");

const email = document.getElementById("email");

const ffname = document.getElementById("ffname");
const flname = document.getElementById("flname");

const mfname = document.getElementById("mfname");
const mlname = document.getElementById("mlname");

const nationality = document.getElementById("nationality");
const city = document.getElementById("city");

const telephone = document.getElementById("telephone");
const mobile = document.getElementById("mobile");



const validation = () => {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const birthdateValue = birthdate.value.trim();
    const emailValue = email.value.trim();
    const ffnameValue = ffname.value;
    const flnameValue = flname.value;
    const mfnameValue = mfname.value;
    const mlnameValue = mlname.value;
    const nationalityValue = nationality.value;
    const cityValue = city.value;
    const telephoneValue = telephone.value.trim();
    const mobileValue = mobile.value.trim();

    let isValid = true;

    //For Name
    if (firstnameValue.length < 3) {
        nameError.textContent = "First name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(firstnameValue)) {
        nameError.textContent = "First name should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(firstnameValue)) {
        nameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else if (/\s{2,}/.test(lastnameValue)) {
        nameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else if (lastnameValue.length < 3) {
        nameError.textContent = "Last name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(lastnameValue)) {
        nameError.textContent = "Last name should contain only alphabetic characters";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!birthdateValue) {
        birthdateError.textContent = "Please enter birthdate";
        isValid = false;
    } else {
        birthdateError.textContent = "";
    }

    //For Father's Name
    if (ffnameValue.length < 3) {
        fnameError.textContent = "First name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(ffnameValue)) {
        fnameError.textContent = "First name should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(ffnameValue)) {
        fnameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else if (flnameValue.length < 3) {
        fnameError.textContent = "Last name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(flnameValue)) {
        fnameError.textContent = "Last name should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(flnameValue)) {
        fnameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        fnameError.textContent = "";
    }

    //For Mother's Name
    if (mfnameValue.length < 3) {
        mnameError.textContent = "First name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(mfnameValue)) {
        mnameError.textContent = "First name should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(mfnameValue)) {
        mnameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else if (mlnameValue.length < 3) {
        mnameError.textContent = "Last name should not be less than 3 characters";
        isValid = false;
    } else if (/[^a-zA-Z\s]|!/.test(mlnameValue)) {
        mnameError.textContent = "Last name should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(mlnameValue)) {
        mnameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        mnameError.textContent = "";
    }

    //For Nationality
    if (!/^[a-zA-Z\s]*$/.test(nationalityValue)) {
        nationalnameError.textContent = "Nationality should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(nationalityValue)) {
        nationalnameError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        nationalnameError.textContent = "";
    }

    //For City
    if (!/^[a-zA-Z\s]*$/.test(cityValue)) {
        cityError.textContent = "City should contain only alphabetic characters";
        isValid = false;
    } else if (/\s{2,}/.test(cityValue)) {
        cityError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        cityError.textContent = "";
    }

    //For Telephone Number
    if (!/^\d{0}$/.test(telephoneValue)) {
        if (!/^\d{10}$/.test(telephoneValue)) {
            telephoneError.textContent = "Phone number should contain 10 digits";
            isValid = false;
        }
    } else {
        telephoneError.textContent = "";
    }

    //For Mobile Number
    if (!/^\d{10}$/.test(mobileValue)) {
        mobileError.textContent = "Phone number should contain 10 digits";
        isValid = false;
    } else {
        mobileError.textContent = "";
    }


    return isValid;
}



const submitButton = document.getElementById("button");
submitButton.addEventListener("click", (event) => {
    if (!validation()) {
        event.preventDefault(); // prevent form submission if there are errors
    }
    if (validation()) {
        const form = document.querySelector('form');
        const formData = new FormData(form);
    
        // Convert form data to JSON
        const formJSON = JSON.stringify(Object.fromEntries(formData.entries()));
    
        // Store form data in local storage
        localStorage.setItem('formData', formJSON);
    }
    

});

