

// FIRST CODE EXAMPLE

// JavaScript for handling quiz logic
// function checkAnswers() {
//     const correctAnswers = {
//         q1: ["React", "Angular"],
//         q2: ["var", "let", "const"],
//         q3: ["Document Object Model"]
//     };

//     let score = 0;

//     // Get user answers
//     const userAnswers = {
//         q1: Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(input => input.value),
//         q2: Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(input => input.value),
//         q3: Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(input => input.value)
//     };

//     // Check answers
//     if (JSON.stringify(userAnswers.q1.sort()) === JSON.stringify(correctAnswers.q1.sort())) {
//         score++;
//     }
//     if (JSON.stringify(userAnswers.q2.sort()) === JSON.stringify(correctAnswers.q2.sort())) {
//         score++;
//     }
//     if (JSON.stringify(userAnswers.q3.sort()) === JSON.stringify(correctAnswers.q3.sort())) {
//         score++;
//     }

//     // Display result
//     const resultElement = document.getElementById("result");
//     resultElement.innerHTML = `You got <strong>${score}</strong> out of 3 correct.`;
// }







// UPDATED CODE 2ND TIME

// JavaScript for handling quiz logic
// function checkAnswers() {
//     const correctAnswers = {
//         q1: ["React", "Angular"],
//         q2: ["var", "let", "const"],
//         q3: ["Document Object Model"]
//     };

//     let score = 0;

//     // Get user answers (only one per question)
//     const userAnswers = {
//         q1: document.querySelector('input[name="q1"]:checked')?.value,
//         q2: document.querySelector('input[name="q2"]:checked')?.value,
//         q3: document.querySelector('input[name="q3"]:checked')?.value
//     };

//     // Check answers
//     if (userAnswers.q1 && correctAnswers.q1.includes(userAnswers.q1)) {
//         score++;
//     }
//     if (userAnswers.q2 && correctAnswers.q2.includes(userAnswers.q2)) {
//         score++;
//     }
//     if (userAnswers.q3 && correctAnswers.q3.includes(userAnswers.q3)) {
//         score++;
//     }

//     // Display result
//     const resultElement = document.getElementById("result");
//     resultElement.innerHTML = `You got <strong>${score}</strong> out of 3 correct.`;
// }









// UPDATED CODE 3RD TIME

// document.getElementById('submit-btn').addEventListener('click', function() {
//     let score = 0;

//     // Get all questions
//     const questions = document.querySelectorAll('.question');
    
//     // Iterate through each question
//     questions.forEach(function(question) {
//         // Find the selected radio button for the current question
//         const selected = question.querySelector('input[type="radio"]:checked');
        
//         if (selected) {
//             // Check if the selected answer has the data-correct attribute
//             if (selected.hasAttribute('data-correct')) {
//                 score++; // Increment the score if the answer is correct
//             }
//         }
//     });

//     // Show the final score
//     alert('Your score is: ' + score + ' out of ' + questions.length);
// });








// UPDATED CODE 4TH TIME

// document.getElementById('submit-btn').addEventListener('click', function() {
//     let score = 0;
//     const questions = document.querySelectorAll('.question');

//     questions.forEach(function(question) {
//         const selected = question.querySelector('input[type="radio"]:checked');

//         if (selected) {
//             // Check if the selected answer is correct
//             if (selected.hasAttribute('data-correct')) {
//                 score++;
//             }
//         } else {
//             alert('Please answer all questions!');
//             return;
//         }
//     });

//     alert('Your score is: ' + score + ' out of ' + questions.length);
// });









// UPDATED CODE 5TH TIME

// document.getElementById('submit-btn').addEventListener('click', function() {
//     let score = 0;
//     const questions = document.querySelectorAll('.question');

//     questions.forEach(function(question) {
//         // Get all selected inputs (both radio and checkbox)
//         const radios = question.querySelectorAll('input[type="radio"]:checked');
//         const checkboxes = question.querySelectorAll('input[type="checkbox"]:checked');

