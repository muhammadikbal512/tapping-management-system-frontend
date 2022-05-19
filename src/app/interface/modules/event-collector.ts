export interface EventCollectorInterface {
    id: number;
    ackNumber: number;
    dstAddress: string;
    dstPort: number;
    flag: string;
    messageHexa: string;
    networkId: number;
    protocol: string;
    sequenceNumber: number;
    srcAddress: string;
    srcPort: number;
    timestamp: string;
    typeMessage: string
}
