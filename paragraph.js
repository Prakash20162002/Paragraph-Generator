const text = [`মহাজনের টাকার থলি"<br><br>
ভদ্রলোক টাকার থলে সহ নৌকা করে নদীর ওপারে যাচ্ছিলেন। মাঝ নদিতে হঠাৎ করে নৌকাটা ডুবে যায়। তীরে গোপাল ও তার বন্ধুবান্ধবরা দাড়িয়ে ছিল তারা অনেক কষ্টে ভদ্রলোককে তীরে টেনে তুলতে সমর্থ হয়। নাহলে স্রোতের টানে তাঁকে অক্কা পেতে হত। কিন্তু মহাজনের ভারি টাকার থলিটি বর্ষার ভরা নদীতে কোথায় তলিয়ে গেল। গোপালরা জানতে পারল না।
    ডাঙায় তোলার কিছু পর ভদ্রলোক জ্ঞান ফিরে পেয়ে গোপালদের গালাগাল করতে থাকেন। আমার নদি থেকে না তুলেযদি টাকার থলেটি তুলতে পারতেন তবে বুঝতুম একটা বাহাদুরী কাজ করেছেন। আপনারা সব অকর্মার ঢেকি, একদম অপদার্থ। এরূপ লোকদের দুচোখে দেখতে পারি না ইত্যাদি ইত্যাদি।
    এসব শুনে গোপাল বলে, আপনাকে মানুষ ভেবে জান বাঁচিয়ে মহাদোষ করে ফেলেছি তাই আমরা ঢেকি। যদি আগে জানতাম আপনি অকৃতজ্ঞ জন্তু বিশেষ–যার কাছে জানের আপনি অকৃতজ্ঞ জন্তু বিশেষ–যার কাছে জানের চেয়ে টাকার থলি বড়, তাহলে আপনার ওই মাংসের ঢিবিকে আমরা স্পর্শও করতাম না। আপনি ঢোক ঢোক লোনা জল খেয়ে টাকার টুং টুং শব্দ শুনতে শুনতে ভবপারে যাওয়ার ঢং ঢং বাদ্যি এতক্ষণ শুনতেন। এই বলে সকলে সেখান থেকে রাগ করে চলে গেল।`,

    `গোপাল ও পাওনাদার <br> <br>
গোপাল একজন লোকের কাছে কিছু টাকা ধার নিয়েছিল। সেই পাওনাদার গোপালকে পথের মাঝে পাকড়াও করে বললেন দুদিনের মধ্যে টাকা না দিলে আমি তোমার শ্রাদ্ধ করে ছেড়ে দেব বাছাধন। তখন কেমন মজা পাবে দেখবে। পাওনাদারের কথা শুনে গোপাল মুচকি হেসে বলেন, টাকা ধার দিয়ে ফেরত পাচ্ছেন না, উপরন্তু আমার শ্রাদ্ধের খরচও বহন করতে চাইছেন ? ওই কাজটা দাদা আমার ছেলেকে করতে দিন। আমার শ্রাদ্ধ করলে আমি কি স্বর্গ থেকে টাকা নিয়ে আশীর্বাদ করতে আসব নাকি বন্ধু! এই বলে মুচকি মুচকি হাসলে লাগলো।`,
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    // A click on a form submit button – initiates its submission to the server.

    e.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`;
        })
            .join(" ");
        result.innerHTML = tempText;
    }
});


const input = document.querySelector("input");
const body = document.querySelector("body");
const toggleThemeMode = () => {
    body.classList.toggle("dark");
}
input.onchange = toggleThemeMode;