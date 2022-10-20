const { exit } = require("process")
const fs = require('fs')

const arguments = process.argv.slice(2)

if (!arguments.length) {
  console.error(
    "\n\x1b[1m%s\x1b[0m",
    "Provide input JSON files as command line arguments:"
  )
  console.error(
    "node printJsonAsTable.js example.json\n"
  )
  exit()
}

console.log("\n\x1b[1m%s\x1b[0m", "JSON files:", arguments, "\n")

for (let filePath of arguments) {
  const jsonString = fs.readFileSync(filePath, 'utf8')
  const dataObject = JSON.parse(jsonString)
  console.table(dataObject)
}
