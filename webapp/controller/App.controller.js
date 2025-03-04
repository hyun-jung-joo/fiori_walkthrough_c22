sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough_c22.controller.App", {
      // ABAP의 Initialization 과 같은 역할을 하는 메소드 onInit()
      onInit() {
        // data model 을 view에 만들기 (set)
        const oData = {
          // 나중에 사용할 때의 경로 : {/recipent/name}
          recipient: {
            name: "World",
          },
        };

        const oModel = new JSONModel(oData); // JSONModel로 위의 데이터를 생성
        this.getView().setModel(oModel); // 이름을 정하지는 않은 Model로 현재 view에 set
      },

      // App.view.xml 에서 지정해놨던 버튼의 press 이벤트 매소드
      onShowHello() {
        // MessageToast 모듈을 불러와서 사용한다.
        MessageToast.show("Hello World");
      },
    });
  }
);
