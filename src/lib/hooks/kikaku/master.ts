export function blockKind(block: string) {
  if (block.includes('デジ')) {
    return 0
  } else if (block.includes('アナ')) {
    return 1
    // eslint-disable-next-line no-irregular-whitespace
  } else if (block.match(/^[ぁ-んー　]+$/)) {
    return 2
  } else {
    return 3
  }
}

export function shortenBlock(block: string) {
  switch (blockKind(block)) {
    case 0:
      return 'デジ'
    case 1:
      return 'アナ'
    default:
      return block
  }
}

export function cutName(circlename: string, cutId?: number) {
  if (circlename === '') {
    return '99999.svgz'
  } else if (circlename.includes('社務所用事故スペース')) {
    return '90000.svgz'
  } else if (circlename === '上海アリス幻樂団') {
    return '90001.svgz'
  } else {
    return String(cutId) + '.png'
  }
}

export function deskKind(isTwoSp: boolean, circlename: string) {
  if (circlename === '') {
    return 'desk-null.svgz'
  } else if (circlename.includes('社務所スペース')) {
    return 'desk-jiko.svgz'
  } else if (isTwoSp) {
    return 'desk-two.svgz'
  } else {
    return 'desk-one.svgz'
  }
}

export function SpaceNumber(num: number) {
  return ('00' + String(num)).slice(-2)
}
