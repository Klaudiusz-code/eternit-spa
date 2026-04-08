"use client";
import { MessageCircle } from "lucide-react";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC, TEXT_MUTED } from "@/lib/utils";

type Props = {
  name: string;
  price: string;
  duration?: string;
  isPopular?: boolean;
  index: number;
};

export default function ServiceCard({
  name,
  price,
  duration,
  isPopular = false,
  index,
}: Props) {
  return (
    <div
      className="service-card group relative flex items-center py-3 md:py-5 border-b border-dashed border-white/[0.06] last:border-0 cursor-default overflow-hidden"
      style={{
        paddingLeft: isPopular ? "12px" : "0",
        animationDelay: `${index * 0.04}s`,
      }}
    >
      <div
        className="sweep-light absolute top-0 left-0 w-1/2 h-full -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[800ms] ease-in-out pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.08), transparent)",
          transformOrigin: "left",
        }}
      />

      {isPopular && (
        <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-[#C9A84C]/80 via-[#C9A84C] to-[#C9A84C]/80" />
      )}

      <div className="flex-1 min-w-0 mr-2 md:mr-4 relative z-10 pr-2">
        <span
          className="text-[12px] md:text-[14px] font-light tracking-wide transition-colors duration-300 group-hover:text-white block truncate"
          style={{ color: isPopular ? TEXT_WARM : TEXT_SEC }}
        >
          {name}
        </span>
      </div>

      <div className="flex items-center flex-shrink-0 gap-2 md:gap-3 relative z-10">
        {duration && (
          <span
            className="text-[10px] md:text-[11px] min-w-[35px] md:min-w-[38px] text-right tabular-nums"
            style={{ color: TEXT_MUTED }}
          >
            {duration}
          </span>
        )}

        <div className="w-8 md:w-16 flex-1 mb-[2px] md:mb-1">
          <div
            className="w-full border-b border-dotted transition-colors duration-300 group-hover:border-[#C9A84C]/30"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          />
        </div>

        <span
          className="text-[13px] md:text-[15px] font-light tabular-nums min-w-[50px] md:min-w-[60px] text-right transition-all duration-300 group-hover:text-white"
          style={{ color: isPopular ? GOLD : TEXT_SEC }}
        >
          {price}
        </span>

        {isPopular ? (
          <div className="ml-1 md:ml-3 stamp text-[9px]">HIT</div>
        ) : (
          <a
            href={waLink(`Cześć! Umówię się na: ${name} (${price})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3 w-6 h-6 rounded-full border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/30"
            style={{ color: TEXT_MUTED }}
          >
            <MessageCircle className="w-2.5 h-2.5" />
          </a>
        )}
      </div>

      <style jsx>{`
        .service-card {
          opacity: 0; /* Start hidden for animation */
          animation: rowFade 0.4s ease-out both;
        }
        @keyframes rowFade {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .stamp {
          display: inline-block;
          border: 1px solid #c9a84c;
          color: #c9a84c;
          transform: rotate(-6deg);
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.8;
          text-transform: uppercase;
          box-shadow: inset 0 0 0 1px rgba(201, 168, 76, 0.1);
        }
      `}</style>
    </div>
  );
}
