const USFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 512 512"
  >
    <mask id="a">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#eee"
        d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"
      />
      <path
        fill="#d80027"
        d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
      />
      <path fill="#0052b4" d="M0 0h256v256H0Z" />
      <path
        fill="#eee"
        d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"
      />
    </g>
  </svg>
);

const THFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 512 512"
  >
    <mask id="a">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#d80027"
        d="M0 0h512v89l-79.2 163.7L512 423v89H0v-89l82.7-169.6L0 89z"
      />
      <path
        fill="#eee"
        d="M0 89h512v78l-42.6 91.2L512 345v78H0v-78l40-92.5L0 167z"
      />
      <path fill="#0052b4" d="M0 167h512v178H0z" />
    </g>
  </svg>
);

export { USFlag, THFlag };
