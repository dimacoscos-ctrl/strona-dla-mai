
const slides = [
{
title: "Pierwiastki chemiczne w organizmie",
content: `
<p>Organizmy żywe składają się z pierwiastków chemicznych.</p>
<ul>
<li><strong>Makroelementy</strong> — występują w ilości większej niż 0,01% suchej masy.</li>
<li><strong>Mikroelementy</strong> — występują w ilości mniejszej niż 0,01% suchej masy.</li>
</ul>
<p class="highlight"><strong>Sucha masa</strong> to masa organizmu po usunięciu z niego wody.</p>`
},
{
title: "Makroelementy i pierwiastki biogenne",
content: `
<p><strong>Makroelementy:</strong> C, H, O, N, P, S, Ca, Mg, K, Na, Cl.</p>
<p><strong>Pierwiastki biogenne:</strong> C, H, O, N, P, S. Są niezbędne do budowy związków organicznych.</p>
<ul>
<li><strong>C — węgiel:</strong> buduje związki organiczne.</li>
<li><strong>H — wodór:</strong> składnik wody i związków organicznych.</li>
<li><strong>O — tlen:</strong> składnik wody i związków organicznych.</li>
<li><strong>N — azot:</strong> buduje białka i kwasy nukleinowe.</li>
<li><strong>P — fosfor:</strong> składnik DNA, RNA, ATP i kości.</li>
<li><strong>S — siarka:</strong> składnik niektórych aminokwasów i białek.</li>
<li><strong>Ca — wapń:</strong> buduje kości i zęby, uczestniczy w krzepnięciu krwi.</li>
<li><strong>Mg — magnez:</strong> składnik chlorofilu, ważny dla enzymów.</li>
<li><strong>K — potas i Na — sód:</strong> przewodzenie impulsów nerwowych.</li>
<li><strong>Cl — chlor:</strong> składnik kwasu solnego w żołądku, pomaga utrzymać równowagę wodną.</li>
</ul>`
},
{
title: "Mikroelementy",
content: `
<p>Są potrzebne w małych ilościach, ale ich brak może zaburzać pracę organizmu.</p>
<ul>
<li><strong>Jod (I)</strong> — produkcja hormonów tarczycy.</li>
<li><strong>Fluor (F)</strong> — wzmacnia szkliwo zębów.</li>
<li><strong>Żelazo (Fe)</strong> — składnik hemoglobiny transportującej tlen we krwi.</li>
<li><strong>Cynk (Zn)</strong> — wspiera odporność, gojenie ran i działanie enzymów.</li>
</ul>`
},
{
title: "Związki nieorganiczne i organiczne",
content: `
<p><strong>Związki nieorganiczne:</strong></p>
<ul><li>Woda.</li><li>Sole mineralne.</li></ul>
<p><strong>Związki organiczne:</strong></p>
<ul>
<li>Węglowodany.</li><li>Białka.</li><li>Tłuszcze.</li><li>Kwasy nukleinowe.</li>
</ul>
<p class="highlight">Związki organiczne zazwyczaj zawierają węgiel i wodór.</p>`
},
{
title: "Budowa cząsteczki wody",
content: `
<p><strong>Wzór wody: H₂O.</strong> Jedna cząsteczka składa się z dwóch atomów wodoru i jednego atomu tlenu.</p>
<ul>
<li>Występują wiązania kowalencyjne spolaryzowane.</li>
<li>Tlen silniej przyciąga elektrony niż wodór.</li>
<li>Przy tlenie jest częściowy ładunek ujemny (δ−), a przy wodorach dodatni (δ+).</li>
</ul>
<p class="highlight"><strong>Dipol</strong> to cząsteczka mająca dwa bieguny o przeciwnych ładunkach. Woda jest dipolem z powodu nierównomiernego rozkładu ładunków.</p>`
},
{
title: "Wiązania wodorowe",
content: `
<p>To słabe przyciąganie między cząsteczkami wody. Powstaje między częściowo dodatnim atomem wodoru jednej cząsteczki a częściowo ujemnym atomem tlenu drugiej.</p>
<p><strong>Znaczenie:</strong></p>
<ul>
<li>Odpowiadają za wysoką temperaturę wrzenia wody.</li>
<li>Wpływają na napięcie powierzchniowe.</li>
<li>Pomagają utrzymać wodę w stanie ciekłym w temperaturach odpowiednich dla życia.</li>
</ul>`
},
{
title: "Właściwości wody i ich znaczenie",
content: `
<ul>
<li><strong>Dobry rozpuszczalnik</strong> — umożliwia transport substancji w organizmie.</li>
<li><strong>Duże ciepło właściwe</strong> — woda wolno się nagrzewa i ochładza.</li>
<li><strong>Duże ciepło parowania</strong> — parowanie potu ochładza ciało.</li>
<li><strong>Wysokie napięcie powierzchniowe</strong> — niektóre drobne organizmy utrzymują się na powierzchni.</li>
<li><strong>Kohezja</strong> — cząsteczki wody przyciągają się wzajemnie.</li>
<li><strong>Adhezja</strong> — woda przyciąga się do innych powierzchni, pomagając w transporcie wody w roślinach.</li>
<li><strong>Anomalia gęstości</strong> — lód ma mniejszą gęstość niż ciekła woda, więc unosi się na powierzchni i izoluje wodę pod spodem.</li>
<li><strong>Przezroczystość</strong> — umożliwia przenikanie światła potrzebnego do fotosyntezy.</li>
</ul>`
},
{
title: "Węglowodany — podstawowe informacje",
content: `
<p>Węglowodany, czyli cukry, są zbudowane z trzech pierwiastków: <strong>C — węgla, H — wodoru i O — tlenu.</strong></p>
<p><strong>Funkcje:</strong></p>
<ul>
<li>Energetyczna — dostarczają energii.</li>
<li>Zapasowa — magazynują energię.</li>
<li>Budulcowa — tworzą elementy struktur komórkowych.</li>
</ul>
<p><strong>Podział:</strong></p>
<ol>
<li>Cukry proste — glukoza, fruktoza.</li>
<li>Dwucukry — sacharoza, maltoza, laktoza.</li>
<li>Wielocukry — skrobia, glikogen, celuloza, chityna.</li>
</ol>`
},
{
title: "Cukry proste",
content: `
<p><strong>Glukoza</strong></p>
<ul>
<li>Wzór sumaryczny: C₆H₁₂O₆.</li>
<li>Jest aldozą, czyli polihydroksyaldehydem.</li>
<li>Stanowi ważne źródło energii dla komórek.</li>
<li>Powstaje między innymi podczas fotosyntezy.</li>
</ul>
<p><strong>Fruktoza</strong></p>
<ul>
<li>Wzór sumaryczny: C₆H₁₂O₆.</li>
<li>Jest ketozą, czyli polihydroksyketonem.</li>
<li>Występuje między innymi w owocach i miodzie.</li>
</ul>
<p class="highlight">Zapamiętaj: glukoza = aldoza, fruktoza = ketoza.</p>`
},
{
title: "Dwucukry",
content: `
<p>Dwucukry powstają z połączenia dwóch cząsteczek cukrów prostych. Podczas ich tworzenia powstaje wiązanie O-glikozydowe.</p>
<ul>
<li><strong>Sacharoza = glukoza + fruktoza.</strong> Występuje w burakach cukrowych i trzcinie cukrowej. Jest cukrem transportowym roślin.</li>
<li><strong>Maltoza = glukoza + glukoza.</strong> Powstaje podczas rozkładu skrobi, np. w kiełkujących ziarnach. Jest źródłem energii.</li>
<li><strong>Laktoza = glukoza + galaktoza.</strong> Występuje w mleku ssaków i jest źródłem energii.</li>
</ul>`
},
{
title: "Wiązania O-glikozydowe",
content: `
<p>Wiązanie O-glikozydowe łączy cząsteczki cukrów.</p>
<ul>
<li><strong>α-1,4</strong> — występuje w maltozie oraz łańcuchach skrobi i glikogenu.</li>
<li><strong>β-1,4</strong> — występuje w celobiozie, będącej fragmentem budulcowym celulozy, oraz w chitynie.</li>
</ul>
<p>Liczby 1,4 oznaczają atomy węgla uczestniczące w połączeniu.</p>
<p class="highlight">Ważne: sacharoza ma wiązanie α-1,2-β, a laktoza — β-1,4.</p>`
},
{
title: "Wielocukry — skrobia i glikogen",
content: `
<p><strong>Skrobia</strong></p>
<ul>
<li>Zbudowana z wielu cząsteczek glukozy.</li>
<li>Materiał zapasowy roślin.</li>
<li>Występuje np. w ziemniakach, ziarnach zbóż i nasionach.</li>
<li>Zawiera łańcuchy proste i rozgałęzione.</li>
<li>Występują w niej głównie wiązania α-1,4 i α-1,6.</li>
</ul>
<p><strong>Glikogen</strong></p>
<ul>
<li>Zbudowany z wielu cząsteczek glukozy.</li>
<li>Materiał zapasowy zwierząt i grzybów.</li>
<li>U zwierząt występuje głównie w wątrobie i mięśniach.</li>
<li>Ma silnie rozgałęzioną budowę.</li>
<li>Występują w nim wiązania α-1,4 i α-1,6.</li>
</ul>`
},
{
title: "Wielocukry — celuloza i chityna",
content: `
<p><strong>Celuloza</strong></p>
<ul>
<li>Zbudowana z cząsteczek glukozy.</li>
<li>Zawiera wiązania β-1,4.</li>
<li>Tworzy ściany komórkowe roślin.</li>
<li>Ma nierozgałęzione łańcuchy wzmacniane wiązaniami wodorowymi.</li>
</ul>
<p><strong>Chityna</strong></p>
<ul>
<li>Zbudowana z cząsteczek N-acetyloglukozaminy.</li>
<li>Zawiera wiązania β-1,4.</li>
<li>Buduje ściany komórkowe grzybów i pancerze stawonogów.</li>
<li>Ma nierozgałęzione łańcuchy, które mogą być wzmacniane wiązaniami wodorowymi.</li>
</ul>`
},
{
title: "Jak rozpoznawać wielocukry?",
content: `
<ul>
<li><strong>Skrobia</strong> — łańcuchy glukozy, część prosta, część rozgałęziona.</li>
<li><strong>Glikogen</strong> — bardzo silnie rozgałęziony łańcuch glukozy.</li>
<li><strong>Celuloza</strong> — długie, nierozgałęzione łańcuchy glukozy połączone wiązaniami β-1,4.</li>
<li><strong>Chityna</strong> — nierozgałęzione łańcuchy N-acetyloglukozaminy połączone wiązaniami β-1,4.</li>
</ul>
<p class="highlight"><strong>Skrobia i glikogen</strong> — funkcja zapasowa.<br><strong>Celuloza i chityna</strong> — funkcja budulcowa.</p>`
},
{
title: "Reakcje charakterystyczne dla cukrów prostych",
content: `
<p><strong>Próba Trommera</strong></p>
<ul>
<li>Do próbki dodaje się wodorotlenek miedzi(II), a następnie ogrzewa.</li>
<li>Wynik pozytywny: ceglastoczerwony osad tlenku miedzi(I).</li>
<li>Wykrywa cukry redukujące, np. glukozę.</li>
</ul>
<p><strong>Próba z odczynnikiem Tollensa</strong></p>
<ul>
<li>Po ogrzaniu próbki może powstać srebrne lustro na ściankach naczynia.</li>
<li>To charakterystyczna reakcja aldehydów, w tym glukozy.</li>
</ul>
<p class="highlight">Glukoza daje pozytywny wynik obu prób.</p>`
},
{
title: "Reakcja charakterystyczna dla skrobi",
content: `
<p><strong>Próba jodowa</strong></p>
<ul>
<li>Do próbki dodaje się płyn Lugola.</li>
<li>Wynik pozytywny: granatowe lub ciemnoniebieskie zabarwienie.</li>
<li>Po ogrzaniu zabarwienie zanika, a po ochłodzeniu może powrócić.</li>
</ul>
<p class="highlight">Skrobia + płyn Lugola = granatowe zabarwienie.</p>`
},
{
title: "Powtórka przed sprawdzianem 💗",
content: `
<ol>
<li>Makroelementy występują w ilości większej niż 0,01% suchej masy, a mikroelementy — mniejszej.</li>
<li>Pierwiastki biogenne to C, H, O, N, P, S.</li>
<li>Woda jest dipolem, a między jej cząsteczkami występują wiązania wodorowe.</li>
<li>Glukoza jest aldozą, a fruktoza ketozą.</li>
<li>Sacharoza = glukoza + fruktoza.</li>
<li>Maltoza = glukoza + glukoza.</li>
<li>Laktoza = glukoza + galaktoza.</li>
<li>Skrobia i glikogen magazynują energię.</li>
<li>Celuloza buduje ściany komórkowe roślin, a chityna — ściany grzybów i pancerze stawonogów.</li>
<li>Glukoza daje ceglastoczerwony osad w próbie Trommera, a skrobia z płynem Lugola — granatowe zabarwienie.</li>
</ol>
<p class="highlight">Maja, powodzenia! Najważniejsze to rozumieć, a nie tylko wkuwać. ❤️</p>`
}
];

