class Editable {
  constructor(element, syntaxHighlightCallback, context) {
    this.element = element;
    this.callback = syntaxHighlightCallback;
    this.oldAnchor = null;
    this.oldFocus = null;
    this.context = context
    let _this = this;
    this.element.addEventListener('input', function () {
      _this.updateEditor();
    });
    this.updateEditor();
  }
  getTextSegments(element) {
    const textSegments = [];
    //console.log(Array.from(this.element.childNodes));
    Array.from(element.childNodes).forEach((node) => {
      switch (node.nodeType) {
        case node.TEXT_NODE:
          textSegments.push({ text: node.nodeValue, node });
          break;
        case node.ELEMENT_NODE:
          textSegments.splice(textSegments.length, 0, ...(this.getTextSegments(node)));
          break;
        default:
          throw new Error(`Unexpected node type: ${node.nodeType}`);
      }
    });
    //console.log(textSegments);
    return textSegments;
  }
  updateEditor() {
    const sel = window.getSelection();
    const textSegments = this.getTextSegments(this.element);
    const textContent = textSegments.map(({ text }) => text).join('');
    let anchorIndex = null;
    let focusIndex = null;
    let currentIndex = 0;
    textSegments.forEach(({ text, node }) => {
      if (node === sel.anchorNode) {
        anchorIndex = currentIndex + sel.anchorOffset;
      }
      if (node === sel.focusNode) {
        focusIndex = currentIndex + sel.focusOffset;
      }
      currentIndex += text.length;
    });
    console.log("'" + textContent + "'");
    this.element.innerHTML = this.callback(textContent, this.context);

    this.restoreSelection(anchorIndex, focusIndex);
  }
  restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
    if (absoluteAnchorIndex == null) {
      // Correcting a bug with window.getSelection...
      this.placeCaretAtEnd(this.element);
      return;
    }
    const sel = window.getSelection();
    const textSegments = this.getTextSegments(this.element);
    let anchorNode = this.element;
    let anchorIndex = 0;
    let focusNode = this.element;
    let focusIndex = 0;
    let currentIndex = 0;
    textSegments.forEach(({ text, node }) => {
      const startIndexOfNode = currentIndex;
      const endIndexOfNode = startIndexOfNode + text.length;
      if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
        anchorNode = node;
        anchorIndex = absoluteAnchorIndex - startIndexOfNode;
      }
      if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
        focusNode = node;
        focusIndex = absoluteFocusIndex - startIndexOfNode;
      }
      currentIndex += text.length;
    });

    sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
  }
  placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }

}
export default Editable;