document.getElementById('mexico').addEventListener('click', function () { choose('mexico') });
document.getElementById('world').addEventListener('click', function () { choose('world') });

let chosenTabs = [];

function choose(place) {
  hide(document.getElementById('place-selection'));
  chooseTabs(place);
  showTab(0);
}

function showTab(tabIndex) {
  console.log(chosenTabs);
  for (let i = 0; i < tabIndex.length; i++) {
    hide(chosenTabs[i]);
  }
  show(chosenTabs[tabIndex]);
}

function chooseTabs(place) {
  chosenTabs = document.getElementsByClassName(place.concat('-tabs'));
  console.log(chosenTabs);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}