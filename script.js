const scenes = [
  {
    title: "The Hallway",
    phase: "Incident Report",
    section: "incident",
    speaker: "Bystander",
    sceneClass: "hallway",
    artClass: "art-hallway",
    text: "During lunch break, a student from another class is told to leave. The argument gets louder. A few classmates are watching, and someone raises a phone.",
    choices: [
      {
        label: "Record and post it before adults arrive.",
        result:
          "The video spreads quickly. More students gather, but no one has slowed the conflict down. The situation becomes a spectacle before it becomes a report.",
        reflection:
          "SDG 16.3 starts before court: people need trusted ways to report harm before violence escalates.",
        effects: { dueProcess: -8, access: -6, trust: -8, pressure: 18 },
      },
      {
        label: "Ask a teacher and counselor to step in now.",
        result:
          "An adult separates the students and records what happened. The conflict is not solved yet, but there is now a clear path for help and accountability.",
        reflection:
          "Rule of law depends on reachable institutions, not only punishment after a tragedy.",
        effects: { dueProcess: 12, access: 14, trust: 10, pressure: -8 },
      },
      {
        label: "Join the argument because one side seems wrong.",
        result:
          "The crowd gets louder. Everyone thinks they are defending fairness, but the pressure makes it harder for anyone to step back safely.",
        reflection:
          "Justice loses ground when group anger becomes the only process.",
        effects: { dueProcess: -10, access: -4, trust: -8, pressure: 14 },
      },
    ],
  },
  {
    title: "The Group Chat",
    phase: "Rumor Log",
    section: "rumor",
    speaker: "News Voice",
    sceneClass: "chat",
    artClass: "art-chat",
    text: "After the incident, the class group chat fills with screenshots, names, rumors, and demands. Some messages may be false. Some may expose minors.",
    choices: [
      {
        label: "Forward the claims so everyone knows who to blame.",
        result:
          "The chat explodes. Some students feel powerful for naming people, but private information spreads faster than verified facts.",
        reflection:
          "Online punishment can harm rights, witnesses, victims, and the fairness of later proceedings.",
        effects: { dueProcess: -14, access: -8, trust: -10, pressure: 20 },
      },
      {
        label: "Ask the group not to dox or spread unverified details.",
        result:
          "A few students push back, but the chat slows down. People begin separating what is known from what is guessed.",
        reflection:
          "Due process protects everyone by keeping facts, evidence, and responsibility separate from rumors.",
        effects: { dueProcess: 13, access: 6, trust: 9, pressure: -12 },
      },
      {
        label: "Share reporting and counseling resources instead.",
        result:
          "Students who feel unsafe know where to go. The conversation shifts from punishment alone to support, reporting, and safety.",
        reflection:
          "Equal access to justice includes access to help, protection, and official reporting channels.",
        effects: { dueProcess: 7, access: 16, trust: 11, pressure: -8 },
      },
    ],
  },
  {
    title: "The Investigation",
    phase: "Procedure Review",
    section: "procedure",
    speaker: "Teacher",
    sceneClass: "investigation",
    artClass: "art-investigation",
    text: "The school and authorities must respond. Students are angry and afraid. Families want answers. The suspects are also minors with legal rights.",
    choices: [
      {
        label: "Demand the harshest result immediately.",
        result:
          "The demand sounds decisive, but it skips evidence, defense, assessment, and the needs of affected students. People may feel heard, yet the process becomes fragile.",
        reflection:
          "A lawful system cannot replace investigation with public pressure, even after serious harm.",
        effects: { dueProcess: -16, access: -4, trust: -7, pressure: 15 },
      },
      {
        label: "Keep everything quiet to protect the school's image.",
        result:
          "The hallway becomes calm, but students feel ignored. Silence protects reputation more than people, and trust drops.",
        reflection:
          "Access to justice fails when institutions hide conflict instead of responding transparently.",
        effects: { dueProcess: -8, access: -14, trust: -18, pressure: 4 },
      },
      {
        label: "Investigate carefully and support affected students.",
        result:
          "The response is slower than anger wants, but statements, evidence, safety plans, and counseling are handled through clear channels.",
        reflection:
          "SDG 16.3 asks for justice that people can reach and procedures people can trust.",
        effects: { dueProcess: 16, access: 14, trust: 16, pressure: -10 },
      },
    ],
  },
  {
    title: "The Courtroom Debate",
    phase: "Court Record",
    section: "court",
    speaker: "Court Narrator",
    sceneClass: "courthouse",
    artClass: "art-courthouse",
    text: "Months later, the case reaches court. The public argues about sentencing. A family representative speaks about loss. A youth justice worker speaks about risk and rehabilitation.",
    choices: [
      {
        label: "Say justice means the maximum punishment possible.",
        result:
          "Many people agree emotionally. Still, the court must explain facts, responsibility, age, risk, and proportionality. Anger alone cannot write a judgment.",
        reflection:
          "Proportionality is not softness. It is the legal discipline that keeps punishment from becoming revenge.",
        effects: { dueProcess: -8, access: 2, trust: -4, pressure: 12 },
      },
      {
        label: "Say rehabilitation is the only thing that matters.",
        result:
          "The answer recognizes youth development, but it sounds like the victim and community risk have disappeared from the room.",
        reflection:
          "Equal justice must include the accused, the victim, families, and public safety in one lawful process.",
        effects: { dueProcess: 2, access: -8, trust: -10, pressure: 2 },
      },
      {
        label: "Balance sentence, risk assessment, and victim support.",
        result:
          "The discussion becomes harder, but more complete. The system must judge responsibility, reduce future risk, and make support reachable for those harmed.",
        reflection:
          "Rule of law is strongest when it can hold pain, rights, evidence, and safety together.",
        effects: { dueProcess: 15, access: 13, trust: 13, pressure: -7 },
      },
    ],
  },
  {
    title: "The Classroom Reflection",
    phase: "Class Resolution",
    section: "resolution",
    speaker: "Bystander",
    sceneClass: "classroom",
    artClass: "art-classroom",
    text: "Your class must choose one principle to keep after the report ends. The case is anonymous, but the lesson has to be usable in real life.",
    choices: [
      {
        label: "We will not spread unverified personal information.",
        result:
          "The class chooses restraint. It does not erase anger, but it protects minors, witnesses, victims, and the integrity of future proceedings.",
        reflection:
          "Justice needs facts more than viral certainty.",
        effects: { dueProcess: 12, access: 4, trust: 8, pressure: -14 },
      },
      {
        label: "We will know where to report violence and ask for help.",
        result:
          "The class chooses access. Students leave with a practical route to adults, counselors, and official channels before harm grows.",
        reflection:
          "Equal access to justice begins when people know where help is and believe they can use it.",
        effects: { dueProcess: 7, access: 16, trust: 12, pressure: -10 },
      },
      {
        label: "We will support victims while respecting due process.",
        result:
          "The class chooses a difficult balance. It makes room for grief, safety, evidence, rights, and accountability without turning the crowd into the court.",
        reflection:
          "The rule of law asks a community to be compassionate and disciplined at the same time.",
        effects: { dueProcess: 14, access: 14, trust: 15, pressure: -12 },
      },
    ],
  },
];

