import { colours } from "../_styleguide/_colours";
import { thousands } from "../d3-services/_helpers";
import { breakpoints } from "../_styleguide/_breakpoints";

export class HtmlCircle {
  constructor(
    private ctrlr,
    private element?,
  ) {}

  draw() {
    let element = this.element != undefined ? this.element : this.ctrlr.element;

    let miniContainer = document.createElement("div");
    miniContainer.style.display = "flex";
    miniContainer.style.flexDirection = "column";
    miniContainer.style.alignItems = "center";

    if (this.ctrlr.config.extra.circleLabel) {
      let qualifier = document.createElement("span");
      qualifier.classList.add("label");
      qualifier.style.fontSize = ".825rem";
      qualifier.style.height = "1rem";
      qualifier.style.color = "black";
      qualifier.style.fontFamily = "NotoSans Regular";
      qualifier.style.fontWeight = "normal";
      qualifier.innerText = this.ctrlr.config.extra.circleLabel;
      qualifier.style.margin = "0 auto .75rem auto";
      miniContainer.appendChild(qualifier);
    }

    let div = document.createElement("div");
    div.classList.add("number_circle");
    //  div.style.backgroundColor =  colours[this.ctrlr.firstMapping.colour][1];
    div.style.border =
      "2px solid " + colours[this.ctrlr.firstMapping.colour][0];
    div.style.borderRadius = "50%";
    div.style.display = "flex";
    div.style.position = "relative";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.width = this.ctrlr.config.extra.circleRadius
      ? this.ctrlr.config.extra.circleRadius.toString() + "rem"
      : "7.5rem";
    div.style.height = this.ctrlr.config.extra.circleRadius
      ? this.ctrlr.config.extra.circleRadius.toString() + "rem"
      : "7.5rem";
    div.style.margin =
      window.innerWidth < breakpoints.sm ? "2rem 0" : "0 0 1.5rem 0";

    let number = document.createElement("span");
    number.classList.add("number");
    number.classList.add("in_circle");
    number.style.fontSize = "2.8rem";
    number.style.fontWeight = "500";
    number.style.lineHeight = "1";
    number.style.color = "black";
    number.style.fontFamily = "Sora, sans-serif";

    div.appendChild(number);

    if (this.ctrlr.firstMapping.units) {
      let units = document.createElement("span");
      units.classList.add("units");
      units.innerText = this.ctrlr.firstMapping.units;
      units.style.color = "black";
      units.style.fontFamily = "NotoSans Regular";
      units.style.fontSize = "0.825rem";
      units.style.display = "block";
      // units.style.marginTop = '1rem';
      div.appendChild(units);
    }

    if (this.ctrlr.config.extra.firstInLine) {
      let period = document.createElement("span");
      period.classList.add("period");
      period.style.fontSize = ".825rem";
      period.style.height = "1rem";
      period.style.position = "absolute";
      period.style.top = "calc(50% - .5rem)";
      period.style.left = "-130px";
      period.style.fontFamily = "NotoSans Regular";
      // period.style.textTransform = 'uppercase';
      period.innerText = "deze week:";
      div.appendChild(period);
    }

    miniContainer.appendChild(div);

    if (this.ctrlr.config.extra.trendlineLabel) {
      let label = document.createElement("span");
      label.classList.add("label");
      label.style.fontSize = ".825rem";
      label.style.height = "1rem";
      label.style.color = "black";
      label.style.fontFamily = "NotoSans Regular";
      label.style.fontWeight = "normal";
      label.innerText = this.ctrlr.config.extra.trendlineLabel;
      label.style.margin = "0rem auto .75rem auto";
      miniContainer.appendChild(label);
    }

    if (this.ctrlr.config.extra.noRespondents) {
      let label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("no_respondents");
      label.classList.add(this.ctrlr.mapping.slug);
      label.style.fontSize = ".825rem";
      label.style.height = "1rem";
      label.style.color = "black";
      label.style.fontFamily = "NotoSans Regular";
      label.style.fontWeight = "normal";
      label.style.display = "flex";
      label.style.flexDirection = "column";
      label.style.alignItems = "center";
      label.innerHTML = "<span></span><span>respondenten</span>";
      label.style.margin = "0rem auto 2.5rem auto";
      miniContainer.appendChild(label);
    }

    element.appendChild(miniContainer);
  }

  redraw(data, parameter, extraParameter) {
    let element = this.element != undefined ? this.element : this.ctrlr.element;

    if (element.tagName === "SECTION") {
      element = element.parentNode;
    }

    let value = this.ctrlr.config.extra.decimal
      ? (Math.round(data[0][parameter] * 10) / 10).toFixed(1)
      : Math.round(data[0][parameter]);

    if (this.ctrlr.config.extra.segmentIndicator) {
      element.querySelector(".number.in_circle").innerText =
        this.ctrlr.config.qualifier && this.ctrlr.config.qualifier !== undefined
          ? value + this.ctrlr.config.qualifier
          : value;
    } else {
      element.querySelector(".number.in_circle").innerText =
        parseInt(value.toString()) > 9999 ? thousands(value) : value;
    }

    if (parseInt(value.toString()) > 999) {
      element.querySelector(".number.in_circle").style.fontSize = "1.6rem";
    }

    if (this.ctrlr.config.extra.noRespondents) {
      document.querySelector(
        ".label.no_respondents." +
          this.ctrlr.mapping.slug +
          " span:first-child",
      ).innerHTML = data[0][extraParameter];
    }
  }
}