const quiz = [
    {
        question: "Co łączy cząsteczki cukrów w dwucukrach?",
        options: ["Wiązanie O-glikozydowe", "Wiązanie wodorowe", "Wiązanie peptydowe", "Wiązanie jonowe"],
        answer: 0
    },
    {
        question: "Który cukier jest aldozą?",
        options: ["Fruktoza", "Glukoza", "Laktoza", "Sacharoza"],
        answer: 1
    },
    {
        question: "Jakie zabarwienie daje skrobia z płynem Lugola?",
        options: ["Zielone", "Ceglastoczerwone", "Granatowe", "Srebrne lustro"],
        answer: 2
    },
    {
        question: "Który wielocukier jest materiałem zapasowym zwierząt?",
        options: ["Celuloza", "Chityna", "Skrobia", "Glikogen"],
        answer: 3
    },
    {
        question: "Z czego składa się cząsteczka wody?",
        options: [
            "Z dwóch atomów tlenu",
            "Z jednego wodoru i dwóch tlenów",
            "Z dwóch atomów wodoru i jednego tlenu",
            "Z jednego węgla i dwóch wodorów"
        ],
        answer: 2
    },
    {
        question: "Jakie są pierwiastki biogenne?",
        options: ["C, H, O, N, P, S", "Ca, Mg, K, Na, Cl", "Fe, Zn, I, F", "C, Ca, Fe, Zn"],
        answer: 0
    },
    {
        question: "Co buduje ściany komórkowe roślin?",
        options: ["Glikogen", "Celuloza", "Laktoza", "Fruktoza"],
        answer: 1
    }
];

