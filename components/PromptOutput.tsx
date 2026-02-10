"use client";
import { useState } from "react";
import { BiCopy, BiSolidCopy } from "react-icons/bi";

type PromptOutputProps = {
  output: string;
};

export default function PromptOutput({ output }: PromptOutputProps) {
  const [copy, setCopy] = useState(false);

  const copied = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    } catch (err) {
      setCopy(false);
      console.log(err);
    }
  };

  if (!output) return null;

  // Parse the output to extract structured sections
  const parseOutput = (text: string) => {
    const sections: { title: string; content: string }[] = [];

    const parts = text.split(
      /(?=Role:|Context:|Task:|Requirements:|Output Format:|Constraints:)/gi,
    );

    parts.forEach((part) => {
      const trimmed = part.trim();
      if (trimmed) {
        const colonIndex = trimmed.indexOf(":");
        if (colonIndex > 0) {
          const title = trimmed.substring(0, colonIndex).trim();
          const content = trimmed.substring(colonIndex + 1).trim();
          sections.push({ title, content });
        } else {
          sections.push({ title: "", content: trimmed });
        }
      }
    });

    return sections;
  };

  const sections = parseOutput(output);

  return (
    <div
      className="
        overflow-hidden
        bg-card
        rounded-xl border border-border
        shadow-sm
        relative
      "
    >
      {/* Header with Copy Button */}
      <div className="
        flex items-center justify-between px-6 py-4 border-b
        bg-muted/10 border-border
      ">

        <h3
          className="text-sm font-semibold text-cyan-500 "
        >
          Refined Prompt
        </h3>

        <button
          onClick={copied}
          aria-label="Copy to clipboard"
          className="
            flex
            px-3 py-1.5
            text-sm font-medium text-gray-900
            bg-gray-100
            rounded-lg
            transition-all
            items-center gap-2 duration-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white hover:bg-gray-200
          "
        >
          {!copy ? (
            <>
              <BiCopy
                className="
                  text-lg
                "
              />
              <span
                className="
                  hidden
                  sm:inline
                "
              >
                Copy
              </span>
            </>
          ) : (
            <>
              <BiSolidCopy
                className="
                  text-lg text-green-500
                "
              />
              <span
                className="
                  hidden
                  text-green-500
                  sm:inline
                "
              >
                Copied!
              </span>
            </>
          )}
        </button>
      </div>

      {/* Content */}
      <div
        className="
          overflow-y-auto
          max-h-[500px]
          p-6
          custom-scrollbar
        "
      >
        <div
          className="
            space-y-6
          "
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="
                space-y-2
              "
            >
              {section.title && (
                <h4 className="text-sm font-semibold flex items-center gap-2 text-cyan-500">
                  <span
                    className="
                      w-1 h-4
                      bg-blue-600
                      rounded-full
                      dark:bg-cyan-400
                    "
                  ></span>
                  {section.title}
                </h4>
              )}
              <p className="text-sm leading-relaxed text-muted">

                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
