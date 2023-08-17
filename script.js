const peopleInSpace = document.querySelector(`[data-js="block-element"]`);

async function fetchPeople() {
  console.log("hello");
  const response = await fetch("http://api.open-notify.org/astros.json");
  const peopleData = await response.json();
  console.log("peopleData:", peopleData);
  return peopleData;
}
fetchPeople();

async function init() {
  const peopleData = await fetchPeople();
  peopleInSpace.innerText = peopleData.number;
}
init();
