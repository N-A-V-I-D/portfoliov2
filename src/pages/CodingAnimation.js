import React, { useEffect, useRef } from 'react';
import '../styles/CodingAnimation.css';

const CodeAnimation = () => {
  const codeBubbleRef = useRef();
  const highlightRef = useRef();
  const linesGroupRef = useRef();
  const lines = useRef([]);

  useEffect(() => {
    const codeBubble = codeBubbleRef.current;
    const highlight = highlightRef.current;
    const linesGroup = linesGroupRef.current;
    lines.current = Array.from(linesGroup.childNodes);

    lines.current.forEach((line, i) => {
      line.style.animationDelay = `${i * 35}ms`;
    });

    const deleteCode = () => {
      highlight.style.display = "none";
      linesGroup.style.display = "none";
      codeBubble.classList.remove("animating");
      setTimeout(startTyping, 700);
    };

    const selectAll = () => {
      highlight.style.display = "block";
      setTimeout(deleteCode, 350);
    };

    const startTyping = () => {
      linesGroup.style.display = "block";
      lines.current[lines.current.length - 1].addEventListener("animationend", selectAll);
      codeBubble.classList.add("animating");
    };

    startTyping();
  }, []);

  return (
    <svg ref={codeBubbleRef} className="code-animation" viewBox="0 0 1172 1489" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.35 0.805908H1126.35C1151.22 0.805908 1171.37 20.9049 1171.37 45.6979V1443.37C1171.37 1468.16 1151.22 1488.26 1126.35 1488.26H45.35C20.49 1488.26 0.330078 1468.16 0.330078 1443.37V45.6979C0.330078 20.9049 20.49 0.805908 45.35 0.805908Z"
        fill="#2D0140"
        />
  <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M74 76.208C74 63.391 84.57 53 97.61 53C110.65 53 121.22 63.391 121.22 76.208C121.22 89.025 110.65 99.416 97.61 99.416C84.57 99.416 74 89.025 74 76.208Z"
        fill="#CC4452"
        />
  <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M134.4 76.978C134.4 64.161 144.97 53.77 158.01 53.77C171.05 53.77 181.62 64.161 181.62 76.978C181.62 89.796 171.05 100.186 158.01 100.186C144.97 100.186 134.4 89.796 134.4 76.978Z"
        fill="#EA9A00"
        />
  <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M194.791 76.208C194.791 63.391 205.361 53 218.401 53C231.441 53 242.011 63.391 242.011 76.208C242.011 89.025 231.441 99.416 218.401 99.416C205.361 99.416 194.791 89.025 194.791 76.208Z"
        fill="#BDF971"
        />
      <g ref={linesGroupRef} className="lines">
      <path
          d="M85 216.383L713.02 213.614"
          stroke="#EA9A00"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 265.947L402.02 263.178"
          stroke="#BDF971"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 314.626L279.37 313.624"
          stroke="#EA9A00"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 364.188L271.4 363.187"
          stroke="#CC4452"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 413.751L279.37 412.749"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 512.876L386.58 511.874"
          stroke="#BDF971"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 562.438L576.09 561.437"
          stroke="#BDF971"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 612L725.37 611"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 661.56L560.82 660.56"
          stroke="#FF3B77"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 711.13L487.77 710.12"
          stroke="#EA9A00"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 760.69L612.87 759.69"
          stroke="#CC4452"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 810.25L461.37 809.25"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 859.81L728.66 858.81"
          stroke="#FF3B77"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M78 909.38L726.38 908.37"
          stroke="#BDF971"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1008.5L474.72 1007.5"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1058.06L478.41 1057.06"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1107.63L487.99 1106.62"
          stroke="#66BECB"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1157.19L824 1156.19"
          stroke="#EA9A00"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1206.75L731.7 1205.75"
          stroke="#FF3B77"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1256.31L494.2 1255.31"
          stroke="#EA9A00"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1305.88L622.21 1304.87"
          stroke="#BDF971"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1355.44L371.55 1354.44"
          stroke="#CC4452"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
    <path
          d="M85 1405L509.65 1404"
          stroke="#FF3B77"
          stroke-width="24.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
      </g>
      <path ref={highlightRef} className="select-all" opacity="0.342246" fill-rule="evenodd" clip-rule="evenodd" d="..." fill="#54E3EB" />
    </svg>
  );
};

export default CodeAnimation;