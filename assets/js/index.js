$(function () {
    // Tooltip en botón formulario e iconos de footer//
    var tooltipTriggerList =
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map
        (function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })

    //Popover en icono de Navbar//
    const popoverTriggerList =
        document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map
        (popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // Cambio de color de Navbar //
    $(window).scroll(function () {
        if ($("#menu").offset().top > 310) {
            $("#menu").addClass("bg-dark");
        } else {
            $("#menu").removeClass("bg-dark");
        }

        // Toast en titulo sección destacados//
        const toastTrigger = document.getElementById('textoDestacado')
        const toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', () => {
                const toast = new bootstrap.Toast(toastLiveExample)

                toast.show()
            })
        }
    })
});