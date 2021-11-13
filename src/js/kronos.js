window.addEventListener("DOMContentLoaded", () => {

	/**
	 * Modal open part
	 */
	let buttons = document.querySelectorAll("button[data-toggle='modal']");
	attachModal(buttons);

	function attachModal(buttons) {
		if(buttons.length > 0){
			buttons.forEach(element => {
				element.addEventListener("click", function (e) {
					let modalID = element.getAttribute("data-target");
					let modal = document.getElementById(modalID);
					if(modal){
						addModalContent(modal, element.parentElement);
						modal.style.display = "grid";
						setTimeout(() => {
							modal.classList.add("show");
						}, 100);
						document.body.classList.add("modal-open");
					}
				})
			});
		}
	}

	window.addEventListener("click", function(e) {
		let modal = document.querySelector(".modal.show");
		if(modal){
			let closeButton = modal.querySelector("button.close"),
				modalContent = modal.querySelector(".modal-content");

			closeButton.addEventListener("click", function(e) {
				closeModal(modal);
			});
			if(e.target != modalContent && !modalContent.contains(e.target)){
				closeModal(modal);
			}
		}
	})

	function closeModal(modal) {
		modal.classList.remove("show");
		setTimeout(() => {
			modal.style.display = "none";
		}, 100);
		document.body.classList.remove("modal-open");
	}

	function addModalContent(modal, card) {
		let title = card.querySelector(".card-title"),
			desc = card.querySelector(".card-text"),
			modalTitle = modal.querySelector(".modal-title"),
			modalDesc = modal.querySelector(".modal-body");

		modalTitle.innerHTML = title.innerHTML;
		modalDesc.innerHTML = desc.innerHTML;
	}
})


    var togBtn = document.querySelector(".toggle-button");
    const theme = document.querySelector(".theme-link");
    const teamPgTheme = document.querySelector(".teamPg-theme-link");

//javascript function to have darktheme toggler
/*
    togBtn.addEventListener("click" , function(){
    if(theme.getAttribute("href") == "src/css/kronos.css")
        { 
            theme.setAttribute("href" , "src/css/kronos-dark.css");
            togBtn.innerHTML="L";
            togBtn.classList.remove("btn-outline-dark");
            togBtn.classList.add("btn-outline-light");
            teamPgTheme.setAttribute("href" , "src/css/teampg-dark.css");
        }
    else 
        {
            theme.setAttribute("href" , "src/css/kronos.css");
            togBtn.innerHTML="D";
            togBtn.classList.remove("btn-outline-light");
            togBtn.classList.add("btn-outline-dark");  
            teamPgTheme.setAttribute("href" , "src/css/teampg.css");
        }
    
});
*/

//function to handle scroll to top button
$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 500) {
		$(".arrow-up").removeClass("hide-arrow");  
		}else{
		$(".arrow-up").addClass("hide-arrow");
		}
	});
});
  