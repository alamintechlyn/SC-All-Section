


// weekend size active js
    var sizeButtons = document.querySelectorAll(".pf-size-btn .s"); 
    sizeButtons[0].classList.add("active") 
    sizeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            sizeButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });


    // weekedn color active js
    const colorBtn = document.querySelectorAll('.pf-color-btn .c');
colorBtn[0].classList.add("color-active")
    colorBtn?.forEach(function(button) {
        button.addEventListener("click", function(){
           colorBtn?.forEach(function(btn){
            btn.classList.remove("color-active");
           })
           button.classList.add("color-active")
        });

    })
  
