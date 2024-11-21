export default function decorate(fieldHtml, fieldJson) {
    const noOfDiv=fieldHtml.querySelectorAll('div').length;
    fieldHtml.style.columnCount=noOfDiv;
    return fieldHtml;
  }