//         if (radios.length > 0) {
//             // Check for correct radio button answers
//             radios.forEach(function(radio) {
//                 if (radio.hasAttribute('data-correct')) {
//                     score++;
//                 }
//             });
//         } else if (checkboxes.length > 0) {
//             // Check for correct checkbox answers (multiple selections allowed)
//             checkboxes.forEach(function(checkbox) {
//                 if (checkbox.hasAttribute('data-correct')) {
//                     score++;
//                 }
//             });
//         } else {
//             alert('Please answer all questions!');
//             return;
//         }
//     });

//     alert('Your score is: ' + score + ' out of ' + questions.length);
// });





// UPDATED CODE 6TH TIME

// document.getElementById('submit-btn').addEventListener('click', function() {
//     let score = 0;
//     const questions = document.querySelectorAll('.question');
//     let resultHTML = '';
//     let totalQuestions = 0;

//     questions.forEach(function(question, index) {
//         totalQuestions++;
//         const radios = question.querySelectorAll('input[type="radio"]:checked');
//         const checkboxes = question.querySelectorAll('input[type="checkbox"]:checked');
//         let correctAnswers = 0;
//         let questionCorrect = false;

//         // Check if it's a radio question
//         if (radios.length > 0) {
//             radios.forEach(function(radio) {
//                 if (radio.hasAttribute('data-correct')) {
//                     correctAnswers++;
//                 }
//             });
//             if (correctAnswers === 1) {
//                 score++;
//                 questionCorrect = true;
//             }
//         }

//         // Check if it's a checkbox question
//         if (checkboxes.length > 0) {
//             checkboxes.forEach(function(checkbox) {
//                 if (checkbox.hasAttribute('data-correct')) {
//                     correctAnswers++;
//                 }
//             });
//             if (correctAnswers === checkboxes.length) {
//                 score++;
//                 questionCorrect = true;
//             }
//         }

//         // Store the result for each question
//         if (questionCorrect) {
//             resultHTML += `<p>Question ${index + 1}: Correct</p>`;
//         } else {
//             resultHTML += `<p>Question ${index + 1}: Incorrect</p>`;
//         }
//     });

//     // Display the score and the result of each question
//     alert('Your score is: ' + score + ' out of ' + totalQuestions);
//     document.getElementById('quiz-result').innerHTML = resultHTML;
// });




// UPDATED CODE 7TH TIME

// function checkAnswers() {
//     let score = 0;
//     const questions = document.querySelectorAll('.question');
//     let resultHTML = '';
//     let totalQuestions = questions.length;

//     questions.forEach(function(question, index) {
//         const inputs = question.querySelectorAll('input');
//         let correctAnswers = 0;
//         let questionCorrect = false;

//         inputs.forEach(function(input) {
            // Check if it's a checked radio or checkbox option
        //     if (input.checked) {
        //         if (input.hasAttribute('data-correct')) {
        //             correctAnswers++;
        //         }
        //     }
        // });

        // For radio buttons, only one option should be correct
        // if (question.querySelector('input[type="radio"]')) {
        //     // If a correct answer is checked for radio
        //     if (correctAnswers === 1) {
        //         score++;
        //         questionCorrect = true;
        //     }
        // }

        // For checkboxes, we check the exact number of correct answers selected
        // if (question.querySelector('input[type="checkbox"]')) {
        //     const correctCheckboxes = question.querySelectorAll('input[type="checkbox"][data-correct="true"]').length;
        //     const selectedCheckboxes = question.querySelectorAll('input[type="checkbox"]:checked').length;

        //     // Check if the number of selected checkboxes matches the number of correct ones
        //     if (correctAnswers === correctCheckboxes && selectedCheckboxes === correctCheckboxes) {
        //         score++;
        //         questionCorrect = true;
        //     }
        // }

        // Store the result for each question
    //     if (questionCorrect) {
    //         resultHTML += `<p class="correct">Question ${index + 1}: Correct</p>`;
    //     } else {
    //         resultHTML += `<p class="incorrect">Question ${index + 1}: Incorrect</p>`;
    //     }
    // });

    // Display the total score and individual question results
