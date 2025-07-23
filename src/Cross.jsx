import React, { useRef, useEffect, useState } from "react";

const crosswordGrid = [
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
  ["", "", "", "", "P", "R", "O", "J", "E", "C", "T", "", "", "", ""],     // 0
  ["", "", "", "", "E", "", "", "", "", "", "", "", "", "", ""],          // 1
  ["", "", "", "", "O", "", "T", "E", "A", "M", "", "", "", "", ""],      // 2
  ["", "", "", "", "P", "", "E", "", "", "", "", "", "", "", ""],         // 3
  ["", "", "", "", "L", "", "C", "", "", "", "", "", "", "", ""],         // 4
  ["P", "R", "O", "C", "E", "S", "S", "", "H", "I", "R", "I", "N", "G", ""], // 5
  ["", "", "", "", "", "T", "", "", "S", "", "", "", "", "", ""],         // 6
  ["", "", "", "", "", "R", "", "S", "C", "R", "E", "E", "N", "", ""],     // 7
  ["", "C", "A", "N", "D", "I", "D", "A", "T", "E", "", "", "", "", ""],   // 8
  ["", "", "", "", "", "T", "E", "C", "H", "N", "O", "L", "O", "G", "Y"],  // 9
  ["", "", "", "", "", "E", "", "L", "", "", "", "", "", "", ""],         //10
  ["", "R", "E", "C", "R", "U", "I", "T", "", "", "", "", "", "", ""],    //11
  ["", "M", "A", "N", "A", "G", "E", "R", "", "J", "O", "B", "S", "", ""], //12
];





const Cell = ({ letter, delay, isVisible, isHighlighted }) => {
  // Don't render anything if there's no letter
  if (!letter) return null;

  return (
    <div
      className={`
          w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12
          flex items-center justify-center 
          text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
          font-bold tracking-wide
          transition-all duration-500 ease-out
          bg-white border border-gray-300 text-gray-800 
          shadow-sm hover:shadow-md
          ${
            isHighlighted
              ? "border-orange-400 bg-orange-50 text-orange-800"
              : ""
          }
          backdrop-blur-sm rounded-sm
        `}
      style={{
        animation: isVisible
          ? `elegantReveal 0.6s ${delay}s both cubic-bezier(0.68, -0.55, 0.265, 1.55)`
          : undefined,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateZ(0)" : undefined,
      }}
    >
      <span className="relative font-bold text-gray-800 drop-shadow-sm">
        {letter}
      </span>
    </div>
  );
};

export default function CrosswordHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [highlightedWord, setHighlightedWord] = useState(null);
  const crosswordRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimationComplete(true), 3000);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (crosswordRef.current) {
      observer.observe(crosswordRef.current);
    }

    return () => {
      if (crosswordRef.current) {
        observer.unobserve(crosswordRef.current);
      }
    };
  }, []);

  // Create sophisticated staggered animation delays
  let delay = 0.2;
  const delayMap = crosswordGrid.map((row, rIdx) =>
    row.map((cell, cIdx) => {
      if (cell) {
        delay += 0.08;
        return delay;
      }
      return 0;
    })
  );

  // Define word positions and highlights
  const words = [
    {
      word: "STAFFING",
      coords: [
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
        [0, 10],
        [0, 11],
      ],
    },
    {
      word: "SOLUTIONS",
      coords: [
        [0, 4],
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
        [5, 4],
        [6, 4],
        [7, 4],
        [8, 4],
      ],
    },
    {
      word: "PEOPLE",
      coords: [
        [5, 0],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      word: "SERVICES",
      coords: [
        [8, 4],
        [8, 5],
        [8, 6],
        [8, 7],
        [8, 8],
        [8, 9],
        [8, 10],
        [8, 11],
      ],
    },
  ];

  const getHighlightedCells = (wordIndex) => {
    return wordIndex !== null ? words[wordIndex].coords : [];
  };

  const isCellHighlighted = (rIdx, cIdx) => {
    const highlightedCells = getHighlightedCells(highlightedWord);
    return highlightedCells.some(([r, c]) => r === rIdx && c === cIdx);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col items-center justify-center py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        {/* <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              CROSSWORD
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-6">
              STAFFING SOLUTIONS
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between people and opportunities
            </p>
          </div> */}

        {/* Crossword Grid */}
        <div
          ref={crosswordRef}
          className="flex items-center justify-center relative mb-4 sm:mb-6 md:mb-8"
        >
          <div
            className={`
              w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]
              p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10
              bg-[#b8b4b5] backdrop-blur-xl rounded-xl sm:rounded-2xl
              shadow-lg border border-gray-200
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <div
              className="relative inline-block w-full"
              style={{
                display: "inline-grid",
                gridTemplateColumns: `repeat(${crosswordGrid[0].length}, 1fr)`,
                gridTemplateRows: `repeat(${crosswordGrid.length}, 1fr)`,
                gap: "1px",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {crosswordGrid.map((row, rIdx) =>
                row.map((cell, cIdx) => {
                  if (!cell) return <div key={`${rIdx}-${cIdx}`} />;
                  return (
                    <Cell
                      key={`${rIdx}-${cIdx}`}
                      letter={cell}
                      delay={delayMap[rIdx][cIdx]}
                      isVisible={isVisible}
                      isHighlighted={isCellHighlighted(rIdx, cIdx)}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Word Legend */}
        {/* {animationComplete && (
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {words.map((wordData, index) => (
                <button
                  key={index}
                  className={`
                    px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300
                    text-sm sm:text-base
                    ${highlightedWord === index 
                      ? 'bg-orange-500 text-white shadow-lg scale-105' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                    }
                    border border-gray-200
                  `}
                  onMouseEnter={() => setHighlightedWord(index)}
                  onMouseLeave={() => setHighlightedWord(null)}
                  onClick={() => setHighlightedWord(highlightedWord === index ? null : index)}
                >
                  {wordData.word}
                </button>
              ))}
            </div>
          )} */}

        {/* Bottom Description */}
        {/* {animationComplete && (
            <div className="text-center">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Hover over the words below to highlight them in the crossword and discover 
                how each element interconnects to form our foundation of success.
              </p>
            </div>
          )} */}

        {/* Stats Section */}
        {/* {animationComplete && (
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">10+</div>
                <div className="text-sm sm:text-base text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Successful Placements</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Partner Companies</div>
              </div>
            </div>
          )} */}

        {/* CTA Section */}
        {/* {animationComplete && (
            <div className="mt-12 sm:mt-16 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Get Started
              </button>
            </div>
          )} */}
      </div>

      <style>{`
          @keyframes elegantReveal {
            0% { 
              opacity: 0; 
              transform: translateY(20px) scale(0.9); 
              filter: blur(3px);
            }
            60% {
              opacity: 0.9;
              transform: translateY(-2px) scale(1.05);
              filter: blur(1px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
              filter: blur(0px);
            }
          }
  
          @keyframes fadeInUp {
            0% { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
  
          .grid {
            transform-style: preserve-3d;
          }
        `}</style>
    </div>
  );
}
