import { useId } from "react"

/**
 * Pen-and-paper primitives shared by every page.
 * The visual work lives in index.css (.sheet, .sketch, .scribble, ...);
 * these components just compose those classes consistently.
 */

type SheetVariant = "napkin" | "lined" | "card"

export function sheetClass(variant: SheetVariant, extra = "") {
  const variants: Record<SheetVariant, string> = {
    napkin: "sheet sheet-napkin",
    lined: "sheet sheet-lined",
    card: "sheet",
  }
  return `${variants[variant]} ${extra}`
}

export function tilt(deg: number) {
  return { "--tilt": `${deg}deg` } as React.CSSProperties
}

type SheetProps = {
  variant?: SheetVariant
  tiltDeg?: number
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function Sheet({ variant = "napkin", tiltDeg = 0, className = "", style, children }: SheetProps) {
  return (
    <div className={sheetClass(variant, className)} style={{ ...tilt(tiltDeg), ...style }}>
      {children}
    </div>
  )
}

/** Notebook page header: sits exactly two ruled lines tall, with a red rule under it. */
export function SheetHeader({
  title,
  aside,
  as: Tag = "h2",
}: {
  title: React.ReactNode
  aside?: React.ReactNode
  as?: "h1" | "h2"
}) {
  return (
    <div className="sheet-header flex h-16 items-end justify-between gap-4 pb-1.5">
      <Tag className="font-hand text-[1.7rem] leading-8 font-bold">{title}</Tag>
      {aside && <div className="text-right text-sm leading-8 text-pencil">{aside}</div>}
    </div>
  )
}

/** A heading written straight onto the desk, underlined twice by hand. */
export function DeskHeading({ children, as: Tag = "h2" }: { children: React.ReactNode; as?: "h1" | "h2" }) {
  return (
    <Tag className="font-hand text-3xl font-bold sm:text-[2.1rem]">
      <span className="scribble">{children}</span>
    </Tag>
  )
}

export function Squiggle({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`squiggle text-faint/70 ${className}`} />
}

export function Kbd({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd
      className={`sketch sketch-thin inline-flex h-6 min-w-6 items-center justify-center px-1.5 font-mono text-xs leading-none text-pencil ${className}`}
    >
      {children}
    </kbd>
  )
}

/** Class strings for the two sketched button styles. */
export const buttonAccent =
  "sketch sketch-accent inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 px-6 text-lg font-bold text-ink transition-colors"
export const buttonInk =
  "sketch inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 px-6 text-lg font-bold text-ink transition-colors"

/** Hidden SVG filters that give strokes and paper edges their hand-made wobble. */
export function SketchFilters() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <filter id="rough" x="-8%" y="-8%" width="116%" height="116%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="deckle" x="-6%" y="-8%" width="112%" height="130%">
        <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="3" seed="11" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}

/**
 * The site mascot: a little hand-drawn padlock with legs, coloured in with
 * orange pencil hatching. `flag` pins a small note to it ("?", "!", "✓").
 */
export function Critter({
  className = "",
  flag,
  wiggle = false,
}: {
  className?: string
  flag?: string
  wiggle?: boolean
}) {
  const hatch = `hatch-${useId().replace(/:/g, "")}`

  return (
    <svg viewBox="0 0 124 104" aria-hidden="true" className={`${wiggle ? "wiggle" : ""} ${className}`}>
      <defs>
        <pattern id={hatch} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-50)">
          <rect width="5" height="5" className="fill-wash" />
          <line x1="1" y1="0" x2="1" y2="5" className="stroke-accent" strokeWidth="2.2" />
        </pattern>
      </defs>
      <g filter="url(#rough)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 40V28a18 18 0 0 1 36 0v12" className="stroke-ink" strokeWidth="4.5" />
        <rect x="24" y="38" width="72" height="46" rx="11" fill={`url(#${hatch})`} className="stroke-accent-ink" strokeWidth="3.2" />
        <ellipse cx="49" cy="58" rx="3.4" ry="4.8" className="fill-ink" />
        <ellipse cx="71" cy="58" rx="3.4" ry="4.8" className="fill-ink" />
        <path d="M55 69q5 4 10 0" className="stroke-ink" strokeWidth="2.4" />
        <path d="M33 84v10h7V84M47 84v10h7V84M66 84v10h7V84M80 84v10h7V84" className="stroke-ink" strokeWidth="2.8" />
        {flag ? (
          <>
            <path d="M92 40V12" className="stroke-ink" strokeWidth="2.4" />
            <path d="M92 12h22l-4 7 4 7H92" className="fill-paper stroke-red-ink" strokeWidth="2.4" />
          </>
        ) : (
          <path d="M92 20q7 5 6 14M101 11q9 7 8 20" className="stroke-ink" strokeWidth="2.4" />
        )}
      </g>
      {flag && (
        <text x="102" y="23.5" textAnchor="middle" className="fill-red-ink font-hand text-[13px] font-bold">
          {flag}
        </text>
      )}
    </svg>
  )
}

/** Small hand-drawn page with a folded corner, used beside note titles. */
export function PageIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className} fill="none">
      <g filter="url(#rough)" className="stroke-pencil" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 2.5h7l3.5 3.5v11.5H5z" />
        <path d="M12 2.5V6h3.5M7.5 10h5.5M7.5 13h4" />
      </g>
    </svg>
  )
}
