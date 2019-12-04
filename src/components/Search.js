import React from 'react'
import CreateUser from './CreateUser'
import AddInput from './AddUsers'

let notes2 = [
    'ლევან აბაშიძე - 35001164738 - ბესარიონი - 1997-08-14',
    'მარიამ მჭედლიშვილი - 15001664999 - თემური - 1993-07-07',
    'ზურაბ დვალი - 15004638292 - გიორგი - 1994-02-11 ',
    'სანდრო საბახტარაშვილი - 35004653392 - მამუკა - 1984-05-05',
    'დავით თოდაძე - 15004657679 - ალექსანდრე - 1988-06-19',
    'დიანა ონიანი - 35004563721 - ვიქტორი - 1992-04-20'
]

function Mysearch() {
    let arr = JSON.parse(localStorage.getItem('notes'))
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        let firstDotPos = str.indexOf("-");
        let yourString = str.substring(firstDotPos + 1, firstDotPos + 13);
        let numb = Number(yourString);
        console.log(yourString);
        let mysearch = document.getElementById('mysearch');
        let mybtn = document.getElementById('search-btn');
        mybtn.addEventListener('click', function(){
    if (mysearch.value == numb) {
            let users= document.getElementById('ul-users');
            let cont = document.getElementById('content').appendChild(users);
            let li = document.createElement('li');
            li.className = 'ul-li';
            let livv = document.createTextNode(str);
            li.appendChild(livv);
            users.appendChild(li);
            mysearch.value = '';
        } else {console.log('no')}
        })}}
    //     // if (ind.textContent || ind.innerText)
    //     // let txtValue = a[i].textContent || a.innerText;
    // }
    // let users= document.getElementById('ul-users');
    // let cont = document.getElementById('content').appendChild(users)
    // let storage = window.localStorage;
    // storage.getItem('notes');
    // let obj = JSON.parse('notes');
    // users.appendChild(obj);
    // console.log(a);



    // const storage = window.localStorage;
    // const notesStr = storage.getItem('notes');
    // if (!notesStr) {
    // storage.setItem('notes', JSON.stringify(notes));}
    // else {notes = JSON.parse(notesStr);}
    // for (let note of notes) {
    //     addNewNote(note);
    // }

    // let addButton = function() {
    //     let storage = window.localStorage;
    //         let input = document.getElementById('input1').value;
    //         let input2 = document.getElementById('input2').value;
    //         let input3 = document.getElementById('input3').value;
    //         let input4 = document.getElementById('input4').value;
    //         let input5 = document.getElementById('input5').value;
    //         let name = input.concat(' ', input2);
    //         let inputs = [name, input3, input4, input5];
    //         inputs = inputs.join(' - ');
    //         notes.push(inputs);
    //         storage.setItem('notes', JSON.stringify(notes));
    //         addNewNote(inputs);
    //         document.getElementsByClassName('input-style').value = "";
    // }
    
    // function addNewNote(note) {
    //     let a = document.createElement('a');
    //     let listt = document.createElement("li");
    //     listt.appendChild(a);
    //     listt.className = 'ul-li';
    //     let liv = document.createTextNode(note);
    //     listt.appendChild(liv);
    //             let del = document.createElement("span");
    //             del.appendChild(document.createTextNode("\u00D7"));
    //             del.className = "close";
    //             listt.appendChild(del);
    //     document.getElementById("ul-users").appendChild(listt);
    //     let closeBtns = document.getElementsByClassName("close");
    // for (let i = 0; i < closeBtns.length; ++i) {
    //     closeBtns[i].onclick = function () {
    //         let div = closeBtns[i].parentElement;
    //         div.style.display = "none";
    //         notes.splice(i, 1);
    //         storage.setItem('notes', JSON.stringify(notes));
    //     }}
    //     };



// function Mysearch() {
//     let input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("mysearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("ul-users");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//             console.log('yes');
//         } else {
//             li[i].style.display = "none";
//         }
//     }


    // let n = document.getElementById('mysearch');
    // let filter = n.value.innerText;
    // let m = document.getElementById('ul-users');
    // let myLi = document.getElementsByClassName('ul-li');
    // // let arr = myLi.value;
    // // let arrStr = arr.toString();
    // // let x = document.getElementById('input3').value;
    // for (let i = 0; i < myLi.length; i++) {
    //     if (filter === myLi[i]) {
    //         console.log('match')}
    //         else {
    //             console.log('no')
    //         }
    //     }


    // let searchBtn = document.getElementById('search-btn');
    // searchBtn.addEventListener('click', function() {
    //     console.log('ok')
    //         if (5 > 2) {
    //             m.style.display = 'none';
    //             x.style.display = 'block';
    
    //     }
    // })

export default Mysearch