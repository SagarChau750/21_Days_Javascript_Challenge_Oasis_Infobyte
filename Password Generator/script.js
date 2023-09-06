let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", ()=>{
    sliderValue.textContent = slider.value;
})

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower ='abcdefghijklmnopqrstuvwxyz';
const symbol = '!@#$%^&*()_{}[];:<>/?';
const number = '0123456789';

const generatePassword = () => {
    const length = document.getElementById('slider').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    let character = "";

    if(includeUppercase) character += upper;
    if(includeLowercase) character += lower;
    if(includeNumbers) character += number;
    if(includeSymbols) character += symbol;

    let password = "";
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * character.length);
        password += character.charAt(randomIndex);
    }

    return password;

}
document.querySelector(".button").addEventListener('click', ()=>{
    const password = generatePassword();
    document.querySelector(".password-output").textContent = password;
})

const clipboard = new ClipboardJS('.copy', {
    text:function(trigger){
        return document.querySelector('.password-output').textContent;
    }
})

clipboard.on('success', function(e){
    alert('Password copied to clipboard');
    e.clearSelection();
})