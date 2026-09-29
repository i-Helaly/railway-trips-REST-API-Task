const convertDate = (dateString) => {
    if (!dateString) {
        throw new Error("Date is required");
    }

    const [day, month, year] = dateString.split("-");

    return new Date(`${year}-${month}-${day}`);
};

module.exports = convertDate;