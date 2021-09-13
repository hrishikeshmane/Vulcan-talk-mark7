const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/vulcan.json";

const getTranslationURL = (input) => serverURL + "?" + "text=" + input;
   
const clickEnventHandler = () => {
    let inputTxt = txtInput.value;

    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            let translatedTxt = json.contents.translated + " 🖖";
            outputDiv.innerText = translatedTxt;
        })
        .catch(error => {
            console.log("error occured", error);
            alert("error on fetch. See console for more details")
        })
}   
    
btnTranslate.addEventListener("click", clickEnventHandler) 
    