const initialScores = {
  dueProcess: 50,
  access: 50,
  trust: 50,
  pressure: 35,
};

const scoreLabels = {
  dueProcess: "Due Process",
  access: "Access to Justice",
  trust: "Public Trust",
  pressure: "Emotional Pressure",
};

let currentSceneIndex = 0;
let scores = { ...initialScores };
let selectedPrinciple = "";
let choiceHistory = [];
let pendingChoice = null;

const introScreen = document.querySelector("#introScreen");
const gameScreen = document.querySelector("#gameScreen");
const endingScreen = document.querySelector("#endingScreen");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const playAgainButton = document.querySelector("#playAgainButton");
const continueButton = document.querySelector("#continueButton");
const stage = document.querySelector("#stage");
const sceneKicker = document.querySelector("#sceneKicker");
const sceneTitle = document.querySelector("#sceneTitle");
const sectionLabel = document.querySelector("#sectionLabel");
const scenePhase = document.querySelector("#scenePhase");
const speakerName = document.querySelector("#speakerName");
const sceneText = document.querySelector("#sceneText");
const choices = document.querySelector("#choices");
const resultPanel = document.querySelector("#resultPanel");
const resultText = document.querySelector("#resultText");
const reflectionText = document.querySelector("#reflectionText");
const endingTitle = document.querySelector("#endingTitle");
const endingSummary = document.querySelector("#endingSummary");
const endingMeters = document.querySelector("#endingMeters");
const learningCards = document.querySelector("#learningCards");
const discussionPrompt = document.querySelector("#discussionPrompt");
const closingQuote = document.querySelector("#closingQuote");

const meterElements = {
  dueProcess: {
    value: document.querySelector("#dueProcessValue"),
    bar: document.querySelector("#dueProcessBar"),
  },
  access: {
    value: document.querySelector("#accessValue"),
    bar: document.querySelector("#accessBar"),
  },
  trust: {
    value: document.querySelector("#trustValue"),
    bar: document.querySelector("#trustBar"),
  },
  pressure: {
    value: document.querySelector("#pressureValue"),
    bar: document.querySelector("#pressureBar"),
  },
};

function clampScore(value) {
  return Math.max(0, Math.min(100, value));
}

function updateMeters() {
  Object.entries(scores).forEach(([key, value]) => {
    const roundedValue = Math.round(value);
    meterElements[key].value.textContent = roundedValue;
    meterElements[key].bar.style.width = `${roundedValue}%`;
  });
}

