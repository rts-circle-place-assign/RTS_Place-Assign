// ひらがな→カタカナの変換
export function hiraToKata(str: string) {
  return str.replace(/[\u3041-\u3096]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60))
}

// カタカナ→ひらがなの変換
export function kataToHira(str: string) {
  return str.replace(/[\u30A1-\u30FA]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
}

export function zeroPadding(num: number) {
  return ('0000' + num).slice(-4)
}
