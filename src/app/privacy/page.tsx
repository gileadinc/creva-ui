import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Creva',
  description:
    "Creva's comprehensive privacy policy and terms of service for our AI-powered hiring platform.",
  robots: 'index, follow',
};

export default async function PrivacyPolicyPage() {
  // Read the markdown file from the current directory
  const markdownFilePath = path.join(
    process.cwd(),
    'src',
    'app',
    'privacy',
    'content.md',
  );
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      {/* <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-lg border bg-white p-8 shadow-sm">
          <ReactMarkdown
            components={{
              // Main headings (Section titles)
              h1: ({ node, ...props }) => (
                <h1
                  className="mt-12 mb-8 border-b-2 border-blue-100 pb-4 text-3xl font-bold text-gray-900 first:mt-0"
                  {...props}
                />
              ),

              // Section headings
              h2: ({ node, ...props }) => (
                <h2
                  className="mt-10 mb-6 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-800"
                  {...props}
                />
              ),

              // Subsection headings
              h3: ({ node, ...props }) => (
                <h3
                  className="mt-8 mb-4 text-xl font-semibold text-gray-700"
                  {...props}
                />
              ),

              // Sub-subsection headings
              h4: ({ node, ...props }) => (
                <h4
                  className="mt-6 mb-3 text-lg font-medium text-gray-700"
                  {...props}
                />
              ),

              // Paragraphs
              p: ({ node, ...props }) => (
                <p
                  className="mb-4 text-base leading-relaxed text-gray-600"
                  {...props}
                />
              ),

              // Unordered lists
              ul: ({ node, ...props }) => (
                <ul className="mb-6 space-y-2 pl-6" {...props} />
              ),

              // List items
              li: ({ node, ...props }) => (
                <li
                  className="relative text-gray-600 before:absolute before:-left-4 before:font-bold before:text-blue-500 before:content-['•']"
                  {...props}
                />
              ),

              // Ordered lists
              ol: ({ node, ...props }) => (
                <ol
                  className="mb-6 list-inside list-decimal space-y-2 pl-6"
                  {...props}
                />
              ),

              // Strong/Bold text
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-gray-800" {...props} />
              ),

              // Emphasis/Italic text
              em: ({ node, ...props }) => (
                <em className="text-gray-700 italic" {...props} />
              ),

              // Code blocks
              code: ({ node, ...props }) => (
                <code
                  className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800"
                  {...props}
                />
              ),

              // Blockquotes
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="mb-6 border-l-4 border-blue-500 bg-blue-50 py-2 pl-4 text-gray-700 italic"
                  {...props}
                />
              ),

              // Links
              a: ({ node, ...props }) => (
                <a
                  className="font-medium text-blue-600 underline hover:text-blue-800"
                  {...props}
                />
              ),

              // Horizontal rules
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-gray-200" {...props} />
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>

        {/* Contact Section */}
        {/* <div className="mt-12 rounded-lg border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-900">
            Questions about our Privacy Policy?
          </h3>
          <p className="mb-4 text-blue-800">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please don't hesitate to contact us.
          </p>
          <div className="space-y-2 text-blue-700">
            <p>
              <strong>Email:</strong> privacy@creva.com
            </p>
            <p>
              <strong>Address:</strong> Creva Privacy Team, Texas, United States
            </p>
          </div>
        </div> */}
      </main>
    </div>
  );
}
