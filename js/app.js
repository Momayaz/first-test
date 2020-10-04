
var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let seattle={
    location: 'Seattle',
    minHourlyCustomer: 23,
    maxHourlyCustomer: 65,
    avgCookies: 6.3,
    randomNumber: [],
    getRandomNumber: function(){
        for(let i=0; i<workHours.length; i++){
        this.randomNumber.push(Math.floor(getRandomInt(this.minHourlyCustomer,this.maxHourlyCustomer)*this.avgCookies));
    }
    },
    show: function(){
        let sectionEl = document.getElementById('results');
        let pEl = document.createElement('p');
        sectionEl.appendChild(pEl);
        pEl.textContent = this.location;
        let ulEl = document.createElement('ul');
        sectionEl.appendChild(ulEl);
        for(let k=0; k<workHours.length; k++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent= `${workHours[k]}:${this.randomNumber[k]}`
        }
    
    }
}
seattle.getRandomNumber();
seattle.show();
console.log(seattle.show);








var tokyo ={
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies:1.2,
    cookiesPerHour: [],
    getCookiesPerHour: function(){
        for(var i=0; i<workHours.length; i++){
       this.cookiesPerHour.push(Math.floor(getRandomInt(this.minCust,this.maxCust)* this.avgCookies));
    }
   },
   render: function(){
    var sectionEl = document.getElementById('tokyo');
    var pEl = document.createElement('p');
    sectionEl.appendChild(pEl);
    pEl.innerHTML=`${this.location}`;
    var ulEl = document.createElement('ul');
    sectionEl.appendChild(ulEl);
    for(var k=0; k<workHours.length; k++){
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.innerHTML = `${workHours[k]}:${this.cookiesPerHour[k]}`;
    }
   }

}
tokyo.getCookiesPerHour();
tokyo.render();
console.log(tokyo.cookiesPerHour);






var Dubai={

    minHourlyCustomer:11,
    maxHourlyCustomer:38,
    avgCookies:3.7,
    avgCookiesPerHour:[],
    getCookiesPerHour :function () {
        for(var M=0;M<workHours.length; M++){
        this.avgCookiesPerHour.push(Math.floor(getRandomInt(this.minHourlyCustomer,this.maxHourlyCustomer)*this.avgCookies));

        
    

}

    },

show:function () {
     var sectionEl = document.getElementById('Dubai');
     var pEl =document.createElement('p');
     sectionEl.appendChild(pEl);
     pEl.innerHTML= 'Dubai'
     var ulEl =document.createElement('ul');
     sectionEl.appendChild(ulEl);
     for(var A=0; A<workHours.length; A++){
      var liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.innerHTML= `${workHours[A]}:${this.avgCookiesPerHour[A]}`;

     }
}
}
Dubai.getCookiesPerHour();
Dubai.show();
console.log(Dubai.avgCookiesPerHour);



































































function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }




