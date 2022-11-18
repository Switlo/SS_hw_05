`use strict`;

// #1 Найкращі друзі

let myFriends = ["Гоша", "Настя", "Ваня", "Світлана", "Катерина", "Наташа"];

for (i = 0; i < myFriends.length; i++) { 
    $("body").append("<div>" + myFriends[i] + "</div>" + "<p></p>");   
}

// myFriends = document.querySelector('#friendsNames');

$("#first-heading").text("Мої найкращі друзі"); 
$("p").append("кращий/-а")
$("p").fadeOut(3000).fadeIn(2000);

 $("div").hide(3000, function () { 
        $("div").fadeIn(2000);
    })

// #2 Заголовок, що блимає