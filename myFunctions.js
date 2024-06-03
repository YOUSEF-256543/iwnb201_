function buy() {
    const F_Name = document.getElementById('name').value;
    const n_Number = document.getElementById('national_id').value;

    const m_Number = document.getElementById('mobile_number').value;
    const email = document.getElementById('email').value;


    const isF_NameValid = validateF_Name(F_Name);
    const isn_NumberValid = validaten_Number(n_Number);

    const ism_NumberValid = validatem_Number(m_Number);
    const isEmailValid = validateEmail(email);
    //******************* */


    /*const userEnteredCaptcha = document.getElementById('captcha').value;
    const captchaChallenge = document.getElementById('captcha-challenge').textContent;
    const isCaptchaValid = validateCaptcha(userEnteredCaptcha, captchaChallenge); */

    {

        const errorMessage = 'يرجى التحقق من النموذج للأخطاء.';
        alert(errorMessage);
    }







}






//****************** */
function validateF_Name(F_Name) {
    const arabicLR = /^[\u0600-\u06FF\s]+$/;

    if (arabicLR.test(F_Name.trim())) {
        return true;
    } else {
        alert('يرجى إدخال اسم كامل صالح يحتوي على أحرف عربية فقط.');
        return false;
    }
}

function validaten_Number(n_Number) {
    if (n_Number.length === 11 && n_Number.substring(0, 2) >= '01' && n_Number.substring(0, 2) <= '14') {
        return true;
    } else {
        alert('يرجى إدخال رقم وطني صالح.');
        return false;
    }
}

function validatem_Number(m_Number) {
    const syriatelR = /^(098|095|093|099)\d{7}$/;
    const mtnR = /^(094|096)\d{7}$/;

    if (syriatelR.test(m_Number) || mtnR.test(m_Number)) {
        return true;
    } else {
        alert('يرجى إدخال رقم هاتف صالح لسيرياتل أو إم تي إن.');
        return false;
    }
}

function validateEmail(email) {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailR.test(email)) {
        return true;
    } else {
        alert('يرجى إدخال عنوان بريد إلكتروني صالح.');
        return false;
    }
}
//*********** */

let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status = document.getElementById('status');


generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';

}

check = () => {
    let userValue = document.getElementById("entered-captcha").value;
    if (userValue == captcha) {
        status.innerText = "Correct!!"
    } else {
        status.innerText = "Try Again!!"
        document.getElementById("entered-captcha").value  =  '';
    }
}

//*//////////////
function validateCaptcha(userEnteredCaptcha, captchaChallenge) {
    if (userEnteredCaptcha === captchaChallenge) {
        return true;
    } else {
        alert('فشل التحقق من الكابتشا. يرجى المحاولة مرة أخرى.');
        return false;
    }
}



















































function showBuyForm() {

    var divForm = document.getElementById("form");
    if (divForm.style.display === "none") {

        divForm.style.display = "block";

    } else {
        divForm.style.display = "none";
    }
}



/***************************************************** */
function hideshow() {
    var div = document.getElementById("full");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}

function hideshow2() {
    var div2 = document.getElementById("full2");
    if (div2.style.display === "none") {
        div2.style.display = "block";
    } else {
        div2.style.display = "none"
    }
}

function hideshow3() {
    var div3 = document.getElementById("full3");
    if (div3.style.display === "none") {
        div3.style.display = "block";
    } else {
        div3.style.display = "none"
    }
}

function hideshow4() {
    var div4 = document.getElementById("full4");
    if (div4.style.display === "none") {
        div4.style.display = "block";
    } else {
        div4.style.display = "none"
    }
}

function hideshow5() {
    var div5 = document.getElementById("full5");
    if (div5.style.display === "none") {
        div5.style.display = "block";
    } else {
        div5.style.display = "none"
    }
}

function hideshow6() {
    var div6 = document.getElementById("full6");
    if (div6.style.display === "none") {
        div6.style.display = "block";
    } else {
        div6.style.display = "none"
    }
}

function hideshow7() {
    var div7 = document.getElementById("full7");
    if (div7.style.display === "none") {
        div7.style.display = "block";
    } else {
        div7.style.display = "none"
    }
}

function hideshow8() {
    var div8 = document.getElementById("full8");
    if (div8.style.display === "none") {
        div8.style.display = "block";
    } else {
        div8.style.display = "none"
    }
}

function hideshow9() {
    var div9 = document.getElementById("full9");
    if (div9.style.display === "none") {
        div9.style.display = "block";
    } else {
        div9.style.display = "none"
    }
}

function hideshow10() {
    var div10 = document.getElementById("full10");
    if (div10.style.display === "none") {
        div10.style.display = "block";
    } else {
        div10.style.display = "none"
    }
}