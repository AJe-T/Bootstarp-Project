import * as contactservices from "../services/contactservices.js";

// when the pageloaded get contact id from url and send to the server
window.addEventListener("DOMContentLoaded", () => {
  const contactId = document.baseURI.split("?")[1].split("=")[1];
  if (contactId && contactId.length > 0) {
    contactservices
      .getContact(contactId)
      .then((contactResponse) => {
        const contact = contactResponse.data;
        contactservices
          .getgroup(contact)
          .then((groupResponse) => {
            const group = groupResponse.data;
            displayContactInfo(contact, group);
          })
          .catch(() => {
            console.error(error);
          });
      })
      .catch(() => {
        console.error(error);
      });
  }
});
//display contact informaion on UI
const displayContactInfo = (contact, group) => {
  const contactRowElement = document.querySelector("#view-id");
  if (
    contact &&
    group &&
    Object.keys(contact).length > 0 &&
    Object.keys(group).length > 0
  ) {
    const contactInfoElement = `<div class="col-sm-3">
                                        <img
                                    src="${contact.imageUrl}"
                                        class="image-fluid rounded-circle shadow"
                                        alt="2nd img" style="height: 250px; width: 250px"
                                        />
                                    </div>
                                    <div class="col-sm-8 ml-4">
                                        <ul class="list-group">
                                        <li class="list-group-item">
                                            Name : <span class="fw-bold">${contact.name}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Email : <span class="fw-bold">${contact.email}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Phone-No : <span class="fw-bold">${contact.mobile}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Job title : <span class="fw-bold">${contact.title}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Company : <span class="fw-bold">${contact.company}</span>
                                        </li>
                                        <li class="list-group-item">
                                        Group : <span class="fw-bold">${group.name}</span>
                                        </li>
                                        </ul>
                                    </div>`;
    contactRowElement.innerHTML = contactInfoElement;
  }
};
