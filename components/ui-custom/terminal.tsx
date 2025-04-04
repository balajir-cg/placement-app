import { cn } from "@/lib/utils"

interface TerminalProps {
  lines: {
    prompt?: string
    command?: string
    output?: string[]
  }[]
  className?: string
}

export function Terminal({ lines, className }: TerminalProps) {
  return (
    <div className={cn("terminal", className)}>
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
      </div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div key={index}>
            {(line.prompt || line.command) && (
              <div className="terminal-line">
                {line.prompt && <span className="terminal-prompt">{line.prompt}</span>}
                {line.command && <span className="terminal-command">{line.command}</span>}
              </div>
            )}
            {line.output &&
              line.output.map((output, outputIndex) => (
                <div key={outputIndex} className="terminal-output">
                  {output}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

