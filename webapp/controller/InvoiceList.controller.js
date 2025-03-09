sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
    ],
    (Controller, JSONModel, Filter, FilterOperator) => {
        "use strict";

        return Controller.extend("ui5.walkthrough_c22.controller.InvoiceList", {
            onInit() {
                const oViewModel = new JSONModel({
                    currency: "EUR",
                });
                this.getView().setModel(oViewModel, "view");
            },

            //
            onFilterInvoices(oEvent) {
                // oEvent = 이벤트에 대한 정보가 전달되는 parameter
                const aFilter = []; // filter에 관련된 내용들을 담을 배열 구성
                // SearchField에 입력된 값은 반드시 query
                const sQuery = oEvent.getParameter("query"); // query 라는 이름의 파라미터 값을 가지고옴
                if (sQuery) {
                    // push = 배열에 추가(append)
                    // new Filter(비교할 필드의 이름 / 비교할 방법 / 비교할 값 )
                    // Contains = 포함
                    aFilter.push(
                        new Filter(
                            "ProductName",
                            FilterOperator.Contains,
                            sQuery
                        )
                    );
                }

                // 필터링 결과를 다시 binding(넣어주기)해줘야 함
                const oList = this.byId("invoiceList"); // 넣어 줄 부분 (List의 id)
                const oBinding = oList.getBinding("items"); // 그 리스트 안에서 items를 찾는다.
                oBinding.filter(aFilter); // items에 필터링 적용
            },

            // item 을 눌렀을 때 일어나는 event 
            // detail view 로 이동하게 구현한다. 
            onPress() {
                // OwnerComponent는 manifest.json에서 설정한 다양한 정보를 가지고 옴.
			    // 그 중 manifest.json에서 설정한 Routing에 관련된 객체를 가지고오기 -> getRouter()
                const oRouter = this.getOwnerComponent().getRouter(); 
                oRouter.navTo("detail");  // manifest.json 의 routes 부분에서 name의 값이 detail 인 것으로 이동
                                          // 그 다음에 해당 항목의 Target으로 현재 Page를 교체 
            },
        });
    }
);
