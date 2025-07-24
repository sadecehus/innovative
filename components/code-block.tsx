interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <div className={`bg-muted/50 rounded-lg p-4 border font-mono text-sm overflow-x-auto ${className}`}>
      <pre className="text-muted-foreground whitespace-pre-wrap">{children}</pre>
    </div>
  )
}
