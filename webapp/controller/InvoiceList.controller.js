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
        });
    }
);
