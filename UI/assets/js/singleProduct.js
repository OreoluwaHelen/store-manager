const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

  	const toggleModal = () => {
        modal.classList.toggle("show-modal");
    }

    const windowOnClick = (newevent) => {
        if (newevent.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
