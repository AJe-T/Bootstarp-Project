import * as contactservices from "../services/contactservices.js";
// when the page is loaded get group data from server and disply as dropdown
window.addEventListener("DOMContentLoaded", () => {
  contactservices
    .getAllgroups()
    .then((groupResponse) => {
      const groups = groupResponse.data;
      displayDropdown(groups);
    })
    .catch((error) => {
      console.error(error);
    });
});
// display dropdown menu
const displayDropdown = (groups) => {
  const selectElement = document.querySelector("#group-input");
  let optionalElement = `<option value="">Select a Group</option>`;
  for (let group of groups) {
    optionalElement += `<option value="${group.id}">${group.name}</option>`;
  }
  selectElement.innerHTML = optionalElement;
};

//form subbmited
const addContactForm = document.querySelector("#add-contact-form");
addContactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const contact = {
    name: document.querySelector("#name-input").value,
    imageUrl: document.querySelector("#imageUrl-input").value,
    mobile: document.querySelector("#mobile-input").value,
    email: document.querySelector("#email-input").value,
    company: document.querySelector("#company-input").value,
    title: document.querySelector("#title-input").value,
    groupId: document.querySelector("#group-input").value,
  };
  
// request  function
contactservices.crateContacts(contact).then(
    (response)=>{
        if (response.data) {
            window.location.href = "../Index.html";
          }
    }
).catch((error)=>{
    console.error(error);
})

});
/// img-function
const imageUrlElement = document.querySelector("#imageUrl-input");
imageUrlElement.addEventListener('input',()=>{
    const imageUrl = imageUrlElement.value;
    const displayImageElement = document.querySelector("#image-disply");
    displayImageElement.setAttribute('src',imageUrl);

})
// request function
