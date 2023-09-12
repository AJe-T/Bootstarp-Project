import * as contactservices from "../services/contactservices.js";
/// when the pageloaded get contact id from url and send to the server
window.addEventListener("DOMContentLoaded", () => {
  const contactId = document.baseURI.split("?")[1].split("=")[1];

  contactservices
    .deleteContacts(contactId)
    .then((response) => {
      if (response.data) {
        window.location.href = "../Index.html";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
