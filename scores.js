let valid1 =false;
let valid2 = false;
let grade = {};
$(document).ready(function () {
    $("#submitButton").click(storeGrade);
})
function storeGrade(event) {
    event.preventDefault();

    //Validate earned points
    if ($("#pointsEarned").val() > 500) {
        $("#pointsEarned").val("");
        $("#pointsEarnedCorrection").text("The maximum number of points is 500.");
        valid1 = false;
        }
    else if ($("#pointsEarned").val() < 0) {
        $("#pointsEarned").val("");
        $("#pointsEarnedCorrection").text("The minimum number of points is 0.");
        valid1 = false;
        }
    else if ($("#pointsEarned").val() >  $("#pointsPossible").val()){
        $("#pointsEarnedCorrection").text("The earned points cannot be greater than the possible points.");
        valid1 = false;
        }
    else {
        $("#pointsEarnedCorrection").text("");
        valid1 =true;
    }

    //Validate Possible points
    if ($("#pointsPossible").val() > 500) {
        $("#pointsPossible").val("");
        $("#pointsPossibleCorrection").text("The maximum number of points is 500.");
        valid2=false;
    } else if ($("#pointsPossible").val() < 0) {
        $("#pointsPossible").val("");
        $("#pointsPossibleCorrection").text("The minimum number of points is 0.");
        valid2=false;
    } else {
        $("#pointsPossibleCorrection").text("");
        valid2=true;
    }
    if(valid1 && valid2){
        grade = {
            firstName: $("#studentFirstName").val(),
            lastName: $("#studentLastName").val(),
            earnedPoints: $("#pointsEarned").val(),
            possiblePoints: $("#pointsPossible").val()
        };
        $("#studentFirstName").val("");
        $("#studentLastName").val("");
        $("#pointsEarned").val("");
        $("#pointsPossible").val("");
        displayGrade();
    }

}

function displayGrade() {
    let fName = grade.firstName;
    let lName = grade.lastName;
    let score = (grade.earnedPoints / grade.possiblePoints) *100;
    let letterGrade;
    if (score>=90){
        letterGrade = "A";
    }
    else if (score>=80){
        letterGrade = "B";
    }
    else if (score>=70){
        letterGrade ="C";
    }
    else if (score >= 60){
        letterGrade = "D";
    }
    else{
        letterGrade ="F";
    }
    let message = `${lName}, ${fName}: ${score}% ${letterGrade}`;
    $("#dataDisplay").text(message);
}