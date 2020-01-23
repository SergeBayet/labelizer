class Autocomplete {
  constructor(element) {
    this.hidden = true;
    this.items = [];
    this.element = element;
    this.div = document.createElement("div");
    this.div.setAttribute('class', 'autocomplete-items');
    this.div.style.display = 'none';
    this.element.parentNode.appendChild(this.div);
    this.span = null;
  }
  setPositionX(x) {
    console.log(x);
    this.div.style.left = x.toString() + 'px';
  }
  setElementToUpdate(element) {
    this.span = element;
  }
  show() {
    this.hidden = false;
    this.div.style.display = 'block';
  }
  hide() {
    this.hidden = true;
    this.div.style.display = 'none';
  }
  update(data, options) {
    let b, i;

    this.div.innerHTML = "";
    if (data.length < 1) {
      this.hide();
      return;
    }
    for (i = 0; i < data.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/

      /*create a DIV element for each matching element:*/
      b = document.createElement("div");
      /*make the matching letters bold:*/
      b.innerHTML = data[i][options.label];
      if (data[i][options.info]) {
        b.innerHTML += " (" + data[i][options.info] + " )";
      }
      /*insert a input field that will hold the current array item's value:*/
      b.innerHTML += "<input type='hidden' value='" + (data[i][options.value] || data[i][options.label]) + "'>";
      /*execute a function when someone clicks on the item value (DIV element):*/
      let _this = this;
      b.addEventListener("click", function (e) {
        /*insert the value for the autocomplete text field:*/
        _this.span.innerText = this.getElementsByTagName("input")[0].value;
        /*close the list of autocompleted values,
        (or any other open lists of autocompleted values:*/
        _this.hide();
        _this.element.focus();
      });
      this.div.appendChild(b);
    }
    this.show();
  }
}
export default Autocomplete;