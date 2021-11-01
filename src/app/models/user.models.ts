import { Record } from "./record.model";

export class User {
    constructor(
        public uid: string,
        public profilephoto: string,
        public name: string,
        public records: Record[]
    ) {}
}