function changeRentals(value) {
    if (value !== "none") {
        window.location.href = "rentals.html?type=" + value;
    }
}