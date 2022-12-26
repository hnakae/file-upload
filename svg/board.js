const Board = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="960"
    height="960"
    viewBox="0 0 96 96"
  >
    <rect width="96" height="96" fill="#DCB35C" />
    <rect
      width="90"
      height="90"
      x="3"
      y="3"
      stroke="#000"
      stroke-width=".2"
      fill="none"
    />
    <path
      stroke="#000"
      stroke-width=".2"
      fill="none"
      d="m3,8h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90m0,5h-90m0,5h90"
    />
    <path
      stroke="#000"
      stroke-width=".2"
      fill="none"
      d="m8,3v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90m5,0v-90m5,0v90"
    />
    <path
      stroke="#000"
      stroke-width=".8"
      stroke-linecap="round"
      d="m18,78l0,0m30,0l0,0m30,0l0,0m0-30l0,0m-30,0l0,0m-30,0l0,0m0-30l0,0m30,0l0,0m30,0l0,0"
    />
  </svg>
);
export default Board;

{/* <svg id="board" width="100%" viewBox="0 0 600 600">
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="400%" height="400%">
      <feOffset result="offOut" in="SourceAlpha" dx="1" dy="1"></feOffset>{" "}
      <feGaussianBlur
        result="blurOut"
        in="offOut"
        stdDeviation="7"
      ></feGaussianBlur>{" "}
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
    </filter>
  </defs>
  <g>
    <line x1="15" y1="15" x2="15" y2="584" stroke="black"></line>
    <line x1="47" y1="15" x2="47" y2="584" stroke="black"></line>
    <line x1="78" y1="15" x2="78" y2="584" stroke="black"></line>
    <line x1="110" y1="15" x2="110" y2="584" stroke="black"></line>
    <line x1="142" y1="15" x2="142" y2="584" stroke="black"></line>
    <line x1="173" y1="15" x2="173" y2="584" stroke="black"></line>
    <line x1="205" y1="15" x2="205" y2="584" stroke="black"></line>
    <line x1="236" y1="15" x2="236" y2="584" stroke="black"></line>
    <line x1="268" y1="15" x2="268" y2="584" stroke="black"></line>
    <line x1="300" y1="15" x2="300" y2="584" stroke="black"></line>
    <line x1="331" y1="15" x2="331" y2="584" stroke="black"></line>
    <line x1="363" y1="15" x2="363" y2="584" stroke="black"></line>
    <line x1="394" y1="15" x2="394" y2="584" stroke="black"></line>
    <line x1="426" y1="15" x2="426" y2="584" stroke="black"></line>
    <line x1="457" y1="15" x2="457" y2="584" stroke="black"></line>
    <line x1="489" y1="15" x2="489" y2="584" stroke="black"></line>
    <line x1="521" y1="15" x2="521" y2="584" stroke="black"></line>
    <line x1="552" y1="15" x2="552" y2="584" stroke="black"></line>
    <line x1="584" y1="15" x2="584" y2="584" stroke="black"></line>
    <line x1="15" y1="15" x2="584" y2="15" stroke="black"></line>
    <line x1="15" y1="47" x2="584" y2="47" stroke="black"></line>
    <line x1="15" y1="78" x2="584" y2="78" stroke="black"></line>
    <line x1="15" y1="110" x2="584" y2="110" stroke="black"></line>
    <line x1="15" y1="142" x2="584" y2="142" stroke="black"></line>
    <line x1="15" y1="173" x2="584" y2="173" stroke="black"></line>
    <line x1="15" y1="205" x2="584" y2="205" stroke="black"></line>
    <line x1="15" y1="236" x2="584" y2="236" stroke="black"></line>
    <line x1="15" y1="268" x2="584" y2="268" stroke="black"></line>
    <line x1="15" y1="300" x2="584" y2="300" stroke="black"></line>
    <line x1="15" y1="331" x2="584" y2="331" stroke="black"></line>
    <line x1="15" y1="363" x2="584" y2="363" stroke="black"></line>
    <line x1="15" y1="394" x2="584" y2="394" stroke="black"></line>
    <line x1="15" y1="426" x2="584" y2="426" stroke="black"></line>
    <line x1="15" y1="457" x2="584" y2="457" stroke="black"></line>
    <line x1="15" y1="489" x2="584" y2="489" stroke="black"></line>
    <line x1="15" y1="521" x2="584" y2="521" stroke="black"></line>
    <line x1="15" y1="552" x2="584" y2="552" stroke="black"></line>
    <line x1="15" y1="584" x2="584" y2="584" stroke="black"></line>
  </g>
  <g>
    <circle cx="110" cy="110" r="3" fill="black"></circle>
    <circle cx="110" cy="300" r="3" fill="black"></circle>
    <circle cx="110" cy="489" r="3" fill="black"></circle>
    <circle cx="300" cy="110" r="3" fill="black"></circle>
    <circle cx="300" cy="300" r="3" fill="black"></circle>
    <circle cx="300" cy="489" r="3" fill="black"></circle>
    <circle cx="489" cy="110" r="3" fill="black"></circle>
    <circle cx="489" cy="300" r="3" fill="black"></circle>
    <circle cx="489" cy="489" r="3" fill="black"></circle>
  </g>
  <g>
    <image
      xlink:href="assets/img/board/black_small.png"
      x="474"
      y="190"
      width="30"
      height="30"
      style='filter: url("#shadow");'
    ></image>
  </g>
  <g>
    <circle
      cx="489"
      cy="205"
      r="11.538461538461538"
      stroke="white"
      stroke-width="2"
      fill="none"
    ></circle>
  </g>
  <g></g>
  <g></g>
</svg>; */}
