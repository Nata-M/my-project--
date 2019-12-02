import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App';
import Myelement from './AddUser'
import AddUsers from './AddUsers'
import '../css/content.css';
import AddInput from './AddUsers'
import UsersList from './UsersList';


let notes = [
    'ლევან აბაშიძე - 35001164738 - ბესარიონი - 1997-08-14',
    'მარიამ მჭედლიშვილი - 15001664999 - თემური - 1993-07-07',
    'ზურაბ დვალი - 15004638292 - გიორგი - 1994-02-11 ',
    'სანდრო საბახტარაშვილი - 35004653392 - მამუკა - 1984-05-05',
    'დავით თოდაძე - 15004657679 - ალექსანდრე - 1988-06-19',
    'დიანა ონიანი - 35004563721 - ვიქტორი - 1992-04-20'
]

function CreateUser() {
    let mybutton = document.getElementById('add-btn');
    // let removeInput = function removeinput() {
    //         let mydivbtn = document.getElementById('add-display');
    //         let mynewbtn = document.getElementById('mybtn');
    //         let mynewsearch = document.getElementById('mysearch');
    //         mydivbtn.style.display= 'none';
    //         mynewbtn.style.display= 'block';
    //         mynewsearch.style.display= 'block';
    //     }
    const storage = window.localStorage;
    const notesStr = storage.getItem('notes');
    if (!notesStr) {
    storage.setItem('notes', JSON.stringify(notes));}
    else {notes = JSON.parse(notesStr);}
    for (let note of notes) {
        addNewNote(note);
    }

    // CreateUser();
    let addButton = function() {
        let storage = window.localStorage;
        // for ( let i=0; i < 5; i++) {
            // let newlist = document.getElementById('ul-users');
            let input = document.getElementById('input1').value;
            let input2 = document.getElementById('input2').value;
            let input3 = document.getElementById('input3').value;
            let input4 = document.getElementById('input4').value;
            let input5 = document.getElementById('input5').value;
            let name = input.concat(' ', input2);
            let inputs = [name, input3, input4, input5];
            inputs = inputs.join(' - ');
            notes.push(inputs);
            storage.setItem('notes', JSON.stringify(notes));
            addNewNote(inputs);
            document.getElementsByClassName('input-style').value = "";
            // // let inputs = document.getElementsByClassName('input-style')[i].value;
            // let itemArray = document.createElement('li');
            // itemArray.innerHTML = inputs.join(' - ');
            // newlist.appendChild(itemArray);
            // // let userslist = document.getElementById('users-list')
            // // userslist.style.display= 'flex';
    }
    
    function addNewNote(note) {
        let listt = document.createElement("li");
        let liv = document.createTextNode(note);
        listt.appendChild(liv);
                let del = document.createElement("span");
                del.appendChild(document.createTextNode("\u00D7"));
                del.className = "close";
                listt.appendChild(del);
        document.getElementById("ul-users").appendChild(listt);
        let closeBtns = document.getElementsByClassName("close");
    for (let i = 0; i < closeBtns.length; ++i) {
        closeBtns[i].onclick = function () {
            let div = closeBtns[i].parentElement;
            div.style.display = "none";
            notes.splice(i, 1);
            storage.setItem('notes', JSON.stringify(notes));
        }}
        };

    
    // let inpValue = myinput.valueOf();
    
    mybutton.addEventListener('click', function() {
        let myinput = document.getElementById('input1');
        let inpLastname = document.getElementById('input2');
        let idNumber = document.getElementById('input3');
        let fatherName = document.getElementById('input4');
        let birthDate = document.getElementById('input5');
        if (myinput.value.length == 0) {
            myinput.style.borderColor = 'red'}
        else if (inpLastname.value.length == 0) {
            inpLastname.style.borderColor = 'red'
        }
        else if (idNumber.value.length == 0) {
            idNumber.style.borderColor = 'red'
        }
        else {
            myinput.style.borderColor = "";
            inpLastname.style.borderColor = "";
            idNumber.style.borderColor = "";
            addButton();
            myinput.value = "";
            inpLastname.value = '';
            idNumber.value = '';
            fatherName.value = '';
            birthDate.value = '';
        }
        })
    // if (input === "") {
    //     return mybutton.addEventListener('click', function() {
    //         alert(empty));}} else {
    //     mybutton.addEventListener('click', function() {
    //     addButton();)
};
export default CreateUser