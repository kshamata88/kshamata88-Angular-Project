export interface User {
    id?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    roles?: string[];
    resetKey?: string;
    resetCount?: number;
    resetTimestamp?: string;
    resetKeyTimestamp?: string;
    password?: string;
}
