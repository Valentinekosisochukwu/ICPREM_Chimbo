const home = document.querySelector("#home");
const bgImage = document.querySelector('#bgImage')
const payDues = document.querySelector("#paydues");
const profile = document.querySelector("#profile");
const homeli = document.querySelector("#home-li");
const payDuesli = document.querySelector("#paydues-li");
const profileli = document.querySelector("#profile-li");
const connect = document.querySelector("#connect");
const connected = document.querySelector("#connected");
const makePayment = document.querySelector("#makepayment");
const selectDues = document.querySelector("#select-dues");
const selectDuesSpan = document.querySelector("#select-dues-span");
const selectDuesDrop = document.querySelector("#select-dues-drop");
const selectDuesDrop1 = document.querySelector("#select-dues-drop-1");
const selectDuesDrop2 = document.querySelector("#select-dues-drop-2");
const selectDuesDrop3 = document.querySelector("#select-dues-drop-3");
const selectDuesDrop4 = document.querySelector("#select-dues-drop-4");
const selectLevel = document.querySelector("#select-level");
const selectLevelSpan = document.querySelector("#select-level-span");
const selectLevelDrop = document.querySelector("#select-level-drop");
const selectLevelDrop1 = document.querySelector("#select-level-drop-1");
const selectLevelDrop2 = document.querySelector("#select-level-drop-2");
const selectLevelDrop3 = document.querySelector("#select-level-drop-3");
const selectLevelDrop4 = document.querySelector("#select-level-drop-4");
const selectLevelDrop5 = document.querySelector("#select-level-drop-5");
const selectLevelDrop6 = document.querySelector("#select-level-drop-6");
const amountSpan = document.querySelector("#Amount-span");
const totalSpan = document.querySelector("#Total-span");
const collect1 = document.querySelector("#collect1");
const collect2 = document.querySelector("#collect2");
const collect3 = document.querySelector("#collect3");
const makePayment2 = document.querySelector("#makepayment2");

homeli.addEventListener("click", () => {
  homeli.classList.add("font-bold");
  connect.classList.remove("hidden");
  connected.classList.add("hidden");
  payDuesli.classList.remove("font-bold");
  profileli.classList.remove("font-bold");
  home.classList.remove("hidden");
  payDues.classList.add("hidden");
  profile.classList.add("hidden");
});
payDuesli.addEventListener("click", () => {
  payDuesli.classList.add("font-bold");
  homeli.classList.remove("font-bold");
  profileli.classList.remove("font-bold");
  connect.classList.add("hidden");
  connected.classList.remove("hidden");
  payDues.classList.remove("hidden");
  home.classList.add("hidden");
  profile.classList.add("hidden");
  // bgImage.classList.add('hidden');
});
profileli.addEventListener("click", () => {
  profileli.classList.add("font-bold");
  homeli.classList.remove("font-bold");
  payDuesli.classList.remove("font-bold");
  profile.classList.remove("hidden");
  home.classList.add("hidden");
  payDues.classList.add("hidden");
});
makePayment.addEventListener("click", () => {
  payDuesli.classList.add("font-bold");
  homeli.classList.remove("font-bold");
  profileli.classList.remove("font-bold");
  connect.classList.add("hidden");
  connected.classList.remove("hidden");
  payDues.classList.remove("hidden");
  home.classList.add("hidden");
  profile.classList.add("hidden");
});

selectDues.addEventListener("click", () => {
  selectDuesDrop.classList.toggle("hidden");
  selectLevelDrop.classList.add("hidden");
});
selectDuesDrop1.addEventListener("click", () => {
  selectDuesDrop.classList.add("hidden");
  selectDuesSpan.innerHTML = "Nuesa";
  amountSpan.innerHTML = "N 2500";
  totalSpan.innerHTML = "N 2510";
  collect1.classList.remove("hidden");
  collect2.classList.add("hidden");
  collect3.classList.add("hidden");
});
selectDuesDrop2.addEventListener("click", () => {
  selectDuesDrop.classList.add("hidden");
  selectDuesSpan.innerHTML = "Digitron";
  amountSpan.innerHTML = "N 5000";
  totalSpan.innerHTML = "N 5010";
  collect1.classList.add("hidden");
  collect2.classList.remove("hidden");
  collect3.classList.add("hidden");
});
selectDuesDrop3.addEventListener("click", () => {
  selectDuesDrop.classList.add("hidden");
  selectDuesSpan.innerHTML = "SUG";
  amountSpan.innerHTML = "N 1000";
  totalSpan.innerHTML = "N 1010";
  collect1.classList.add("hidden");
  collect2.classList.add("hidden");
  collect3.classList.remove("hidden");
});
selectDuesDrop4.addEventListener("click", () => {
  selectDuesDrop.classList.add("hidden");
  selectDuesSpan.innerHTML = "Select Dues";
  amountSpan.innerHTML = "---";
  totalSpan.innerHTML = "---";
  collect1.classList.add("hidden");
  collect2.classList.add("hidden");
  collect3.classList.add("hidden");
});

selectLevel.addEventListener("click", () => {
  selectLevelDrop.classList.toggle("hidden");
  selectDuesDrop.classList.add("hidden");
});
selectLevelDrop1.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "100";
});
selectLevelDrop2.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "200";
});
selectLevelDrop3.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "300";
});
selectLevelDrop4.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "400";
});
selectLevelDrop5.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "500";
});
selectLevelDrop6.addEventListener("click", () => {
  selectLevelDrop.classList.add("hidden");
  selectLevelSpan.innerHTML = "Select Level";
});
makePayment2.addEventListener("click", () => {
  payDuesli.classList.add("font-bold");
  homeli.classList.remove("font-bold");
  profileli.classList.remove("font-bold");
  connect.classList.add("hidden");
  connected.classList.remove("hidden");
  payDues.classList.remove("hidden");
  home.classList.add("hidden");
  profile.classList.add("hidden");
});