//     document.getElementById('quiz-result').innerHTML = `
//         <p>Your score: ${score} out of ${totalQuestions}</p>
//         ${resultHTML}
//     `;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("quiz-form");
//     const questionsContainer = form.querySelector(".container");

    // Function to shuffle questions
    // function shuffleQuestions() {
    //     const questions = Array.from(questionsContainer.querySelectorAll(".question"));
    //     console.log("Before shuffle: ", questions.length); // Debugging line
    //     for (let i = questions.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         questions[i].parentNode.insertBefore(questions[j], questions[i]);
    //     }
    //     console.log("After shuffle: ", questions.length); // Debugging line
    // }

    // Shuffle questions on page load
    // shuffleQuestions();

    // Form submission logic
    // form.addEventListener("submit", function(event) {
    //     event.preventDefault();

        // Check answers when the form is submitted
        // checkAnswers();

        // Shuffle questions again after form submission
//         shuffleQuestions();
//     });
// });


// Function to check the answers and display results
// function checkAnswers() {
    // Add your logic to check the answers here
    // var correctAnswers = 0;

    // Example: Compare answers, increment correctAnswers, and display feedback
    // This is just an example, you will adjust based on your actual quiz setup.
    // var answer1 = document.querySelector('input[name="question1"]:checked').value;
    // if (answer1 === "correct_answer") {
    //     correctAnswers++;
    // }

    // Show result
    // document.getElementById('quiz-result').innerHTML = 'You got ' + correctAnswers + ' out of 3 correct!';
// }

// Function to restart the quiz by resetting the form and results
// function restartGame() {
    // Reset all inputs (you can add more selectors for different types of inputs)
    // var inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="text"]');
    // inputs.forEach(input => {
    //     input.checked = false;
    //     input.value = '';  // Reset any text input fields
    // });

    // Reset result section
    // document.getElementById('quiz-result').innerHTML = '';

    // Optionally, you can reset any other game elements here
// }



// UPDATE CODE 8TH TIME

document.addEventListener("DOMContentLoaded", () => {
    function checkAnswers() {
        const questions = document.querySelectorAll('.question');
        let score = 0;
        let total = questions.length;

        questions.forEach((question) => {
            const options = question.querySelectorAll('input');
            let correctAnswers = 0;
            let selectedCorrect = 0;
            let selectedWrong = 0;

            options.forEach((option) => {
                if (option.dataset.correct === "true") correctAnswers++;
                if (option.checked && option.dataset.correct === "true") selectedCorrect++;
                if (option.checked && option.dataset.correct !== "true") selectedWrong++;
            });

            // For checkboxes: Award points only if all correct answers are selected and no wrong answers are selected
            const isCheckbox = question.querySelector('input[type="checkbox"]');
            if (isCheckbox && selectedCorrect === correctAnswers && selectedWrong === 0) {
                score++;
            }

            // For radio buttons: Award points if the correct option is selected
            const selectedRadio = question.querySelector('input[type="radio"]:checked');
            if (selectedRadio && selectedRadio.dataset.correct === "true") {
                score++;
            }
        });

        const unanswered = total - document.querySelectorAll('.question input:checked').length;

        alert(`Your score: ${score}/${total}\nUnanswered questions: ${unanswered}`);
    }

    function restartGame() {
        // Uncheck all inputs
        document.querySelectorAll('input').forEach((input) => (input.checked = false));
        alert("Quiz reset. You can try again!");
    }

    // Attach event listeners to buttons
    document.querySelector("#submit-quiz").addEventListener("click", checkAnswers);
    document.querySelector("#restart-game").addEventListener("click", restartGame);
});
