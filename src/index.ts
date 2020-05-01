import { promises as fs } from "fs"

type RenderArgs = {
  width: number
  height: number
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
    <html style="width: 100%; height: 100%;">
    <head>
      <title>lkjlkj</title>
    </head>
    <body style="width: 100%; height: 100%; background-color: #222">
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
