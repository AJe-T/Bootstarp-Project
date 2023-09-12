import * as contactservices from "../services/contactservices.js";
// when the page loaded get the contacts from the server
window.addEventListener("DOMContentLoaded", () => {
  contactservices
    .getAllContacts()
    .then((response) => {
      const contacts = response.data;
      displaycards(contacts);
    })
    .catch((error) => {
      console.error();
    });
});
//===================
const displaycards = (contacts) => {
  const cardrowelement = document.querySelector("#card-row");
  let cardElement = ``;
  for (let contact of contacts) {
    cardElement += `<div class="col-sm-6 mt-3">
                        <div class="card shadow-lg">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-3">
                              <img
                                class="img-fluid rounded-circle"
                                src="${contact.imageUrl}"
                                alt="img"
                              />
                            </div>
                            <div class="col-sm-8">
                              <ul class="list-group">
                                <li class="list-group-item p-1">
                                  Name : <span class="fw-bold">${contact.name}</span>
                                </li>
                                <li class="list-group-item p-1">
                                  Email : <span class="fw-bold">${contact.email}</span>
                                </li>
                                <li class="list-group-item p-1">
                                  Phone-No : <span class="fw-bold">${contact.mobile}</span>
                                </li>
                              </ul>
                            </div>
                            <div class="col-sm-1 p-0">
                              <a
                                class="btn btn-primary mb-2"
                                href="../Ui-manager/view.html?contactId=${contact.id}"
                                style="padding: 1px"
                              >
                                <i class="bi bi-eye-fill m-1"></i>
                              </a>
                              <a
                                class="btn btn-info mb-2"
                                href="../Ui-manager/update.html"
                                style="padding: 1px"
                              >
                                <i class="bi bi-pencil-square m-1"></i>
                              </a>
                              <a
                                class="btn btn-danger mb-2"
                                href="../Ui-manager/delete.html?contactId=${contact.id}"
                                style="padding: 1px"
                              >
                                <i class="bi bi-trash-fill m-1"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
  }
  cardrowelement.innerHTML = cardElement;
};
