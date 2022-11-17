import { v4 as uuidV4 } from "uuid";

class Task {
    private id?: string;
    public title: string;
    public days_to_expire: number;
    public created_at?: Date;
    constructor(title: string) {
        this.title = title;
        if (!this.id) {
            this.id = uuidV4();
            this.days_to_expire = 5;
            this.created_at = new Date();
        }
    }
};

export { Task };