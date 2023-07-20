const images = import.meta.globEager?.('../assets/images/**/*') || {}

const ret: Record<string, string> = {}
for (const key in images) {
  ret[key.replace('../assets/images/', '')] = images[key].default
}

export default ret as Readonly<typeof ret>