function showScreen(screen) {
  [introScreen, gameScreen, endingScreen].forEach((section) => {
    section.classList.add("is-hidden");
  });
  screen.classList.remove("is-hidden");
  window.scrollTo(0, 0);
}

function renderScene() {
  const scene = scenes[currentSceneIndex];
  sceneKicker.textContent = `Scene ${currentSceneIndex + 1} of ${scenes.length}`;
  sceneTitle.textContent = scene.title;
  sectionLabel.textContent = scene.phase;
  scenePhase.textContent = scene.phase;
  speakerName.textContent = scene.speaker;
  sceneText.textContent = scene.text;
  gameScreen.dataset.section = scene.section;
  stage.className = `stage has-art ${scene.sceneClass} ${scene.artClass}`;
  resultPanel.classList.add("is-hidden");
  choices.innerHTML = "";
  pendingChoice = null;

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.innerHTML = `<span>Choice ${index + 1}</span>${choice.label}`;
    button.addEventListener("click", () => selectChoice(choice, index));
    choices.append(button);
  });

  updateMeters();
  window.scrollTo(0, 0);
}

function selectChoice(choice, index) {
  pendingChoice = choice;

  Array.from(choices.children).forEach((button, buttonIndex) => {
    button.classList.toggle("is-selected", buttonIndex === index);
  });

  resultText.textContent = choice.result;
  reflectionText.textContent = choice.reflection;
  resultPanel.classList.remove("is-hidden");
  continueButton.focus();
}

function commitChoice(choice) {
  choiceHistory.push({
    scene: scenes[currentSceneIndex].title,
    choice: choice.label,
    effects: choice.effects,
  });

  Object.entries(choice.effects).forEach(([key, delta]) => {
    scores[key] = clampScore(scores[key] + delta);
  });

  if (currentSceneIndex === scenes.length - 1) {
    selectedPrinciple = choice.label;
  }
}

function continueGame() {
  if (!pendingChoice) {
    return;
  }

  commitChoice(pendingChoice);
  pendingChoice = null;
  currentSceneIndex += 1;

  if (currentSceneIndex >= scenes.length) {
    renderEnding();
    return;
  }

  renderScene();
}

function getEnding() {
  const justiceAverage = (scores.dueProcess + scores.access + scores.trust) / 3;

  if (justiceAverage >= 72 && scores.pressure <= 45) {
    return {
      title: "A Law-Guided Response",
      summary:
        "Your class kept anger from replacing the process. The result protects reporting, evidence, victim support, and the rights that make justice credible.",
      quote:
        "In a rule-of-law response, care and restraint are not delays. They are part of justice itself.",
      lessons: [
        {
          title: "Procedure creates trust",
          body: "People are more likely to accept difficult outcomes when facts, rights, and reasons are visible.",
        },
        {
          title: "Support is part of justice",
          body: "Victims and affected students need clear channels for safety, counseling, reporting, and information.",
        },
        {
          title: "Restraint protects truth",
          body: "Not spreading rumors helps witnesses, families, minors, and the court process stay credible.",
        },
      ],
      prompt:
        "Which part of the process would be hardest to defend in public: protecting rights, waiting for evidence, or avoiding online blame?",
    };
  }

  if (scores.pressure >= 66) {
    return {
      title: "A Crowd Before a Court",
      summary:
        "Your class responded with urgency, but emotional pressure became stronger than procedure. The lesson is clear: public anger can demand justice, but it cannot become the judge.",
      quote:
        "Anger can point to harm, but it cannot test evidence, protect rights, or measure responsibility.",
      lessons: [
        {
          title: "Public pressure has limits",
          body: "A community can demand accountability, but courts still need evidence, legal standards, and proportionate judgment.",
        },
        {
          title: "Doxing is not access",
          body: "Exposing personal information can create new harm without helping victims reach official support.",
        },
        {
          title: "Speed can weaken fairness",
          body: "Fast answers may feel satisfying, but rushed decisions are easier to challenge and harder to trust.",
        },
      ],
      prompt:
        "When public anger is understandable, what rules should still limit what classmates post, share, or demand?",
    };
  }

  if (scores.access < 50) {
    return {
      title: "A System People Cannot Reach",
      summary:
        "Your class protected parts of the process, but support and reporting channels were too weak. Justice is incomplete when people do not know where to seek help.",
      quote:
        "A right that people cannot reach is only a promise on paper.",
      lessons: [
        {
          title: "Access must be practical",
          body: "Students need to know who to contact, what will happen next, and how they will be protected.",
        },
        {
          title: "Silence is not neutrality",
          body: "Keeping an incident quiet may protect reputation while leaving affected people alone.",
        },
        {
          title: "Justice includes services",
          body: "Counseling, reporting, victim support, and clear information are part of equal access to justice.",
        },
      ],
      prompt:
        "If a student feels unsafe tomorrow, what exact path should they be able to use without fear of being ignored?",
    };
  }

  if (scores.dueProcess < 50) {
    return {
      title: "A Verdict Without Enough Process",
      summary:
        "Your class wanted accountability, but some choices weakened evidence, rights, and careful judgment. Rule of law needs discipline when the case is painful.",
      quote:
        "A painful case is exactly when due process matters most, because the pressure to skip it is strongest.",
      lessons: [
        {
          title: "Due process is not sympathy",
          body: "Protecting legal rights does not deny harm. It makes accountability more legitimate.",
        },
        {
          title: "Evidence separates roles",
          body: "Witnesses, classmates, schools, police, and courts each have different responsibilities.",
        },
        {
          title: "Proportionality is a safeguard",
          body: "Punishment must respond to responsibility, risk, age, and law rather than only public emotion.",
        },
      ],
      prompt:
        "How can a class show support for victims while still refusing to become the investigator, prosecutor, and judge?",
    };
  }

  return {
    title: "A Difficult Balance",
    summary:
      "Your class saw that justice must hold several truths at once: harm matters, rights matter, facts matter, and institutions must be reachable.",
    quote:
      "Justice is strongest when it can hear pain clearly and still answer through law.",
    lessons: [
      {
        title: "No single value is enough",
        body: "Safety, accountability, victim support, rehabilitation, and rights all shape a fair response.",
      },
      {
        title: "Institutions need trust",
        body: "People use official channels when those channels are visible, responsive, and transparent.",
      },
      {
        title: "The class has a role",
        body: "Students can reduce harm by reporting early, refusing rumors, and supporting people who seek help.",
      },
    ],
    prompt:
      "Which value should your class protect first in a crisis: safety, truth, support, or restraint?",
  };
}

