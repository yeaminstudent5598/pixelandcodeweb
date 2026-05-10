'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  .tss-display { font-family: 'Syne', sans-serif !important; }
  .tss-mono    { font-family: 'JetBrains Mono', monospace !important; }

  @keyframes tss-gradX  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes tss-fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes tss-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 8px rgba(249,115,22,0)} }
  @keyframes tss-spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes tss-counterSpin { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }

  .tss-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 45%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: tss-gradX 5s ease infinite;
  }
  .tss-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .tss-card {
    position: relative;
    display: flex; align-items: center; gap: 10px;
    flex-shrink: 0;
    padding: 10px 18px;
    border-radius: 14px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    cursor: default;
    transition: border-color .25s, box-shadow .25s, transform .25s;
    overflow: hidden;
  }
  .tss-card::before {
    content: '';
    position: absolute; left: 0; top: 20%; bottom: 20%; width: 2px;
    border-radius: 2px;
    background: linear-gradient(to bottom, transparent, #f97316, transparent);
    opacity: 0; transition: opacity .25s;
  }
  .tss-card:hover {
    border-color: rgba(249,115,22,.4);
    box-shadow: 0 0 24px rgba(249,115,22,.12);
    transform: translateY(-2px);
  }
  .tss-card:hover::before { opacity: 1; }
  .tss-card:hover .tss-card-name { color: #fff !important; }
  .tss-card:hover .tss-card-icon { transform: scale(1.15) rotate(-4deg); }
  .tss-card-icon { transition: transform .3s; }

  .tss-stat-card {
    transition: border-color .25s, transform .25s;
  }
  .tss-stat-card:hover {
    border-color: rgba(249,115,22,.3) !important;
    transform: translateY(-3px);
  }
`;

/* ─────────────────────────────────────────────
   Tech Stack Data — SVG logos inline
───────────────────────────────────────────── */
type TechItem = {
  name: string;
  color: string;
  bg: string;
  svg: React.ReactNode;
};

const TECH_STACK: TechItem[] = [
  {
    name: 'Next.js', color: '#ffffff', bg: 'rgba(255,255,255,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
  },
  {
    name: 'React', color: '#61dafb', bg: 'rgba(97,218,251,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.353.760-1.977 2.472-1.977 5.021 0 1.918.577 4.148 1.761 6.353-1.184 2.206-1.761 4.436-1.761 6.354 0 2.549.624 4.261 1.977 5.021.323.185.696.278 1.106.278 1.345 0 3.107-.96 4.888-2.622 1.78 1.653 3.542 2.602 4.887 2.602.41 0 .783-.093 1.106-.278 1.353-.76 1.977-2.472 1.977-5.021 0-1.918-.577-4.148-1.761-6.353 1.184-2.206 1.761-4.436 1.761-6.354 0-2.549-.624-4.261-1.977-5.021-.323-.185-.697-.278-1.107-.278zm-4.552 1.602c1.573-1.449 3.067-2.276 4.176-2.276.241 0 .455.042.638.145.748.42 1.153 1.706 1.153 3.617 0 1.647-.495 3.651-1.547 5.704-1.046 2.049-2.422 3.82-3.75 4.969C11.31 16.86 9.816 16.032 8.708 16.032c-.241 0-.455-.042-.638-.145-.748-.42-1.153-1.706-1.153-3.617 0-1.647.495-3.651 1.547-5.704 1.046-2.049 2.422-3.82 3.75-4.969z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript', color: '#3b82f6', bg: 'rgba(59,130,246,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind', color: '#22d3ee', bg: 'rgba(34,211,238,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js', color: '#68a063', bg: 'rgba(104,160,99,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.240l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.087.050-.140.143-.140.241v10.15c0 .097.053.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.891c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.570.328.924.942.924 1.603v10.150c0 .660-.354 1.273-.924 1.604l-8.794 5.077c-.280.162-.600.246-.925.246zm2.718-6.998c-3.852 0-4.659-1.769-4.659-3.254 0-.142.114-.253.256-.253h1.136c.127 0 .233.092.252.217.172 1.160.683 1.746 3.017 1.746 1.857 0 2.647-.420 2.647-1.407 0-.568-.225-.99-3.116-1.274-2.415-.238-3.910-.773-3.910-2.708 0-1.785 1.503-2.849 4.023-2.849 2.829 0 4.230.982 4.407 3.090.006.071-.019.140-.066.193a.258.258 0 01-.188.082h-1.140a.256.256 0 01-.248-.195c-.277-1.225-.949-1.620-2.767-1.620-2.037 0-2.274.710-2.274 1.241 0 .645.280.833 3.020 1.196 2.715.360 4.003.870 4.003 2.775-.003 1.933-1.611 3.020-4.420 3.020z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB', color: '#4ade80', bg: 'rgba(74,222,128,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    ),
  },
  {
    name: 'Figma', color: '#c084fc', bg: 'rgba(192,132,252,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.490S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.490s2.014-4.49 4.49-4.49h4.588v8.980zM8.148 10.021c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117v-6.039H8.148zm4.587 2.49H12a4.49 4.49 0 010-8.98h.735v8.98zM12 11.04a3.019 3.019 0 110-6.038 3.019 3.019 0 010 6.038zm0 3.509a3.019 3.019 0 110 6.038 3.019 3.019 0 010-6.038zm0 4.509a1.49 1.49 0 100 2.98 1.49 1.49 0 000-2.98z"/>
      </svg>
    ),
  },
  {
    name: 'AWS', color: '#f97316', bg: 'rgba(249,115,22,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.152.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z"/>
        <path d="M20.061 19.101a17.57 17.57 0 01-10.13 3.18c-4.797 0-9.118-1.77-12.382-4.705-.256-.232-.025-.545.279-.367a23.88 23.88 0 0011.87 3.148c2.908 0 6.107-.6 9.054-1.847.44-.192.814.287.31.591z"/>
        <path d="M21.069 17.952c-.352-.447-2.317-.208-3.195-.104-.264.032-.304-.2-.064-.375 1.563-1.094 4.124-.781 4.42-.414.296.376-.08 2.953-1.547 4.187-.224.192-.44.088-.343-.16.33-.822 1.08-2.681.729-3.134z"/>
      </svg>
    ),
  },
  {
    name: 'Python', color: '#ffd43b', bg: 'rgba(255,212,59,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02h.36l.9.1.85.21.77.3.68.38.57.44.45.48.31.51.15.51-.01.5-.17.47-.35.42-.47.34-.54.23-.54.11-.5.02-.42-.05-.34-.11-.26-.17-.19-.22-.12-.25-.07-.27-.04-.27-.02-.25v-.22l.02-.2.04-.18.07-.16.09-.14.13-.11.16-.08.2-.05.23-.02.25.01.26.04.25.07.24.1.22.14.19.17.16.21.12.24.08.27.03.3v.31l-.04.32-.09.31-.16.29-.23.25-.32.18-.42.1-.52.01zm-6.5 14.64l-.06-.15-.04-.15-.03-.15-.03-.14-.02-.13-.01-.12-.01-.11v-.1l.01-.09.01-.08.02-.07.02-.06.03-.05.03-.04.04-.03.04-.02.05-.01h5.79l.07.01.07.02.07.03.07.05.06.06.05.07.04.08.03.1.02.11.01.12v.12l-.01.13-.02.14-.03.14-.04.15-.06.15-.07.16-.09.16-.11.16-.13.15-.15.14-.18.13-.2.11-.22.08-.25.05-.28.02H9.52l-.28-.02-.25-.05-.22-.08-.2-.11-.18-.13-.15-.14-.13-.15-.11-.16-.09-.16-.07-.16z"/>
      </svg>
    ),
  },
  {
    name: 'Flutter', color: '#38bdf8', bg: 'rgba(56,189,248,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z"/>
      </svg>
    ),
  },
  {
    name: 'Docker', color: '#60a5fa', bg: 'rgba(96,165,250,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
      </svg>
    ),
  },
  {
    name: 'Git', color: '#fbbf24', bg: 'rgba(251,191,36,.06)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   Single Tech Card
───────────────────────────────────────────── */
function TechCard({ item, mx = 8 }: { item: TechItem; mx?: number }) {
  return (
    <div
      className="tss-card"
      style={{ margin: `0 ${mx}px`, minWidth: 154 }}
    >
      {/* Icon container */}
      <div
        className="tss-card-icon"
        style={{
          width: 34, height: 34, borderRadius: 9, flexShrink: 0,
          background: item.bg,
          border: `1px solid ${item.color}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: item.color,
        }}
      >
        {item.svg}
      </div>

      {/* Name */}
      <span
        className="tss-card-name tss-mono"
        style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.65)', whiteSpace: 'nowrap' }}
      >
        {item.name}
      </span>

      {/* Shimmer */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 14,
        background: `radial-gradient(circle at 0% 50%, ${item.color}08, transparent 60%)`,
        pointerEvents: 'none',
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Infinite Scroll Row
───────────────────────────────────────────── */
function ScrollRow({
  items,
  direction = 'left',
  speed = 35,
}: {
  items: TechItem[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const triple = [...items, ...items, ...items];
  const from = direction === 'left' ? '0%' : '-33.33%';
  const to   = direction === 'left' ? '-33.33%' : '0%';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: [from, to] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      >
        {triple.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} item={tech} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stats row data
───────────────────────────────────────────── */
const STATS_EN = [
  { num: '12+', label: 'Technologies', sub: 'in our stack' },
  { num: '50+', label: 'Projects', sub: 'delivered' },
  { num: '4yrs', label: 'Experience', sub: 'building products' },
  { num: '100%', label: 'Open Source', sub: 'friendly stack' },
];
const STATS_BN = [
  { num: '12+', label: 'টেকনোলজি', sub: 'আমাদের স্ট্যাকে' },
  { num: '50+', label: 'প্রজেক্ট', sub: 'সম্পন্ন' },
  { num: '4 বছর', label: 'অভিজ্ঞতা', sub: 'পণ্য তৈরিতে' },
  { num: '100%', label: 'ওপেন সোর্স', sub: 'ফ্রেন্ডলি স্ট্যাক' },
];

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export function TechStackSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = TECH_STACK.slice(0, 6);
  const row2 = TECH_STACK.slice(6);
  const stats = language ? STATS_BN : STATS_EN;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        ref={ref}
        className="tss-grid"
        style={{
          position: 'relative', width: '100%', overflow: 'hidden',
          paddingTop: 96, paddingBottom: 96,
          background: '#080808',
          borderTop: '1px solid rgba(255,255,255,.05)',
        }}
      >
        {/* ── Ambient orbs ── */}
        <div style={{
          position: 'absolute', top: '10%', left: '10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,.07) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,.05) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        {/* ── Header ── */}
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 24px 64px',
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 20 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '6px 16px', borderRadius: 9999,
              border: '1px solid rgba(249,115,22,.28)',
              background: 'rgba(249,115,22,.07)',
              color: '#fb923c', fontSize: 11, fontWeight: 700,
              letterSpacing: '.09em', textTransform: 'uppercase',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%', background: '#f97316',
                boxShadow: '0 0 6px rgba(249,115,22,.9)',
                animation: 'tss-pulse 2s ease-in-out infinite',
              }} />
              {language ? 'আমাদের টেকনোলজি স্ট্যাক' : 'Our Technology Stack'}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="tss-display"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#fff', marginBottom: 20,
            }}
          >
            {language ? (
              <>আধুনিক ও স্কেলেবল<br /><span className="tss-text-grad">সফটওয়্যার স্ট্যাক</span></>
            ) : (
              <>Modern & Scalable<br /><span className="tss-text-grad">Software Architecture</span></>
            )}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: '#6b7280', fontSize: 16, lineHeight: 1.75,
              fontWeight: 300, maxWidth: 520,
            }}
          >
            {language
              ? 'আমরা ব্যবহার করি বিশ্বের সবচেয়ে নির্ভরযোগ্য এবং দ্রুতগতির ফ্রেমওয়ার্কসমূহ।'
              : "We build with the world's most reliable, battle-tested, and high-performance frameworks."}
          </motion.p>
        </div>

        {/* ── Scrolling rows ── */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Edge fade masks */}
          {['left', 'right'].map(side => (
            <div key={side} style={{
              position: 'absolute', [side]: 0, top: 0, bottom: 0,
              width: 160, zIndex: 20, pointerEvents: 'none',
              background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #080808, transparent)`,
            }} />
          ))}

          <ScrollRow items={row1} direction="left"  speed={38} />
          <ScrollRow items={row2} direction="right" speed={42} />
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            maxWidth: 1280, margin: '64px auto 0', padding: '0 24px',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 16, position: 'relative', zIndex: 10,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="tss-stat-card"
              style={{
                padding: '20px 24px', borderRadius: 16,
                background: 'rgba(255,255,255,.025)',
                border: '1px solid rgba(255,255,255,.07)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
              }}
            >
              <div className="tss-display" style={{
                fontSize: 28, fontWeight: 900, color: '#fff',
                lineHeight: 1, marginBottom: 4,
              }}>{s.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#f97316', marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: '#4b5563' }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: 'flex', justifyContent: 'center',
            marginTop: 48, position: 'relative', zIndex: 10,
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: 9999,
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.07)',
            backdropFilter: 'blur(8px)',
          }}>
            <ShieldCheck style={{ width: 15, height: 15, color: '#f97316' }} />
            <span style={{ fontSize: 13, color: '#6b7280' }}>
              {language ? 'নিরাপদ ও অপটিমাইজড কোডবেস · প্রতিটি প্রজেক্টে' : 'Secure & optimized codebase · Every single project'}
            </span>
          </div>
        </motion.div>

      </section>
    </>
  );
}