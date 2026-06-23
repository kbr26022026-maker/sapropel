import { parse } from 'node-html-parser'

// Minimal HTML -> Portable Text converter for the legacy article bodies.
// Handles exactly the tags used in src/data: h2, h3, p, ul/ol/li, blockquote,
// and inline strong/b, em/i, a[href].

function key() {
  return Math.random().toString(36).slice(2, 12)
}

function decode(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function pushSpans(node, marks, markDefs, out) {
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      const text = decode(child.rawText)
      if (text.length) out.push({ _type: 'span', _key: key(), text, marks: [...marks] })
    } else if (child.nodeType === 1) {
      const tag = (child.rawTagName || '').toLowerCase()
      if (tag === 'strong' || tag === 'b') {
        pushSpans(child, [...marks, 'strong'], markDefs, out)
      } else if (tag === 'em' || tag === 'i') {
        pushSpans(child, [...marks, 'em'], markDefs, out)
      } else if (tag === 'a') {
        const href = child.getAttribute('href') || '#'
        const k = key()
        markDefs.push({ _key: k, _type: 'link', href })
        pushSpans(child, [...marks, k], markDefs, out)
      } else {
        pushSpans(child, marks, markDefs, out)
      }
    }
  }
}

function makeBlock(style, node, listItem) {
  const markDefs = []
  const children = []
  pushSpans(node, [], markDefs, children)
  if (!children.length) children.push({ _type: 'span', _key: key(), text: '', marks: [] })
  const block = { _type: 'block', _key: key(), style, markDefs, children }
  if (listItem) {
    block.listItem = listItem
    block.level = 1
  }
  return block
}

export function htmlToPortableText(html) {
  const root = parse(html, { lowerCaseTagName: true })
  const blocks = []
  for (const node of root.childNodes) {
    if (node.nodeType !== 1) continue
    const tag = (node.rawTagName || '').toLowerCase()
    if (tag === 'ul' || tag === 'ol') {
      const listItem = tag === 'ul' ? 'bullet' : 'number'
      for (const li of node.childNodes) {
        if (li.nodeType === 1 && (li.rawTagName || '').toLowerCase() === 'li') {
          blocks.push(makeBlock('normal', li, listItem))
        }
      }
    } else {
      const style = tag === 'h2' || tag === 'h3' || tag === 'blockquote' ? tag : 'normal'
      blocks.push(makeBlock(style, node))
    }
  }
  return blocks
}
