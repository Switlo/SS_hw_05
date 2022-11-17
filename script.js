`use strict`;

// #1 Найкращі друзі

let myFriends = ["Гоша", "Настя", "Ваня", "Світлана", "Катерина", "Наташа"];

for (i = 0; i < myFriends.length; i++) { 
    $("body").append(myFriends[i] + "<p></p>");
}

$("#first-heading").text("Мої найкращі друзі"); 
$("p").append("кращий/-а")
$("p").fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(1000);

// ??? Используйте метод hide и метод fadeIn, чтобы имена плавно возникали на экране.