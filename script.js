const label = document.getElementById("myLabel")
const augmenter = document.getElementById("Aug")
const reinitialiser = document.getElementById("Rein")
const diminuer = document.getElementById("Dim")

let count = 0;

augmenter.addEventListener ('click',  () => {
    count++;
    label.innerText = count;
});

diminuer.addEventListener ('click',  () => {
    count--;
    label.innerText = count;
});

reinitialiser.addEventListener ('click',  () => {
    count = 0;
    label.innerText = count;
}) ;
