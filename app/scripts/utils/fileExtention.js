export default function fileExtention (name, defaultExt = '?') {
  if (!name) {
    return defaultExt
  }

  const ext = name.split('.').pop()

  if (ext === name) {
    return defaultExt
  } else {
    return ext.toUpperCase()
  }
}