function renderEnding() {
  const ending = getEnding();
  const reviewChoice = getReviewChoice();
  endingTitle.textContent = ending.title;
  endingSummary.textContent = `${ending.summary} Final class principle: ${selectedPrinciple}`;
  endingMeters.innerHTML = "";
  learningCards.innerHTML = "";
  discussionPrompt.textContent = ending.prompt;
  closingQuote.textContent = ending.quote;

  Object.entries(scores).forEach(([key, value]) => {
    const stat = document.createElement("div");
    stat.className = "ending-stat";
    stat.innerHTML = `<span>${scoreLabels[key]}</span><strong>${Math.round(value)}</strong>`;
    endingMeters.append(stat);
  });

  ending.lessons.forEach((lesson) => {
    const card = document.createElement("article");
    const title = document.createElement("strong");
    const body = document.createElement("p");

    card.className = "learning-card";
    title.textContent = lesson.title;
    body.textContent = lesson.body;
    card.append(title, body);
    learningCards.append(card);
  });

  if (reviewChoice) {
    const reviewCard = document.createElement("article");
    const reviewTitle = document.createElement("strong");
    const reviewBody = document.createElement("p");

    reviewCard.className = "learning-card";
    reviewTitle.textContent = "Decision to revisit";
    reviewBody.textContent = `In "${reviewChoice.scene}", your class chose: "${reviewChoice.choice}" Discuss what value this protected and what risk it created.`;
    reviewCard.append(reviewTitle, reviewBody);
    learningCards.append(reviewCard);
  }

  showScreen(endingScreen);
  playAgainButton.focus();
}

function getReviewChoice() {
  if (choiceHistory.length === 0) {
    return null;
  }

  return choiceHistory.reduce((current, next) => {
    const currentRisk =
      Math.max(0, current.effects.pressure || 0) +
      Math.max(0, -(current.effects.dueProcess || 0)) +
      Math.max(0, -(current.effects.access || 0)) +
      Math.max(0, -(current.effects.trust || 0));
    const nextRisk =
      Math.max(0, next.effects.pressure || 0) +
      Math.max(0, -(next.effects.dueProcess || 0)) +
      Math.max(0, -(next.effects.access || 0)) +
      Math.max(0, -(next.effects.trust || 0));

    return nextRisk > currentRisk ? next : current;
  });
}

function startGame() {
  currentSceneIndex = 0;
  scores = { ...initialScores };
  selectedPrinciple = "";
  choiceHistory = [];
  pendingChoice = null;
  showScreen(gameScreen);
  renderScene();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
continueButton.addEventListener("click", continueGame);

document.addEventListener("keydown", (event) => {
  const gameIsVisible = !gameScreen.classList.contains("is-hidden");
  const resultIsVisible = !resultPanel.classList.contains("is-hidden");

  if (event.key === "Enter" && gameIsVisible && resultIsVisible) {
    continueGame();
  }
});
