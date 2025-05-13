function toggleMobileMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function toggleMobileDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";
}
const quizData = [
    {
        number: 1,
        question:
            "Lorem ipsum dolor sit amet consectetur. Sed vestibulum amet nec maecenas.",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
        number: 2,
        question:
            "Lorem ipsum dolor sit amet consectetur. Sed vestibulum amet nec maecenas.",
        instruction: "Choose all that apply",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
        number: 3,
        question: "What is your current experience level?",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    {
        number: 4,
        question: "What are your main goals for taking this course?",
        instruction: "Choose all that apply",
        type: "radio",
        options: [
            "Career advancement",
            "Personal interest",
            "Academic requirement",
            "Skill development",
        ],
    },
    {
        number: 5,
        question: "How much time can you dedicate to studying per week?",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: [
            "Less than 5 hours",
            "5-10 hours",
            "10-20 hours",
            "More than 20 hours",
        ],
    },
    {
        number: 6,
        question: "Which learning formats do you prefer?",
        instruction: "Choose all that apply",
        type: "radio",
        options: [
            "Video lectures",
            "Reading materials",
            "Interactive exercises",
            "Group discussions",
        ],
    },
    {
        number: 7,
        question: "What is your preferred course duration?",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: [
            "Short (1-4 weeks)",
            "Medium (1-3 months)",
            "Long (3+ months)",
            "Self-paced (no time limit)",
        ],
    },
    {
        number: 8,
        question: "Which areas are you most interested in?",
        instruction: "Choose all that apply",
        type: "radio",
        options: [
            "Technology & Programming",
            "Business & Management",
            "Arts & Humanities",
            "Science & Mathematics",
        ],
    },
    {
        number: 9,
        question: "What is your budget for this course?",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: ["Free only", "Under $50", "$50-$200", "$200+"],
    },
    {
        number: 10,
        question: "Do you need a certificate upon completion?",
        instruction: "Choose the best relevant option",
        type: "radio",
        options: [
            "Yes, accredited",
            "Yes, any certificate",
            "No, but would be nice",
            "No, not important",
        ],
    },
];

// Quiz state
let currentQuestion = 0;
const totalQuestions = quizData.length;
const userAnswers = Array(totalQuestions)
    .fill(null)
    .map(() => []);

// DOM elements
const quizContainer = document.getElementById("quiz-container");
const progressBar = document.getElementById("progress-bar");
const currentQuestionText = document.getElementById("current-question");
const totalQuestionsText = document.getElementById("total-questions");
const introText = document.getElementById("intro-text");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Initialize progress bar
function initProgressBar() {
    progressBar.innerHTML = "";
    for (let i = 0; i < totalQuestions; i++) {
        const segmentWrapper = document.createElement("div");
        const segment = document.createElement("div");
        segment.className = "progress-segment";
        segmentWrapper.className = "segment-wrapper";
        if (i === 0) segment.classList.add("active");
        segmentWrapper.appendChild(segment);
        progressBar.appendChild(segmentWrapper);
    }
}

// Create question elements
function createQuestions() {
    quizContainer.innerHTML = "";

    quizData.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.className = `question-container ${
            index === 0 ? "active" : ""
        }`;
        questionElement.id = `question-${index}`;

        const questionNumberElement = document.createElement("div");
        questionNumberElement.className = "question-number";
        questionNumberElement.textContent = `Question ${
            question.number < 10 ? "0" + question.number : question.number
        }`;

        const questionTextElement = document.createElement("div");
        questionTextElement.className = "question-text";
        questionTextElement.textContent = question.question;

        const instructionElement = document.createElement("div");
        instructionElement.className = "instruction-text";
        instructionElement.textContent = question.instruction;

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "options-container";

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("label");
            optionElement.className =
                question.type === "radio" ? "option-item" : "checkbox-item";

            const input = document.createElement("input");
            input.type = question.type === "radio" ? "radio" : "checkbox";
            input.name = `question-${index}`;
            input.value = optionIndex;

            // Add event listener to save answers
            input.addEventListener("change", () => {
                if (question.type === "radio") {
                    userAnswers[index] = [optionIndex];
                } else {
                    if (input.checked) {
                        if (!userAnswers[index].includes(optionIndex)) {
                            userAnswers[index].push(optionIndex);
                        }
                    } else {
                        userAnswers[index] = userAnswers[index].filter(
                            (i) => i !== optionIndex
                        );
                    }
                }
            });

            const optionText = document.createTextNode(option);

            optionElement.appendChild(input);
            optionElement.appendChild(optionText);
            optionsContainer.appendChild(optionElement);
        });

        questionElement.appendChild(questionNumberElement);
        questionElement.appendChild(questionTextElement);
        questionElement.appendChild(instructionElement);
        questionElement.appendChild(optionsContainer);

        quizContainer.appendChild(questionElement);
    });
}

