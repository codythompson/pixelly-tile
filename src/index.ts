import { promises as fs } from "fs"

type RenderArgs = {
  width: number
  height: number
}

class ParsedLine {
  lineNumber: number = NaN
  args: number[] = []

  get x(): number {
    return this.args.length >= 1? this.args[0] : NaN
  }

  get y(): number {
    return this.args.length >= 2? this.args[1] : NaN
  }

  get w(): number {
    return this.args.length >= 3? this.args[2] : NaN
  }

  get h(): number {
    return this.args.length >= 3? this.args[2] : NaN
  }
}

class DrawCommand extends ParsedLine {
  lineNumber: number
  args:number[]

  // TODO constructor - then Routine?
}

type ParseResult = {
  errors: string[]
  lines: ParsedLine[]
}

function parseLines(content:string): ParseResult {
  const errors:string[] = []
  const parsedLines:ParsedLine[] = []
  const lines:string[][] = content
    .split("\n")
    .map(line => line.trim().split(" "))
  for (let i = 0; i < lines.length; i++) {
    const tokens:string[] = lines[i]
    if (tokens.length == 0) {
      continue
    }
  }
  return {
    errors,
    lines: parsedLines
  }
}

export function render(renderArgs:RenderArgs): string {
  const {width, height} = renderArgs
  return (`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewbox="0 0 ${width} ${height}">
</svg>
`)
}

async function go():Promise<void> {
  const tst:string = render({width: 128, height: 128})
  const html:string = `
    <!DOCTYPE html>
    <html">
    <head>
      <title>lkjlkj</title>
    </head>
    <body style="background-color: #222">
      <img src="test.svg" />
      <hr />
      ${tst}
    </body>
    </html>
  `
  await fs.writeFile('outputs/test.svg', tst, "utf-8")
  await fs.writeFile('outputs/index.html', html, "utf-8")
}

go()
