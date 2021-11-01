export class Record {
    constructor(
        public id: string,
        public description: string,
        public date: string,
        public value: number,
        public recordCategory: number
    ) {}
}