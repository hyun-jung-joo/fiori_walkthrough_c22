sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel", // i18n 을 위한 모듈
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
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

        // i18n Model을 현재 뷰에 만들기(set)
        // Resource Model로 생성해준다.
        // bundleName 이라는 property 에 어디에 있는 i18n 파일인지 적어주기
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough_c22.i18n.i18n",
          // i18n.properties 파일의 경로를 적어주기
        });

        // 생성한 모델을 view에 저장해줄 건데, i18n 이라는 이름으로 모델을 setting
        this.getView().setModel(i18nModel, "i18n");
      },

      // App.view.xml 에서 지정해놨던 버튼의 press 이벤트 매소드
      onShowHello() {
        // i18n 모델에서 가져다 쓰기
        // i18n 이름으로 지정된 모델의 모든 리소스(데이터)들을 가지고 온다.
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        // 위에서 oData로 선언했던 모델을 가져오기 (Model 명이 정해져있지 않다) -> 경로로 적어준다.
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        // 두 개를 사용해서 Message를 만들기
        // oBundle (i18n 모델) 에서 helloMsg에 해당하는 것을 가지고 오는데
        // helloMsg=Hello {0} 이므로, {0} 에 들어갈 값으로 sRecipient를 넣어준다.
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // MessageToast 내용으로 위의 정의한 sMsg 로 바꿔준다.
        MessageToast.show(sMsg);
      },
    });
  }
);
