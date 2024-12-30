import React from 'react';

const JiffyLogo = ({ color = 'text-brand-light' }) => {
  return (
    <svg
      width='78'
      height='23'
      viewBox='0 0 78 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${color}`}
    >
      <path
        d='M13.7867 0.0406645C10.8786 0.055352 7.99007 0.0602482 5.07705 0.0455606C4.6658 0.0455606 4.25455 0.0406657 3.8433 0.0357699C3.27048 0.0259782 0.484755 -0.101314 0.181213 0.192436C-0.0929532 0.456811 0.0539218 3.91817 0.0588176 4.50077C0.0637135 4.96098 -0.0978493 6.07233 0.274234 6.33671C0.949859 6.82139 6.09048 6.10171 7.12351 6.55702C7.54455 6.80181 7.39767 8.29014 7.38788 8.73567C7.34871 10.4247 7.73059 13.2692 6.29121 14.4442C5.1309 15.1394 3.82861 15.1051 2.53121 14.924C1.80663 14.8212 0.592463 14.3659 0.210588 15.1786C-0.083162 15.8004 0.00985898 19.6436 0.0294423 20.5395C0.068609 22.1258 -0.0978489 22.3167 1.46882 22.4244C6.45278 22.7818 11.4269 23.526 13.9728 18.1504C15.0499 15.7955 15.0841 12.3341 15.0645 9.76379C15.0499 7.08577 15.045 4.44202 15.0597 1.7591C15.0694 0.349102 15.2163 0.0357687 13.7867 0.0406645Z'
        fill='currentColor'
      />
      <path
        d='M24.4401 8.24119C23.7253 7.95234 17.3509 7.85442 17.018 8.26567C16.8173 8.51046 16.8662 12.9755 16.8515 13.8029C16.8319 14.8163 16.5725 22.0817 17.1991 22.4587C17.7328 22.7818 24.0778 22.6986 24.3715 22.4538L24.4548 22.3608C24.9003 21.3571 24.7142 16.804 24.7289 15.2471C24.7338 14.5079 24.9052 8.42723 24.4401 8.24119Z'
        fill='currentColor'
      />
      <path
        d='M20.6752 6.79692C22.095 6.83608 23.2014 6.33671 23.877 5.42608C25.1598 3.68806 24.5086 1.25973 22.5111 0.432334C21.7816 0.133688 20.9493 0.0259803 20.1415 0.119001C18.4623 0.451918 16.9397 1.62202 16.9397 3.45306C17.0572 5.57786 18.6434 6.74796 20.6752 6.79692Z'
        fill='currentColor'
      />
      <path
        d='M34.4716 0.207115C34.173 0.23649 33.8988 0.275656 33.6051 0.32951L33.3015 0.393156C32.1118 0.667322 31.1376 1.13243 30.3444 2.08222C28.9198 3.96222 29.0373 5.83732 28.6162 7.99638C28.5673 8.25586 28.156 8.19222 27.8769 8.20691C27.2405 8.24118 26.8145 8.19222 26.1732 8.34399C25.8745 9.31336 25.9676 12.2753 26.0165 13.4161C26.0263 13.7 26.0557 14.1847 26.2124 14.4197C26.3788 14.5715 28.1217 14.6351 28.4742 14.6694C28.768 17.2838 28.4253 19.5897 28.5134 22.1013C28.5379 22.7524 29.3016 22.6398 29.8891 22.6594C30.5109 22.679 35.583 22.6937 35.9502 22.5811C36.474 22.4244 36.2439 21.4844 36.2243 20.985C36.1705 19.6289 36.0481 16.2116 36.2635 15.0023C36.4495 14.4638 37.3944 14.5764 37.8351 14.5764C38.4764 14.5764 39.1129 14.6107 39.7542 14.6058C39.7738 14.6058 39.7934 14.6058 39.813 14.6058C39.7885 14.3316 39.9109 14.0183 40.1557 13.5434C40.327 13.2202 40.4984 12.8922 40.6649 12.5642C40.8999 12.104 40.6551 11.8984 40.3075 11.82C40.2634 11.8102 40.2242 11.8004 40.1802 11.7858C39.8081 11.8004 39.4409 11.7319 39.0786 11.6389C39.108 11.6585 39.1374 11.6781 39.1667 11.6976C38.5792 11.6829 38.0994 11.5948 37.6294 11.4528C36.7139 11.1738 35.9795 10.6108 35.3137 9.94982C35.0347 9.67566 34.7556 9.40638 34.4227 9.19586C33.8156 8.8042 33.1938 8.76993 32.572 9.1518C32.0972 9.44555 31.588 9.58263 31.0348 9.56795C30.6969 9.56305 30.3836 9.47493 30.2123 9.16159C30.036 8.84826 30.1927 8.5643 30.3591 8.29503C30.4913 8.07472 30.6676 7.88868 30.8781 7.7467C31.2649 7.49211 31.539 7.1494 31.7544 6.74795C32.0874 6.13597 32.5818 5.73941 33.2868 5.65128C33.4729 5.6268 33.6002 5.51909 33.7422 5.42118C34.4129 4.95607 35.0738 4.48118 35.8131 4.12868C36.0383 4.02097 36.2782 3.92795 36.5181 3.85941C36.8167 3.77128 36.8853 3.84961 36.7825 4.14336C36.523 4.90222 36.1509 5.59253 35.4557 6.16045C36.1313 6.23878 36.7188 6.49336 37.3602 6.39055C37.5658 6.35628 37.7078 6.23878 37.8547 6.1017C38.7555 5.22045 39.7151 4.40774 40.7775 3.72722C40.7922 2.46409 40.7677 1.02472 40.5718 0.579197C40.0969 0.00148829 35.3431 0.123885 34.4716 0.207115Z'
        fill='currentColor'
      />
      <path
        d='M56.1944 0.574325C55.7098 0.0015126 50.9608 0.123908 50.0893 0.207138C49.7907 0.236513 49.5165 0.275679 49.2228 0.329533L48.9192 0.393179C47.7344 0.667345 46.7553 1.13245 45.967 2.07734C45.967 2.07734 45.967 2.07735 45.9622 2.08224C45.5264 2.65505 45.2376 3.22787 45.0319 3.80557C44.8312 4.3686 44.7088 4.93651 44.6158 5.51912C44.4885 6.31224 44.4053 7.12984 44.2388 7.99641C44.1899 8.25589 43.7786 8.19224 43.4995 8.20693C43.1128 8.22651 42.8043 8.21672 42.4812 8.2412C42.2707 8.25589 42.0553 8.28526 41.8056 8.34401C41.8007 8.34401 41.8007 8.34401 41.7958 8.34401C41.7566 8.4713 41.7224 8.63776 41.6979 8.8287C41.6098 9.46026 41.5853 10.3807 41.5902 11.2619C41.5951 12.1138 41.6195 12.9314 41.6391 13.4161C41.644 13.5679 41.6587 13.7735 41.6881 13.9693C41.7175 14.1456 41.7615 14.312 41.835 14.4197C41.9574 14.5323 42.9071 14.5911 43.5534 14.6352C43.7982 14.6498 43.9989 14.6645 44.0968 14.6743C44.3074 16.5543 44.1899 18.2728 44.1409 20.0255C44.1213 20.7109 44.1115 21.4012 44.1409 22.1111C44.1654 22.7622 44.9291 22.6496 45.5166 22.6692C46.1384 22.6888 51.2105 22.7035 51.5777 22.5909C52.1015 22.4342 51.8714 21.4942 51.8518 20.9948C51.798 19.6387 51.6756 16.2214 51.891 15.0121C52.077 14.4736 53.0219 14.5862 53.4626 14.5862C54.1039 14.5862 54.7404 14.6205 55.3817 14.6156C55.6902 14.6107 55.9741 14.6303 56.263 14.503C56.449 13.3133 56.3854 11.9278 56.3658 10.6304C56.3609 10.2828 56.356 9.94495 56.3609 9.61693C56.3658 9.37703 56.4441 8.33422 56.1749 8.24609C55.9056 8.16287 54.7795 8.22162 54.4173 8.23141C53.7563 8.23141 53.1003 8.2363 52.4393 8.22651C52.312 8.22651 52.1848 8.22162 52.0575 8.22162C52.1309 8.06005 52.1994 7.91318 52.2729 7.78099C52.8995 6.60599 53.4821 6.52766 54.2998 6.60599C54.7698 6.65005 55.3132 6.74797 55.9888 6.72349C56.6008 6.69901 56.3511 6.15557 56.3658 5.61703C56.3805 4.62807 56.5176 1.29401 56.1944 0.574325Z'
        fill='currentColor'
      />
      <path
        d='M77.2808 0.368682C76.8793 -0.14538 70.7791 0.0406615 69.9615 0.319724C69.6776 0.613474 69.7706 2.5865 69.7804 3.04181C69.8147 4.39306 69.1733 5.93035 67.6017 5.74431C65.3301 5.47504 65.8197 2.25358 65.7168 0.755453C65.6826 0.295245 65.7756 0.295245 65.4965 0.20712L65.2126 0.158162C64.2579 0.0455579 58.99 -0.106213 58.4269 0.349099C57.8199 0.838683 58.0549 4.48118 58.05 5.45545C58.0451 6.59129 58.1087 7.60472 58.236 8.49577C58.3535 9.33295 58.5347 10.0673 58.7697 10.6989C60.1013 14.2533 63.3277 14.6547 68.7621 12.8237C69.4034 12.5936 69.7167 12.2998 69.4866 12.995C68.2725 15.5311 64.5272 15.3793 62.138 15.2275C60.7231 15.0758 58.7746 14.6841 57.4135 14.8114C56.9386 15.9766 57.0414 17.5677 57.0708 18.8162C57.1393 21.9201 56.1896 22.3118 59.2984 22.537C64.9776 22.9483 72.0521 23.4476 75.5036 17.9545C77.4913 14.6449 77.4962 11.1052 77.4668 7.41868C77.4619 6.41993 77.6774 0.877849 77.2808 0.368682Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default JiffyLogo;
