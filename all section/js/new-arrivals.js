  // new arrival section 

document.addEventListener("DOMContentLoaded", function() {
    var cards = document.getElementsByClassName("pf-new-arrival-card");
    var applyCardBehavior = function() {
        if (window.innerWidth <= 991) {
            for (var i = 0; i < cards.length; i++) {
                cards[i].classList.remove("active");
                cards[i].removeEventListener("mouseover", cardMouseOverHandler);
            }
            return;
        }
        cards[0]?.classList.add("active");

        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", cardMouseOverHandler);
        }
    };

    var cardMouseOverHandler = function() {
        for (var j = 0; j < cards.length; j++) {
            cards[j].classList.remove("active");
        }
        this.classList.add("active");
    };

    applyCardBehavior();

    window.addEventListener("resize", applyCardBehavior);
});


