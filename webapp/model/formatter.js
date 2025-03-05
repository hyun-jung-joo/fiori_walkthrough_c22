sap.ui.define([], () => {
    "use strict";

    // return 내용의 결과값을 전달
    return {
        // statusText 라는 함수를 정의하고 sStatus를 매개변수로 함.
        // sStatus 값은 InvoiceList를 통해 전달 받는다.
        statusText(sStatus) {
            // i18n 에 있는 모든 내용들을 가지고 온다.
            // Component.js 로 접근해서 !
            const oResourceBundle = this.getOwnerComponent()
                .getModel("i18n")
                .getResourceBundle();

            // case 문으로 sStatus 를 비교한다.
            switch (sStatus) {
                case "A":
                    return oResourceBundle.getText("invoiceStatusA");
                case "B":
                    return oResourceBundle.getText("invoiceStatusB");
                case "C":
                    return oResourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        },
    };
});
