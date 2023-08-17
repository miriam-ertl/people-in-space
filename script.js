const peopleInSpace = document.querySelector(`[data-js="block-element"]`);

async function fetchPeople() {
  console.log("hello");
  const response = await fetch("http://api.open-notify.org/astros.json");
  console.log(response);
  const peopleData = number();
  console.log(peopleData);
}
