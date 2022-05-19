export class EventCollectorModel {
    id!: number;
    ackNumber: number = 0;
    dstAddress: string = '';
    dstPort: number = 0;
    flag: string = '';
    messageHexa: string = '';
    networkId: number = 0;
    protocol: string = '';
    sequenceNumber: number = 0;
    srcAddress: string = '';
    srcPort: number = 0;
    timestamp: string = '';
    typeMessage: string = '';
}
