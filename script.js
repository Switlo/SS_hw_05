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

for (i = 0; i < 5; i++) { 
    $("#first-heading").fadeOut(1000).fadeIn(1000);
}

let time = 1000;
for (j = 0; j < 5; j++) { 
    $("#first-heading").fadeOut(time).fadeIn(time);
    time = time + 1000;
}

