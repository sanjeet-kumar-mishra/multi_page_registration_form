const items = JSON.parse(localStorage.getItem('formData'));

// const item = JSON.stringify(items);

document.getElementById("name").innerHTML = items.firstname + " " + items.lastname;
document.getElementById("birthdate").innerHTML = items.birthdate;
document.getElementById("email").innerHTML = items.email;
document.getElementById("father").innerHTML = items.ffname + " " + items.flname;
document.getElementById("mother").innerHTML = items.mfname + " " + items.mlname;
document.getElementById("gender").innerHTML = items.gender;
document.getElementById("home").innerHTML = items.homeaddress;
document.getElementById("city").innerHTML = items.city;
document.getElementById("country").innerHTML = items.country;
document.getElementById("phone").innerHTML = items.telephone;
document.getElementById("mobile").innerHTML = items.mobile;

const items2 = JSON.parse(localStorage.getItem('formData2'));

document.getElementById("hscinst").innerHTML = items2.hscinst;
document.getElementById("hscboard").innerHTML = items2.hscboard;
document.getElementById("hscpercent").innerHTML = items2.hscpercent + " " + "%";
document.getElementById("sscinst").innerHTML = items2.sscinst;
document.getElementById("sscboard").innerHTML = items2.sscboard;
document.getElementById("sscpercent").innerHTML = items2.sscpercent + " " + "%";
document.getElementById("currentedu").innerHTML = items2.currentedu;
document.getElementById("currentinst").innerHTML = items2.currentinst;
document.getElementById("currentpercent").innerHTML = items2.currentpercent + " " + "%";
document.getElementById("backlog").innerHTML = items2.backlog;
if (!items2.backlog) {
    document.getElementById("backlog").innerHTML = "No";
} else {
    document.getElementById("backlog").innerHTML = items2.backlog;
}