// Navigation functions
function showQuestion(questionIndex) {
    // Update question display
    document
        .querySelectorAll(".question-container")
        .forEach((q) => q.classList.remove("active"));
    document
        .getElementById(`question-${questionIndex}`)
        .classList.add("active");

    // Update progress bar
    document.querySelectorAll(".progress-segment").forEach((segment, index) => {
        segment.classList.toggle("active", index === questionIndex);
    });

    // Update question counter
    currentQuestionText.textContent = questionIndex + 1;

    // Update navigation buttons
    prevButton.style.display = questionIndex > 0 ? "block" : "none";

    // Update intro text
    if (questionIndex === 0) {
        introText.textContent =
            "Your journey starts here! Let's find the perfect course for you";
    } else {
        introText.textContent =
            "Keep going! Every answer brings you closer to the best recommendations.";
    }

    // Restore any previously selected answers
    const currentAnswers = userAnswers[questionIndex];
    if (currentAnswers && currentAnswers.length > 0) {
        const questionType = quizData[questionIndex].type;
        const inputs = document.querySelectorAll(
            `#question-${questionIndex} input`
        );

        inputs.forEach((input, index) => {
            if (questionType === "radio") {
                input.checked = currentAnswers[0] === index;
            } else {
                input.checked = currentAnswers.includes(index);
            }
        });
    }
}

function nextQuestion() {
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        // Loader part comes here
        document.getElementById("loader-overlay").classList.remove("hidden");

        // After 4 seconds
        setTimeout(() => {
            document.getElementById("loader-overlay").classList.add("hidden");

            const courseSection = document.getElementById("next-section");
            courseSection.classList.add("visible");
            document.querySelector(".container-wrapper").style.display = "none";
            courseSection.scrollIntoView({ behavior: "smooth" });
        }, 1000);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Initialize the quiz
function initQuiz() {
    totalQuestionsText.textContent = totalQuestions;
    initProgressBar();
    createQuestions();
    showQuestion(0);

    // Add event listeners to navigation buttons
    nextButton.addEventListener("click", nextQuestion);
    prevButton.addEventListener("click", previousQuestion);
}

// Start the quiz when the page loads
window.addEventListener("DOMContentLoaded", initQuiz);

function toggleMobileMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function toggleMobileDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";
}
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            accordion.classList.toggle("active");
        });
    });

    // Optional: Activate the first accordion by default
    // if (accordions.length > 0) {
    //     accordions[0].classList.add("active");
    // }
});

// You could add additional JavaScript for handling responses clicked in desktop view
document.addEventListener("DOMContentLoaded", function () {
    const responseItems = document.querySelectorAll(".response-item");

    responseItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove active class from all items
            responseItems.forEach((i) => i.classList.remove("active-response"));

            // Add active class to clicked item
            item.classList.add("active-response");

            // Here you could add logic to show detailed response content
            // For example, updating a details pane with the full response
        });
    });
});
