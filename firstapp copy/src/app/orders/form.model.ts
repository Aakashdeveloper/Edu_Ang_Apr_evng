export class IOrder {
    constructor(
        public orderId: number,
        public firstname: string,
        public email: string,
        public address: string,
        public phone: number
    ) {}
}
