"use client";

import { useState } from "react";

interface CopyCodeBlockProps {
  code: string;
  highlightedHtml?: string;
  className?: string;
}

export default function CopyCodeBlock({ code, highlightedHtml, className = "" }: CopyCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-4 relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors rounded hover:bg-gray-800 opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      {highlightedHtml ? (
        <pre
          className="text-sm text-gray-100 font-mono leading-relaxed overflow-x-auto pr-10"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      ) : (
        <pre className="text-sm text-green-400 font-mono leading-relaxed overflow-x-auto pr-10">
          {code}
        </pre>
      )}
    </div>
  );
}
