var nineEl = document.getElementById('9AM');
var tenEl = document.getElementById('10AM');
var elevenEl = document.getElementById('11AM');
var twelveEl = document.getElementById('12PM');
var oneEl = document.getElementById('1PM');
var twoEl = document.getElementById('2PM');
var threeEl = document.getElementById('3PM');
var fourEl = document.getElementById('4PM');
var fiveEl = document.getElementById('5PM');
var sixEl = document.getElementById('6PM');
var saveBtn9 = document.getElementById('save9');
var saveBtn10 = document.getElementById('save10');
var saveBtn11 = document.getElementById('save11');
var saveBtn12 = document.getElementById('save12');
var saveBtn13 = document.getElementById('save13');
var saveBtn14 = document.getElementById('save14');
var saveBtn15 = document.getElementById('save15');
var saveBtn16 = document.getElementById('save16');
var saveBtn17 = document.getElementById('save17');
var saveBtn18 = document.getElementById('save18');

var text9 = document.getElementById('in9');
var text10 = document.getElementById('in10');
var text11 = document.getElementById('in11');
var text12 = document.getElementById('in12');
var text13 = document.getElementById('in13');
var text14 = document.getElementById('in14');
var text15 = document.getElementById('in15');
var text16 = document.getElementById('in16');
var text17 = document.getElementById('in17');
var text18 = document.getElementById('in18');

text9.value = localStorage.getItem('9AM');
text10.value = localStorage.getItem('10AM');
text11.value = localStorage.getItem('11AM');
text12.value = localStorage.getItem('12AM');
text13.value = localStorage.getItem('13AM');
text14.value = localStorage.getItem('14AM');
text15.value = localStorage.getItem('15AM');
text16.value = localStorage.getItem('16AM');
text17.value = localStorage.getItem('17AM');
text18.value = localStorage.getItem('18AM');

var currentDay = document.getElementById("currentDay");
var today = moment().format("MM-DD-YYYY");

var hour = moment().format("H");
currentDay.textContent = today;
function init(){
if (hour == 9){
    nineEl.classList.add('present');
} else if (hour > 9){
    nineEl.classList.add('future');
}else{
    nineEl.classList.add('past');
}
if (hour == 10){
    tenEl.classList.add('present');
} else if (hour > 10){
    tenEl.classList.add('future');
}else{
    tenEl.classList.add('past');
}
if (hour == 11){
    elevenEl.classList.add('present');
} else if (hour > 11){
    elevenEl.classList.add('future');
}else{
    elevenEl.classList.add('past');
}
if (hour == 12){
    twelveEl.classList.add('present');
} else if (hour > 12){
    twelveEl.classList.add('future');
}else{
    twelveEl.classList.add('past');
}
if (hour == 13){
    oneEl.classList.add('present');
} else if (hour > 13){
    oneEl.classList.add('future');
}else{
    oneEl.classList.add('past');
}
if (hour == 14){
    twoEl.classList.add('present');
} else if (hour > 14){
    twoEl.classList.add('future');
}else{
    twoEl.classList.add('past');
}
if (hour == 15){
    threeEl.classList.add('present');
} else if (hour > 15){
    threeEl.classList.add('future');
}else{
    threeEl.classList.add('past');
}
if (hour == 16){
    fourEl.classList.add('present');
} else if (hour > 16){
    fourEl.classList.add('future');
}else{
    fourEl.classList.add('past');
}
if (hour == 17){
    fiveEl.classList.add('present');
} else if (hour > 17){
    fiveEl.classList.add('future');
}else{
    fiveEl.classList.add('past');
}
if (hour == 18){
    sixEl.classList.add('present');
} else if (hour > 18){
    sixEl.classList.add('future');
}else{
    sixEl.classList.add('past');
}}

saveBtn9.addEventListener('click', function(event){
    event.preventDefault();
    let text = document.querySelector('#in9').value;
    localStorage.setItem("9AM", text);
    console.log(text);
})
saveBtn10.addEventListener('click', function(event){
    event.preventDefault();
    let text = document.querySelector('#in10').value;
    localStorage.setItem("10AM", text);
    console.log(text);
})
saveBtn11.addEventListener('click', function(event){
    event.preventDefault();
    let text = document.querySelector('#in11').value;
    localStorage.setItem("11AM", text);
    console.log(text);
})
saveBtn12.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in12').value;
    localStorage.setItem("12AM", text);
    console.log(text);
})
saveBtn13.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in13').value;
    localStorage.setItem("13AM", text);
    console.log(text);
})
saveBtn14.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in14').value;
    localStorage.setItem("14AM", text);
    console.log(text);
})
saveBtn15.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in15').value;
    localStorage.setItem("15AM", text);
    console.log(text);
})
saveBtn16.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in16').value;
    localStorage.setItem("16AM", text);
    console.log(text);
})
saveBtn17.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in17').value;
    localStorage.setItem("17AM", text);
    console.log(text);
})
saveBtn18.addEventListener('click', function(event){
    event.preventDefault();
    var text = document.querySelector('#in18').value;
    localStorage.setItem("18AM", text);
    console.log(text);
})
init();