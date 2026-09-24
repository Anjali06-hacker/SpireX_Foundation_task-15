/* ================= STUDENT INFORMATION ================= */
/*  This function displays a message when
    the user clicks the Student Portal button. */
function showStudentMessage() {
    const message =
        document.getElementById("studentMessage");
    message.textContent =
        "Student portal includes attendance, academic records, notices and other student information.";
}
/*  This function displays information about
    academic activities. */
function showActivityMessage() {
    const message =
        document.getElementById("studentMessage");
    message.textContent =
        "Students can participate in workshops, seminars, cultural programs, sports and competitions.";
}