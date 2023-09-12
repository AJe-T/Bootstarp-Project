const serverUrl = "http://localhost:9000";
/**
	@usage : to get all contacts
    @method : GET 
    @parms : no-params
    @url : http://localhost:9000/contacts	
*/
export const getAllContacts = () => {
  let dataurl = `${serverUrl}/contacts`;
  return axios.get(dataurl);
};
/**
	@usage : get a contact
    @method : GET 
    @parms : no-params
    @url : http://localhost:9000/contacts/:contactId	
*/
export const getContact = (contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.get(dataurl);
};
/**
	@usage : create a contact
    @method : POST 
    @parms : name, imageUrl, email, mobile, company, title, groupId
    @url : http://localhost:9000/contacts/	
*/
export const crateContacts = (contact) => {
  let dataurl = `${serverUrl}/contacts/`;
  return axios.post(dataurl,contact);
};
/**
	@usage : Update a contact
    @method : PUT 
    @parms : name, imageUrl, email, mobile, company, title, groupId
    @url : http://localhost:9000/contacts/:contactId	
*/
export const updateContacts = (contact, contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.put(dataurl);
};
/**
	@usage : Delete a contact
    @method : DELETE 
    @parms : no-params
    @url : http://localhost:9000/contacts/:contactId	
*/
export const deleteContacts = (contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.delete(dataurl);
};
/**
	@usage : Get all groups
    @method : GET 
    @parms : no-params
    @url : http://localhost:9000/groups/
*/
export const getAllgroups = () => {
  let dataurl = `${serverUrl}/groups/`;
  return axios.get(dataurl);
};
/**
	@usage : Get a group
    @method : GET 
    @parms : no-params
    @url : http://localhost:9000/groups/:groupId
*/
export const getgroup = (contact) => {
  const { groupId } = contact;
  let dataurl = `${serverUrl}/groups/${groupId}`;
  return axios.get(dataurl);
};
