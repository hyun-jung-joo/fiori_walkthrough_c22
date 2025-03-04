sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.walkthrough_c22.controller.App", {
    // App.view.xml 에서 지정해놨던 버튼의 press 이벤트 매소드
    onShowHello() {
      alert("Hello World"); // 버튼을 눌렀을 때 발생하는 작동
    },
  });
});
