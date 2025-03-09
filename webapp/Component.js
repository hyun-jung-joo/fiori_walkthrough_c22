sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
    (UIComponent, JSONModel) => {
        "use strict";

        return UIComponent.extend("ui5.walkthrough_c22.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json", // manifest.json 을 연결해준다.
            },

            // Controller 에 있던 모델 setting 부분 여기로 옮기기 !
            init() {
                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments); // init 함수를 부르는 부분

                // data model
                const oData = {
                    recipient: {
                        name: "World",
                    },
                };
                const oModel = new JSONModel(oData);
                this.setModel(oModel); // 이 앱에 model을 선언(뷰에 선언이 아니고)

                // router 초기화
                // manifest.json 에 정의된 라우터를 가지고 와서
                // 현재 URL을 확인하고 해당하는 뷰(View)를 자동 로드
                this.getRouter().initialize();
            },
        });
    }
);

// Component.js 는 이 앱의 설정 담당
