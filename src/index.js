import { addTwoValue } from "./add";
import $ from "jquery";

$(function() {
  $("#result").text(addTwoValue(18782, 18782));

  $("#increment").click(function() {
    const num = Number($("#counter").text()) + 1;
    $("#counter").text(num);
  });

  $("#decrement").click(function() {
    const num = Number($("#counter").text()) - 1;
    $("#counter").text(num);
  });
});
