import { CountUp } from "./countUp.js";
//https://inorganik.github.io/countUp.js/
[18, 20, 30, 50].forEach((val, i) => {
    new CountUp(`number${i}`, val, { enableScrollSpy: true, duration: 5 });
});

window.scrollTo({ behavior: "smooth" });