let currentSlide = 0;
let currentQuiz = 0;
let answered = false;

const slideNav = document.getElementById("slideNav");
const slideTitle = document.getElementById("slideTitle");
const slideContent = document.getElementById("slideContent");
const slideNumber = document.getElementById("slideNumber");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const completedSlides = new Set();

function createNavigation() {
    slideNav.innerHTML = "";

    slides.forEach((slide, index) => {
        const button = document.createElement("button");

        button.className = "nav-dot";
        button.textContent = index + 1;
        button.title = slide.title;

        if (index === currentSlide) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            showSlide(index);
        });

        slideNav.appendChild(button);
    });
}

function showSlide(index) {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));

    const slide = slides[currentSlide];

    slideTitle.textContent = slide.title;
    slideContent.innerHTML = slide.content;
    slideNumber.textContent = `SLAJD ${currentSlide + 1} Z ${slides.length}`;

    completedSlides.add(currentSlide);

    progressText.textContent =
        `${completedSlides.size} / ${slides.length}`;

    progressBar.style.width =
        `${completedSlides.size / slides.length * 100}%`;

    document.getElementById("prevBtn").disabled =
        currentSlide === 0;

    document.getElementById("nextBtn").textContent =
        currentSlide === slides.length - 1
            ? "Wróć do początku ↑"
            : "Następny →";

    createNavigation();

    const card = document.getElementById("slideCard");

    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "appear 0.35s ease";
}

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("lesson").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("prevBtn").addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentSlide === slides.length - 1) {
        showSlide(0);
    } else {
        showSlide(currentSlide + 1);
    }
});

