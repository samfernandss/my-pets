'use strict';

class Pet {
	constructor(name, age, owner) {
		this.name = name;
		this.age = age;
		this.owner = owner;
	}
}

//array de pets
const btn = document.querySelector('.btn');
const inputInfo = document.querySelectorAll('input');
const table = document.querySelector('.responsive-table');
const pets = [];
const pet1 = new Pet('Pichi', 0.8, 'Sam');
console.log(pet1);

function getInputInfo() {
	//new pet
	const arrayInfo = Array.from(inputInfo).map(({ value }) => {
		return value;
	});

	pets.push(new Pet(...arrayInfo));

}

function addPetRegister() {
	const pet = pets[pets.length - 1];

	table.insertAdjacentHTML("beforeend",
		`<li class="table-row">
				<div class="col col-2" data-label="Customer Name">${pet.name}</div>
				<div class="col col-3" data-label="Amount">${pet.age}</div>
				<div class="col col-4" data-label="Payment Status">${pet.owner}</div>
			</li>`
	);
}

btn.addEventListener('click', () => {
	getInputInfo();
	addPetRegister();
});
