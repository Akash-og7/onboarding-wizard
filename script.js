
const step1Form = document.getElementById("step1");
const step2Form = document.getElementById("step2");
const step3Form = document.getElementById("step3");
const step4Form = document.getElementById("step4");

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');

const companyInput = document.querySelector('input[name="company"]');
const industrySelect = document.querySelector('select[name="industry"]');
const employeesSelect = document.querySelector('select[name="employees"]');



const nextBtnStep1 = document.getElementById("nxtBtnstep1");
const backBtnStep2 = document.getElementById("back-btn-step2");
const nextBtnStep2 = document.getElementById("nxt-btn-step2");
const backBtnStep3 = document.getElementById("back-btn-step3");
const submitBtnStep3 = document.getElementById("submit-btn-step3");


const steps = document.querySelectorAll(".progress-step");
function updateProgressBar (stepIndex) {
    steps.forEach((step, index) => {
            
            step.classList.toggle("active", index <= stepIndex);
       
    });
}

const themeSwitch = document.getElementById('switch');
let darkmode = false;

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
}

themeSwitch.addEventListener("click", function () {
    event.preventDefault();

    if (!darkmode){
        enableDarkmode();
        darkmode = true;
    }
    else {
        disableDarkmode();
        darkmode = false;
    }
})


nameInput.addEventListener("keydown",function (i) {
    if (i.key === "Enter") {    
        i.preventDefault();
        emailInput.focus();
    }
});

emailInput.addEventListener("keydown",function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        gotoStep2();
    }
});

nextBtnStep1.addEventListener("click",function() {
    gotoStep2();
});

function gotoStep2() {
    if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
        step1Form.style.display = "none";
        step2Form.style.display = "flex";
        step2Form.style.flexDirection = "column";
        step2Form.style.alignItems = "center";
        updateProgressBar(1);

        document.querySelector('input[name="company"]').focus();
    }
    else{
        alert(
            "Please enter name and email"
        );
    }
}

backBtnStep2.addEventListener("click", function () {
    step2Form.style.display = "none";
    step1Form.style.display = "flex";
    step1Form.style.flexDirection = "column";
    step1Form.style.center = "center";
    updateProgressBar(2)
})

nextBtnStep2.addEventListener("click", function () {
    step2Form.style.display = "none";
    step1Form.style.display = "none";
    step3Form.style.display = "flex";
    step3Form.style.flexDirection = "column";
    step3Form.style.center = "center";
    updateProgressBar(3)
})

backBtnStep3.addEventListener("click", function () {
    step2Form.style.display = "flex";
    step1Form.style.display = "none";
    step3Form.style.display = "none";
    step2Form.style.flexDirection = "column";
    step2Form.style.center = "center";
    updateProgressBar(1)
})

submitBtnStep3.addEventListener("click", function () {



    step2Form.style.display = "none";
    step1Form.style.display = "none";
    step3Form.style.display = "none";
    step4Form.style.display = "flex";
  
    const progressBar = document.querySelector(".progressbar");
    if (progressBar) {
        progressBar.style.display = "none";
    }


});