function showQuiz(index) {
    currentQuiz = index % quiz.length;
    answered = false;

    const question = quiz[currentQuiz];

    document.getElementById("quizNumber").textContent =
        `PYTANIE ${currentQuiz + 1} Z ${quiz.length}`;

    document.getElementById("quizQuestion").textContent =
        question.question;

    document.getElementById("quizFeedback").textContent = "";

    const optionsContainer = document.getElementById("quizOptions");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "quiz-option";
        button.textContent = option;

        button.addEventListener("click", () => {
            if (answered) {
                return;
            }

            answered = true;

            if (index === question.answer) {
                button.classList.add("correct");

                document.getElementById("quizFeedback").textContent =
                    "Brawo, Maja! Dobra odpowiedź! 💗";

                createHearts();
            } else {
                button.classList.add("wrong");

                optionsContainer.children[
                    question.answer
                ].classList.add("correct");

                document.getElementById("quizFeedback").textContent =
                    `Prawidłowa odpowiedź: ${question.options[question.answer]}. Dasz radę!`;
            }
        });

        optionsContainer.appendChild(button);
    });

    document.getElementById("nextQuizBtn").textContent =
        currentQuiz === quiz.length - 1
            ? "Zacznij quiz od nowa ↻"
            : "Następne pytanie →";
}

document.getElementById("nextQuizBtn").addEventListener("click", () => {
    showQuiz(currentQuiz + 1);
});

function createHearts() {
    const container = document.getElementById("hearts");

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${16 + Math.random() * 20}px`;
        heart.style.animationDuration = `${2 + Math.random() * 2}s`;

        container.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}

document.getElementById("photoInput").addEventListener("change", event => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Wybierz plik ze zdjęciem.");
        event.target.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        const photo = document.getElementById("couplePhoto");

        photo.src = reader.result;
        photo.hidden = false;

        document.getElementById("photoPlaceholder").hidden = true;

        createHearts();
    };

    reader.readAsDataURL(file);
});

showSlide(0);
showQuiz(0);
