const scenes = [
  {
    title: "The Hallway",
    phase: "Incident Report",
    section: "incident",
    speaker: "Bystander",
    sceneClass: "hallway",
    artClass: "art-hallway",
    text: "During lunch break, a student from another class is told to leave. The argument gets louder. A few classmates are watching, and someone raises a phone.",
    dialogue: [
      {
        speaker: "Bystander",
        text: "It started with one student being pushed out of the lunch line. Then people began choosing sides before anyone understood what happened.",
      },
      {
        speaker: "Witness",
        text: "Someone is filming. If this goes online first, everyone will think the video is the whole truth.",
      },
      {
        speaker: "Teacher",
        text: "Before this becomes a crowd, we need distance, names of witnesses, and a safe place for anyone who feels threatened.",
      },
    ],
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
    title: "The Support Office",
    phase: "Safety Check",
    section: "support",
    speaker: "Counselor",
    sceneClass: "classroom",
    artClass: "art-classroom",
    text: "The next period begins, but the incident has followed students into class. One student asks to leave quietly. Another says reporting will only make things worse.",
    dialogue: [
      {
        speaker: "Affected Student",
        text: "I do not want everyone asking me what happened. I just want to know if I can go somewhere safe without starting more rumors.",
      },
      {
        speaker: "Counselor",
        text: "A report does not have to be a public performance. Support can start with privacy, safety planning, and clear information.",
      },
      {
        speaker: "Classmate",
        text: "But if no one says anything, people will think the school is hiding it again.",
      },
    ],
    choices: [
      {
        label: "Keep the student in class so the rumor does not grow.",
        result:
          "The room looks normal, but the affected student has no real support. Other students learn that quiet is valued more than safety.",
        reflection:
          "Access to justice begins with reachable support, not only formal punishment later.",
        effects: { dueProcess: -4, access: -15, trust: -12, pressure: 5 },
      },
      {
        label: "Let the counselor meet privately with the student now.",
        result:
          "The class does not get all the details, but the student gets a safer route to help. The school can still document what happened through proper channels.",
        reflection:
          "A fair response protects privacy while making support and reporting possible.",
        effects: { dueProcess: 8, access: 16, trust: 12, pressure: -9 },
      },
      {
        label: "Ask the student to explain everything to the class.",
        result:
          "Some classmates call it transparency, but the student is put under pressure before they have chosen what to share or report.",
        reflection:
          "Victim support is weakened when the need for public explanation overrides safety and consent.",
        effects: { dueProcess: -8, access: -10, trust: -8, pressure: 12 },
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
    dialogue: [
      {
        speaker: "Classmate",
        text: "I saw a screenshot that names the student who started it. People are saying we should repost it before it disappears.",
      },
      {
        speaker: "Student Admin",
        text: "The chat has witnesses, guesses, jokes, and private details all mixed together. No one can tell what is evidence anymore.",
      },
      {
        speaker: "Teacher",
        text: "You can preserve information without exposing minors or turning the chat into a punishment system.",
      },
    ],
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
    title: "The Witness Room",
    phase: "Witness Notes",
    section: "witness",
    speaker: "Witness",
    sceneClass: "investigation",
    artClass: "art-investigation",
    text: "Several students saw parts of the incident, but their accounts do not match perfectly. Some are afraid of being blamed by friends.",
    dialogue: [
      {
        speaker: "Witness",
        text: "I can say what I saw, but I do not want my name posted. People already decided who is guilty.",
      },
      {
        speaker: "Teacher",
        text: "A useful statement separates what you saw, what you heard later, and what you only assume.",
      },
      {
        speaker: "Counselor",
        text: "Protection and accountability both matter. The process has to reduce retaliation while keeping records usable.",
      },
    ],
    choices: [
      {
        label: "Let witnesses submit private statements through staff.",
        result:
          "Students are more willing to report. The school can compare accounts, protect names where appropriate, and keep a clearer record.",
        reflection:
          "Trust grows when people can participate without being exposed to retaliation.",
        effects: { dueProcess: 14, access: 12, trust: 12, pressure: -8 },
      },
      {
        label: "Pressure witnesses to identify themselves in the chat.",
        result:
          "Some students speak loudly, but others go silent. The record becomes shaped by who can handle public pressure.",
        reflection:
          "Witness participation is not equal when safety depends on popularity or courage.",
        effects: { dueProcess: -12, access: -9, trust: -10, pressure: 14 },
      },
      {
        label: "Ignore witness differences and follow the first story.",
        result:
          "The class gets a simple story, but the investigation loses details that could protect both affected students and accused students.",
        reflection:
          "Due process requires patience with complexity, especially when first reports are incomplete.",
        effects: { dueProcess: -15, access: -4, trust: -9, pressure: 8 },
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
    dialogue: [
      {
        speaker: "Teacher",
        text: "We have statements, screenshots, and several conflicting claims. The next step cannot be only what feels satisfying.",
      },
      {
        speaker: "Parent",
        text: "Families need to know whether students are safe tomorrow. Silence makes everyone imagine the worst.",
      },
      {
        speaker: "School Lead",
        text: "We can share the process, safety measures, and support channels without publishing minors' identities or unfinished findings.",
      },
    ],
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
    title: "The Risk Review",
    phase: "System Record",
    section: "risk",
    speaker: "School Lead",
    sceneClass: "investigation",
    artClass: "art-investigation",
    text: "A confidential review shows warning signs from the past. The students involved had received earlier interventions, but classmates do not know whether any safety plan exists now.",
    dialogue: [
      {
        speaker: "School Lead",
        text: "The record shows earlier interventions and repeated warning signs. We cannot publish a minor's file, but we also cannot pretend the risk never existed.",
      },
      {
        speaker: "Parent",
        text: "If the system already knew there was risk, ordinary students should not be the ones carrying that risk without protection.",
      },
      {
        speaker: "Youth Worker",
        text: "A fresh start matters, but it needs supervision, review, and a safety plan. Reintegration without risk management is not fair to anyone.",
      },
    ],
    choices: [
      {
        label: "Ignore the past record because everyone deserves a fresh start.",
        result:
          "The decision protects the student's chance to return, but no one checks whether the environment is safe. Other students are asked to trust a system that has not explained its safeguards.",
        reflection:
          "SDG 16 requires institutions to protect rights while also managing known risks before harm becomes irreversible.",
        effects: { dueProcess: 3, access: -10, trust: -16, pressure: 5 },
      },
      {
        label: "Publish the student's past record so everyone can avoid them.",
        result:
          "Some students feel safer for a moment, but the file spreads beyond context. Privacy, rehabilitation, and fair procedure are damaged by public exposure.",
        reflection:
          "Accountability cannot become public labeling. Risk information should guide protection, not online punishment.",
        effects: { dueProcess: -14, access: -4, trust: -9, pressure: 16 },
      },
      {
        label: "Require a confidential risk plan with school safety measures and review.",
        result:
          "The school does not reveal private records, but it sets supervision, contact points, protection steps, and scheduled review. Safety becomes an institutional duty, not a rumor.",
        reflection:
          "Rule of law is not passivity. A fair system can protect privacy, support reintegration, and still manage public safety.",
        effects: { dueProcess: 13, access: 13, trust: 18, pressure: -9 },
      },
    ],
  },
  {
    title: "The Family Meeting",
    phase: "Community Briefing",
    section: "family",
    speaker: "Parent",
    sceneClass: "courthouse",
    artClass: "art-courthouse",
    text: "Families arrive with different fears. Some want immediate punishment. Others worry their children will be named online even if they were only nearby.",
    dialogue: [
      {
        speaker: "Family Rep",
        text: "The harmed student needs updates, protection, and support. Procedure should not feel like abandonment.",
      },
      {
        speaker: "School Lead",
        text: "A responsible briefing can name what steps are happening, what support exists, and what details cannot be shared yet.",
      },
    ],
    choices: [
      {
        label: "Share a process update and support contacts with families.",
        result:
          "Families do not receive every detail, but they know what has been done, where to report concerns, and how affected students can get help.",
        reflection:
          "Transparent process can build trust without turning private evidence into public content.",
        effects: { dueProcess: 12, access: 14, trust: 15, pressure: -9 },
      },
      {
        label: "Release names so parents feel the school is decisive.",
        result:
          "The update spreads fast. Some parents feel reassured, but minors and witnesses are exposed before the record is complete.",
        reflection:
          "Public naming can feel like action while damaging privacy, evidence, and later accountability.",
        effects: { dueProcess: -14, access: -5, trust: -12, pressure: 15 },
      },
      {
        label: "Say nothing until every investigation step is finished.",
        result:
          "The school avoids mistakes, but the silence leaves families guessing and students unsure how to seek help.",
        reflection:
          "Confidentiality cannot become an excuse for making justice unreachable.",
        effects: { dueProcess: 4, access: -13, trust: -16, pressure: 7 },
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
    dialogue: [
      {
        speaker: "Court Narrator",
        text: "By the time the case reaches court, public opinion has already become its own record, but the judge must work from law and evidence.",
      },
      {
        speaker: "Family Rep",
        text: "The harm is not abstract. A system that protects young offenders' rights must also show victims that their safety, grief, and information needs matter.",
      },
      {
        speaker: "Youth Worker",
        text: "The accused are minors. Rehabilitation matters, but it has to come with accountability, risk review, and a realistic plan for preventing future harm.",
      },
      {
        speaker: "Court Narrator",
        text: "The hard question is not whether harm matters. It is how a lawful system responds without becoming revenge.",
      },
    ],
    choices: [
      {
        label: "Say justice means the maximum punishment possible.",
        result:
          "The answer recognizes how serious the harm is, but it risks treating proportionality and youth justice as obstacles instead of legal duties.",
        reflection:
          "A lawful sentence must answer harm without letting anger replace evidence, age, responsibility, and proportionality.",
        effects: { dueProcess: -10, access: 3, trust: -6, pressure: 14 },
      },
      {
        label: "Say rehabilitation is the only thing that matters.",
        result:
          "The answer protects the idea that young people can change, but it makes victims and ordinary students feel that risk and accountability have disappeared.",
        reflection:
          "Protection cannot mean impunity. Equal justice must include the accused, victims, families, and public safety.",
        effects: { dueProcess: 4, access: -11, trust: -14, pressure: 4 },
      },
      {
        label: "Balance sentence, risk assessment, victim support, and post-release review.",
        result:
          "The discussion becomes harder, but more complete. The system must judge responsibility, support victims, reduce future risk, and review what happens after custody or supervision.",
        reflection:
          "Rule of law is strongest when it can hold pain, rights, evidence, proportionality, and safety together.",
        effects: { dueProcess: 16, access: 14, trust: 17, pressure: -8 },
      },
    ],
  },
  {
    title: "The Community Forum",
    phase: "Public Response",
    section: "resolution",
    speaker: "Student Panel",
    sceneClass: "classroom",
    artClass: "art-classroom",
    text: "After the hearing, the class holds a forum about what students should do differently next time. The goal is not to relive the case, but to build a safer process.",
    dialogue: [
      {
        speaker: "Counselor",
        text: "A prevention plan needs more than slogans. Students need routes to help, bystander habits, and limits on online harm.",
      },
      {
        speaker: "Teacher",
        text: "Your final principle should be something a class can actually practice under pressure.",
      },
    ],
    choices: [
      {
        label: "Create a class protocol for reporting and support.",
        result:
          "The class turns the case into a practical plan: who to contact, how to preserve information, and how to protect affected students.",
        reflection:
          "Equal access improves when help is visible before the next crisis begins.",
        effects: { dueProcess: 9, access: 16, trust: 14, pressure: -10 },
      },
      {
        label: "Focus only on warning students not to get involved.",
        result:
          "The message reduces some risk, but it also teaches students to step back when someone may need help.",
        reflection:
          "Safety is not the same as silence. A community needs responsible action, not avoidance.",
        effects: { dueProcess: 3, access: -10, trust: -8, pressure: -3 },
      },
      {
        label: "Promise to expose future incidents immediately online.",
        result:
          "The class sounds determined, but the plan repeats the same risk: public pressure before evidence, privacy, and support.",
        reflection:
          "Public attention can reveal harm, but it cannot replace reporting channels or legal process.",
        effects: { dueProcess: -12, access: -6, trust: -10, pressure: 13 },
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
    dialogue: [
      {
        speaker: "Affected Student",
        text: "Support mattered most when people stopped treating my story like content.",
      },
      {
        speaker: "Teacher",
        text: "Choose the principle you want the class to remember when anger, fear, and pressure arrive at the same time.",
      },
    ],
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
  trust: "Institutional Accountability",
  pressure: "Emotional Pressure",
};

let currentSceneIndex = 0;
let scores = { ...initialScores };
let selectedPrinciple = "";
let choiceHistory = [];
let pendingChoice = null;
let dialogueLineIndex = 0;
let dialogueComplete = false;

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
const modeChip = document.querySelector("#modeChip");
const dialogueProgress = document.querySelector("#dialogueProgress");
const nextDialogueButton = document.querySelector("#nextDialogueButton");
const decisionHeader = document.querySelector("#decisionHeader");
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

function getDialogueLines(scene) {
  if (scene.dialogue && scene.dialogue.length > 0) {
    return scene.dialogue;
  }

  return [{ speaker: scene.speaker, text: scene.text }];
}

function renderDialogueLine() {
  const scene = scenes[currentSceneIndex];
  const dialogue = getDialogueLines(scene);
  const line = dialogue[dialogueLineIndex];

  speakerName.textContent = line.speaker;
  sceneText.textContent = line.text;
  modeChip.textContent = `Dialogue ${dialogueLineIndex + 1} / ${dialogue.length}`;
  dialogueProgress.textContent = `Line ${dialogueLineIndex + 1} of ${dialogue.length}`;
  nextDialogueButton.textContent =
    dialogueLineIndex === dialogue.length - 1 ? "Show Choices" : "Next";
}

function showDecisionPoint() {
  dialogueComplete = true;
  decisionHeader.classList.remove("is-hidden");
  choices.classList.remove("is-hidden");
  nextDialogueButton.classList.add("is-hidden");
  modeChip.textContent = "Decision Point";
  dialogueProgress.textContent = "Choose one action to record.";
  choices.querySelector("button")?.focus();
}

function advanceDialogue() {
  if (dialogueComplete || gameScreen.classList.contains("is-hidden")) {
    return;
  }

  const dialogue = getDialogueLines(scenes[currentSceneIndex]);

  if (dialogueLineIndex < dialogue.length - 1) {
    dialogueLineIndex += 1;
    renderDialogueLine();
    return;
  }

  showDecisionPoint();
}

function renderScene() {
  const scene = scenes[currentSceneIndex];
  sceneKicker.textContent = `Scene ${currentSceneIndex + 1} of ${scenes.length}`;
  sceneTitle.textContent = scene.title;
  sectionLabel.textContent = scene.phase;
  scenePhase.textContent = scene.phase;
  gameScreen.dataset.section = scene.section;
  stage.className = `stage has-art ${scene.sceneClass} ${scene.artClass}`;
  resultPanel.classList.add("is-hidden");
  decisionHeader.classList.add("is-hidden");
  choices.classList.add("is-hidden");
  nextDialogueButton.classList.remove("is-hidden");
  choices.innerHTML = "";
  pendingChoice = null;
  dialogueLineIndex = 0;
  dialogueComplete = false;

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.innerHTML = `<span>Choice ${index + 1}</span>${choice.label}`;
    button.addEventListener("click", () => selectChoice(choice, index));
    choices.append(button);
  });

  renderDialogueLine();
  updateMeters();
  window.scrollTo(0, 0);
}

function selectChoice(choice, index) {
  if (!dialogueComplete) {
    return;
  }

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
        "Your class kept anger from replacing the process. The result protects reporting, evidence, victim support, institutional risk management, and the rights that make justice credible.",
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
        {
          title: "Risk management protects everyone",
          body: "Known warning signs require confidential review, safety planning, supervision, and follow-up instead of silence or public exposure.",
        },
      ],
      prompt:
        "Which part of the process would be hardest to defend in public: protecting rights, waiting for evidence, managing risk confidentially, or avoiding online blame?",
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
        {
          title: "Public files are not safety plans",
          body: "Publishing a minor's record may feel protective, but institutions still need lawful risk assessment and concrete protection steps.",
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
        body: "People use official channels when those channels are visible, responsive, transparent, and willing to manage known risks.",
      },
      {
        title: "The class has a role",
        body: "Students can reduce harm by reporting early, refusing rumors, and supporting people who seek help.",
      },
    ],
    prompt:
      "Which value should your class protect first in a crisis: safety, truth, support, risk management, or restraint?",
  };
}

function renderEnding() {
  const ending = getEnding();
  const reviewChoice = getReviewChoice();
  const justicePattern = getJusticePattern();
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

  [
    {
      title: "SDG 16.3 checklist",
      body: "Rule of law needs evidence and procedure; victim support needs safety, information, and services; risk management needs review, supervision, and follow-up.",
    },
    {
      title: "Equal access includes ordinary students",
      body: "Students also need access to safety, reporting channels, and institutions that act before harm becomes irreversible.",
    },
    {
      title: "Protection cannot mean impunity",
      body: "A youth justice system can protect young offenders' rights while still requiring accountability, victim support, risk assessment, and public safety.",
    },
  ].forEach((lesson) => {
    const card = document.createElement("article");
    const title = document.createElement("strong");
    const body = document.createElement("p");

    card.className = "learning-card";
    title.textContent = lesson.title;
    body.textContent = lesson.body;
    card.append(title, body);
    learningCards.append(card);
  });

  const patternCard = document.createElement("article");
  const patternTitle = document.createElement("strong");
  const patternBody = document.createElement("p");

  patternCard.className = "learning-card";
  patternTitle.textContent = "Class justice pattern";
  patternBody.textContent = `Strongest value: ${justicePattern.strongest}. Weakest value: ${justicePattern.weakest}. ${justicePattern.pressure}`;
  patternCard.append(patternTitle, patternBody);
  learningCards.append(patternCard);

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

function getJusticePattern() {
  const justiceScores = Object.entries(scores)
    .filter(([key]) => key !== "pressure")
    .sort((a, b) => b[1] - a[1]);
  const pressure =
    scores.pressure >= 66
      ? "Emotional pressure remained high, so the class should discuss which moments made speed feel more important than fairness."
      : scores.pressure <= 45
        ? "The class kept emotional pressure from controlling the process."
        : "Emotional pressure stayed present, but it did not fully control the process.";

  return {
    strongest: scoreLabels[justiceScores[0][0]],
    weakest: scoreLabels[justiceScores[justiceScores.length - 1][0]],
    pressure,
  };
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
  dialogueLineIndex = 0;
  dialogueComplete = false;
  showScreen(gameScreen);
  renderScene();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
nextDialogueButton.addEventListener("click", advanceDialogue);
continueButton.addEventListener("click", continueGame);

document.addEventListener("keydown", (event) => {
  const gameIsVisible = !gameScreen.classList.contains("is-hidden");
  const resultIsVisible = !resultPanel.classList.contains("is-hidden");

  if (event.key === "Enter" && gameIsVisible && !resultIsVisible && !dialogueComplete) {
    advanceDialogue();
  }

  if (event.key === "Enter" && gameIsVisible && resultIsVisible) {
    continueGame();
  }
});
