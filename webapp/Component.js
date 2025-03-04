sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough_c22.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        // rootView 를 App.view.xml이라고 여기에서 지정을 해준다.
        rootView: {
          viewName: "ui5.walkthrough_c22.view.App",
          type: "XML",
          id: "app",
        },
      },

      // Controller 에 있던 모델 setting 부분 여기로 옮기기 !
      init() {
        UIComponent.prototype.init.apply(this, arguments); // init 함수를 부르는 부분
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel); // 이 앱에 model을 선언(뷰에 선언이 아니고)

        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough_c22.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n"); // 이 앱에 model을 선언
      },
    });
  }
);

// Component.js 는 이 앱의 설정 담당
