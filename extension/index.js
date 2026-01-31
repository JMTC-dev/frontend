const inputBtnEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

function saveLead(lead) {
  myLeads.push(lead);
  inputEl.value = "";
}

function displayLeads(leads) {
  if (leads.length !== 0) {
    for (let i = 0; i < leads.length; i++) {
      console.log(leads[i]);
    }
  }
}

inputBtnEl.addEventListener("click", () => {
  saveLead(inputEl.value);
  displayLeads(myLeads);
});
