var t1 = new TimelineMax({paused: true});
    
t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 1, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -1
});

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", ".data ul li a", function() {
     t1.reversed(!t1.reversed());
})


const blocks = document.getElementsByClassName("block");
const container = document.getElementsByClassName("containerProject");
let hs = new HorizontalScroll.default({
     blocks: blocks,
     container: container,
     isAnimated: true,
     springEffect: 0.8,
});

// const projectContent = document.getElementsByClassName("projectContent");
$(blocks).mouseover(function(event){
     $(event.target).children().css("visibility", "visible");
})
$(blocks).mouseleave(function(event){
     $(event.target).children().css("visibility", "hidden");
})


// LIEN VERS LES PROJETS

document.getElementById("Urja").onclick = function () {
     window.open('https://adelefahier.github.io/Projet-E-Shop-Cactus-Urja/', '_blank');
 };

document.getElementById("Yatra").onclick = function () {
     window.open('https://adelefahier.github.io/Projet-Yatra-Gallery/', '_blank');
 };
 document.getElementById("shifumi").onclick = function () {
     window.open('https://adelefahier.github.io/Jeu-Shifumi/', '_blank');
 };
 document.getElementById("todolist").onclick = function () {
     window.open('https://adelefahier.github.io/Projet-toDoList/', '_blank');
 };