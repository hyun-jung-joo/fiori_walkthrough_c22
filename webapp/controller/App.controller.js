sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough_c22.controller.App", {
      // App.view.xml 에서 지정해놨던 버튼의 press 이벤트 매소드
      onShowHello() {
        // MessageToast 모듈을 불러와서 사용한다.
        MessageToast.show("Hello World");
      },
    });
  }
);
