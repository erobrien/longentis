import { useState } from "react";

// Simplified US map paths for key states - a compact representation
const states: Record<string, { path: string; cx: number; cy: number }> = {
  AL: { path: "M625,395 L625,445 L610,450 L605,440 L605,395Z", cx: 615, cy: 420 },
  AK: { path: "M120,470 L180,470 L180,510 L120,510Z", cx: 150, cy: 490 },
  AZ: { path: "M205,370 L255,370 L260,430 L200,430Z", cx: 230, cy: 400 },
  AR: { path: "M545,385 L590,385 L590,420 L545,420Z", cx: 567, cy: 402 },
  CA: { path: "M115,250 L150,250 L165,380 L130,400 L110,350Z", cx: 135, cy: 330 },
  CO: { path: "M280,300 L350,300 L350,345 L280,345Z", cx: 315, cy: 322 },
  CT: { path: "M770,215 L790,210 L795,225 L775,230Z", cx: 782, cy: 220 },
  DE: { path: "M745,280 L755,275 L758,295 L748,298Z", cx: 751, cy: 286 },
  FL: { path: "M640,445 L700,440 L720,490 L690,520 L660,490 L640,460Z", cx: 680, cy: 475 },
  GA: { path: "M650,385 L690,380 L695,440 L645,445Z", cx: 670, cy: 412 },
  HI: { path: "M260,480 L290,475 L295,495 L265,498Z", cx: 277, cy: 487 },
  ID: { path: "M200,160 L235,155 L240,250 L205,255Z", cx: 220, cy: 205 },
  IL: { path: "M570,260 L600,255 L605,340 L570,345Z", cx: 587, cy: 300 },
  IN: { path: "M610,265 L640,262 L642,335 L612,338Z", cx: 626, cy: 300 },
  IA: { path: "M500,240 L560,237 L562,280 L502,283Z", cx: 530, cy: 260 },
  KS: { path: "M400,320 L490,318 L490,360 L400,362Z", cx: 445, cy: 340 },
  KY: { path: "M610,335 L690,325 L695,355 L615,360Z", cx: 652, cy: 342 },
  LA: { path: "M545,430 L590,425 L595,470 L555,475Z", cx: 570, cy: 450 },
  ME: { path: "M790,130 L810,125 L820,175 L795,180Z", cx: 805, cy: 152 },
  MD: { path: "M720,280 L755,270 L758,295 L722,300Z", cx: 738, cy: 285 },
  MA: { path: "M775,200 L810,195 L812,210 L778,213Z", cx: 793, cy: 205 },
  MI: { path: "M590,180 L640,175 L645,250 L595,255Z", cx: 617, cy: 215 },
  MN: { path: "M470,150 L530,148 L532,230 L472,232Z", cx: 500, cy: 190 },
  MS: { path: "M585,395 L615,392 L618,455 L588,458Z", cx: 601, cy: 425 },
  MO: { path: "M510,300 L570,298 L572,365 L512,367Z", cx: 540, cy: 332 },
  MT: { path: "M240,130 L350,128 L352,185 L242,187Z", cx: 296, cy: 157 },
  NE: { path: "M380,270 L470,268 L472,310 L382,312Z", cx: 425, cy: 290 },
  NV: { path: "M165,240 L205,238 L210,350 L170,355Z", cx: 187, cy: 295 },
  NH: { path: "M785,155 L798,152 L800,195 L787,198Z", cx: 792, cy: 175 },
  NJ: { path: "M755,240 L770,238 L773,280 L758,282Z", cx: 763, cy: 260 },
  NM: { path: "M260,370 L330,368 L332,440 L262,442Z", cx: 296, cy: 405 },
  NY: { path: "M710,180 L775,175 L778,240 L715,245Z", cx: 742, cy: 210 },
  NC: { path: "M660,345 L750,335 L755,365 L665,370Z", cx: 707, cy: 352 },
  ND: { path: "M380,140 L460,138 L462,190 L382,192Z", cx: 420, cy: 165 },
  OH: { path: "M645,255 L695,252 L698,320 L648,323Z", cx: 671, cy: 287 },
  OK: { path: "M390,365 L490,360 L492,400 L405,405 L390,390Z", cx: 440, cy: 382 },
  OR: { path: "M120,155 L195,150 L200,215 L125,220Z", cx: 160, cy: 185 },
  PA: { path: "M690,235 L755,230 L758,275 L693,280Z", cx: 723, cy: 255 },
  RI: { path: "M790,215 L800,213 L802,225 L792,227Z", cx: 796, cy: 220 },
  SC: { path: "M670,375 L720,370 L725,405 L675,408Z", cx: 697, cy: 388 },
  SD: { path: "M380,195 L460,193 L462,250 L382,252Z", cx: 420, cy: 222 },
  TN: { path: "M580,355 L680,348 L682,375 L582,382Z", cx: 630, cy: 365 },
  TX: { path: "M340,390 L470,385 L490,490 L400,500 L340,460Z", cx: 415, cy: 440 },
  UT: { path: "M225,260 L280,258 L282,345 L227,348Z", cx: 253, cy: 303 },
  VT: { path: "M770,155 L783,153 L785,195 L772,197Z", cx: 777, cy: 175 },
  VA: { path: "M680,305 L755,298 L758,340 L685,345Z", cx: 718, cy: 320 },
  WA: { path: "M130,110 L200,105 L205,160 L135,165Z", cx: 167, cy: 135 },
  WV: { path: "M680,290 L710,285 L715,335 L685,340Z", cx: 697, cy: 312 },
  WI: { path: "M530,165 L585,162 L588,240 L532,243Z", cx: 558, cy: 202 },
  WY: { path: "M265,195 L350,193 L352,255 L267,257Z", cx: 308, cy: 225 },
  DC: { path: "M738,292 L744,290 L746,298 L740,300Z", cx: 742, cy: 295 },
};

interface USMapProps {
  selectedState?: string;
  onStateSelect?: (state: string) => void;
  className?: string;
}

const USMap = ({ selectedState, onStateSelect, className = "" }: USMapProps) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className={className}>
      <svg viewBox="100 100 730 430" className="w-full h-auto">
        {Object.entries(states).map(([code, { path }]) => (
          <path
            key={code}
            d={path}
            fill={
              selectedState === code
                ? "hsl(27, 92%, 47%)"
                : hoveredState === code
                  ? "hsl(220, 46%, 25%)"
                  : "hsl(226, 50%, 14%)"
            }
            stroke="hsl(224, 22%, 82%)"
            strokeWidth="0.5"
            className="cursor-pointer transition-colors duration-200"
            onMouseEnter={() => setHoveredState(code)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => onStateSelect?.(code)}
          />
        ))}
      </svg>
    </div>
  );
};

export default USMap;
