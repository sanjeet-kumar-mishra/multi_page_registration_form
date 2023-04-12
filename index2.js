const hscinst = document.getElementById("hscinst");
const hscboard = document.getElementById("hscboard");
const hscpercent = document.getElementById("hscpercent");
const sscinst = document.getElementById("sscinst");
const sscboard = document.getElementById("sscboard");
const sscpercent = document.getElementById("sscpercent");
const currentedu = document.getElementById("currentedu");
const currentinst = document.getElementById("currentinst");
const overallpercent = document.getElementById("currentpercent");
const backlog = document.getElementById("backlog");

const validation = () => {
    const hscinstValue = hscinst.value;
    const hscboardValue = hscboard.value.trim();
    const hscpercentValue = hscpercent.value.trim();
    const sscinstValue = sscinst.value;
    const sscboardValue = sscboard.value.trim();
    const sscpercentValue = sscpercent.value.trim();
    const currenteduValue = currentedu.value;
    const currentinstValue = currentinst.value;
    const overallpercentValue = overallpercent.value.trim();
    const backlogValue = backlog.value.trim();

    let isValid = true;

    if (/\s{2,}/.test(hscinstValue)) {
        hscinstError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        hscinstError.textContent = "";
    }

    if (isNaN(hscpercentValue) || hscpercentValue < 0 || hscpercentValue > 100) {
        hscError.textContent = "Min 0 & Max 100 allowed";
        isValid = false;
    } else {
        hscError.textContent = "";
    }

    if (/\s{2,}/.test(sscinstValue)) {
        sscinstError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        sscinstError.textContent = "";
    }

    if (isNaN(sscpercentValue) || sscpercentValue < 0 || sscpercentValue > 100) {
        sscError.textContent = "Min 0 & Max 100 allowed";
        isValid = false;
    } else {
        sscError.textContent = "";
    }

    if (/\s{2,}/.test(currenteduValue)) {
        currentError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        currentError.textContent = "";
    }

    if (/\s{2,}/.test(currentinstValue)) {
        currentinstError.textContent = "Please remove extra spaces";
        isValid = false;
    } else {
        currentinstError.textContent = "";
    }

    if (isNaN(overallpercentValue) || overallpercentValue < 0 || overallpercentValue > 100) {
        overallError.textContent = "Min 0 & Max 100 allowed";
        isValid = false;
    } else {
        overallError.textContent = "";
    }

    return isValid;

}

const submitButton = document.getElementById("button");
submitButton.addEventListener("click", (event) => {
    if (!validation()) {
        event.preventDefault();
    }

    if (validation()) {
        const form = document.querySelector('form');
        const formData2 = new FormData(form);
    
        // Convert form data to JSON
        const formJSON2 = JSON.stringify(Object.fromEntries(formData2.entries()));
    
        // Store form data in local storage
        localStorage.setItem('formData2', formJSON2);
    }

});
