import { w3cHtmlValidator } from 'w3c-html-validator';

const options = { filename: 'docs/index.html' };
w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter);

const memberPic = document.querySelector(".member-picture");
const projectName = document.querySelector(".h3-team");

const formName = document.querySelector(".form-name");

memberPic.addEventListener("click", function (event) {
    const profile = memberPic.parentNode.projectName.innerText;
    console.log(profile);
});