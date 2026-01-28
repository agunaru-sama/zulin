$(document).ready(function () {
    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const btnReset = $("#reset");
    const nextBtn = $("#nextBtn");

    function openEnvelope() {
        envelope.removeClass("close").addClass("open");

        // tampilkan tombol Next setelah animasi
        setTimeout(() => {
            nextBtn.css({
                opacity: 1,
                pointerEvents: "auto"
            });
        }, 700);
    }

    function closeEnvelope() {
        envelope.removeClass("open").addClass("close");

        nextBtn.css({
            opacity: 0,
            pointerEvents: "none"
        });
    }

    envelope.on("click", openEnvelope);
    btnOpen.on("click", openEnvelope);
    btnReset.on("click", closeEnvelope);

    nextBtn.on("click", function () {
        window.location.href = "../drag paper/index.html"; // SESUAIKAN
    });
});
