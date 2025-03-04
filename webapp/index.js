sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  XMLView.create({
    viewName: "ui5.walkthrough_c22.view.App",
    // view Name 을 지정해서 view를 불러온다.
  }).then((oView) => oView.placeAt("content"));
  // 불러왔으면, index.html의 content부분에 view가 나오게 한다.
});
