function changeRentals(value) {
    if (value !== "none") {
        window.location.href = "reservations.html?type=" + value;
    }
}