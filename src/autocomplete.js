class Autocomplete {
  constructor(element) {
    this.hidden = true;
    this.items = [];
    this.element = element;
    this.div = document.createElement("div");
    this.div.setAttribute('class', 'autocomplete-items');
    this.div.setAttribute('display', 'none');

    this.element.parentNode.appendChild(this.div);

  }
  show() {
    this.hidden = false;
    this.div.setAttribute('display', 'block');
  }
  update(data) {
    let b, i;
    console.log(data);
    this.div.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/

      /*create a DIV element for each matching element:*/
      b = document.createElement("div");
      /*make the matching letters bold:*/
      b.innerHTML = data[i].name;
      console.log(data[i].name);
      /*insert a input field that will hold the current array item's value:*/
      b.innerHTML += "<input type='hidden' value='" + data[i].name + "'>";
      /*execute a function when someone clicks on the item value (DIV element):*/
      let _this = this;
      b.addEventListener("click", function (e) {
        /*insert the value for the autocomplete text field:*/
        _this.element.innerText = this.getElementsByTagName("input")[0].value;
        /*close the list of autocompleted values,
        (or any other open lists of autocompleted values:*/
      });
      this.div.appendChild(b);
    }
    this.show();
  }
}
export default Autocomplete;