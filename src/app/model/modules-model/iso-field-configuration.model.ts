import { Iso8583DialectMsgTemplate } from "./iso8583-dialect-msg-template.model";

export class IsoFieldConfigurationModel {
    id: number = 0;
    attributeId: number = 0;
    dialectId: number = 0;
    isTagNumber: boolean = false;
    isoFieldId: number = 0;
    tagNumber: number = 0;

    dialectMessageTemplate!: Iso8583DialectMsgTemplate;
}
