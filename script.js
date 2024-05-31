'use strict'

class Tracker{
    constructor(){
       this.inputName = document.querySelector('#name');
       this.inputData = document.querySelector('#data');
       this.inputAmount = document.querySelector('#amount');
       this.deleteButton = document.querySelector('.delete');
       this.addButton = document.querySelector('.ButonTrimitere');
       this.addButton.addEventListener("click", this.addExpense.bind(this));
       
       
    }

    validateInputs() {
        if (this.inputName.value.trim() === "" || this.inputData.value.trim() === "" || this.inputAmount.value.trim() === "") {
            return false;
        }
        return true;
    }
    
    storage(){

        localStorage.setItem('data', data);
        localStorage.getItem('data');
        localStorage.setItem('amount',this.amountText.value);
    }
    addExpense(){

        if (!this.validateInputs()) {
            alert("All fields must be filled out.");
            return;
        }

        this.tabel = document.querySelector('.tab');
        const tr = document.createElement('tr');
        this.tabel.appendChild(tr);
        let data = [this.inputName.value, this.inputData.value];

        //localStorage.setItem('nume',this.inputName.value );
        //localStorage.getItem('nume');

        //localStorage.setItem('data',this.inputData.value);
        //localStorage.getItem('data');



        data.forEach((item) => {
            let td = document.createElement('td');
            td.innerHTML = item;
            tr.appendChild(td);
            tr.classList.toggle('button');
            tr.classList.toggle('color');
        });

       
        let td = document.createElement('td');


        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', this.delete1.bind(this));
        td.appendChild(deleteButton);

        let amountText = document.createTextNode(` ${this.inputAmount.value}`);
        td.appendChild(amountText);

        tr.appendChild(td);
       this.tabel.appendChild(tr);

       

        this.Clear();
    }
    
    Clear(){
        this.inputName.value = "";
        this.inputData.value = "";
        this.inputAmount.value = "";

    }
    delete1(event){
        const button = event.target;
        const tr = button.closest('tr');
        tr.remove();
        localStorage.removeItem('name');
        localStorage.removeItem('name');
    }

}


const obj = new Tracker();



