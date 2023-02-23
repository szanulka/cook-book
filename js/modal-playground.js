const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


console.log('js działa');


const closeModal = function () {
  console.log('dupa');
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
openModalBtn.addEventListener("click", openModal);

  

const editEvetns = (id, editEvetns) => {
  setEvents(events.map((event) => event.id === id? editEvetn : event))
}
  
