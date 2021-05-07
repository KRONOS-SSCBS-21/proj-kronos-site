window.addEventListener("DOMContentLoaded", () => {

	// Animated Banner Section
	VANTA.WAVES({
        el:".kronos-top-block-container",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0x90911,
		shininess: 78.00,
		waveHeight: 8.50,
		waveSpeed: 0.90,
        zoom: 1.02
	});

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